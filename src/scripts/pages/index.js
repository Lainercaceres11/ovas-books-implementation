

import fs from "node:fs/promises";
import { confirm, input, select } from "@inquirer/prompts";
import path from "node:path";
import chalk from "chalk";

// Main CLI function with interactive prompts
async function main() {
    console.log(chalk.bold.cyan("\n📁 Create Page Files CLI\n"));

    try {
        // Prompt for directory path
        const directory = await input({
            message: "Enter the directory path:",
            default: "./pages",
            validate: (value) => {
                if (!value || value.trim() === "") {
                    return "Directory path is required";
                }
                return true;
            }
        });

        // Prompt for base name
        const baseName = await input({
            message: "Enter the base name for page files:",
            default: "page"
        });

        // Prompt for starting index
        const startIndex = await input({
            message: "Enter the starting index:",
            default: "1",
            validate: (value) => {
                const num = parseInt(value, 10);
                if (isNaN(num) || num < 0) {
                    return "Please enter a valid positive number";
                }
                return true;
            }
        });

        // Prompt for file extension
        const extension = await select({
            message: "Select file extension:",
            choices: [
                { name: "TSX (.tsx)", value: ".tsx" },
                { name: "JSX (.jsx)", value: ".jsx" },
                { name: "HTML (.html)", value: ".html" },
                { name: "JavaScript (.js)", value: ".js" },
                { name: "CSS (.css)", value: ".css" },
                { name: "Custom", value: "custom" }
            ],
            default: ".tsx"
        });

        let fileExtension = extension;
        if (extension === "custom") {
            const customExt = await input({
                message: "Enter custom file extension:",
                default: ".txt",
                validate: (value) => {
                    if (!value || value.trim() === "") {
                        return "Extension is required";
                    }
                    return true;
                }
            });
            fileExtension = customExt.startsWith('.') ? customExt : `.${customExt}`;
        }

        // Prompt for number of files
        const fileCount = await input({
            message: "How many files do you want to create?",
            default: "10",
            validate: (value) => {
                const num = parseInt(value, 10);
                if (isNaN(num) || num <= 0) {
                    return "Please enter a valid positive number";
                }
                if (num > 1000) {
                    return "Maximum 1000 files allowed";
                }
                return true;
            }
        });

        // Confirm before creating files
        const confirmed = await confirm({
            message: `Create ${fileCount} files (${baseName}-${startIndex}${fileExtension}, ...) in "${directory}"?`,
            default: true
        });

        if (!confirmed) {
            console.log(chalk.yellow("\n✗ Operation cancelled"));
            return;
        }

        // Resolve absolute directory path
        const dirPath = path.resolve(directory);
        
        // Ensure the directory exists
        await fs.mkdir(dirPath, { recursive: true });

        const start = parseInt(startIndex, 10);
        const count = parseInt(fileCount, 10);

        // Calculate padding length based on the maximum index
        const maxIndex = start + count - 1;
        const paddingLength = maxIndex.toString().length;

        console.log(chalk.cyan(`\n📝 Creating ${count} files...\n`));

        // Create specified number of page files
        for (let i = 0; i < count; i++) {
            const fileIndex = start + i;
            const paddedIndex = fileIndex.toString().padStart(paddingLength, '0');
            const newFileName = `${baseName}-${paddedIndex}${fileExtension}`;
            const newPath = path.join(dirPath, newFileName);
            
            // Create an empty file
            await fs.writeFile(newPath, '');
            console.log(chalk.green(`✓ Created: ${newFileName}`));
        }

        console.log(chalk.bold.green(`\n✓ Successfully created ${count} files in ${dirPath}\n`));

    } catch (error) {
        if (error.name === 'ExitPromptError') {
            console.log(chalk.yellow("\n✗ Operation cancelled"));
            process.exit(0);
        }
        console.error(chalk.bold.red("\n✗ Error:"), chalk.red(error.message));
        process.exit(1);
    }
}

// Run the CLI
main();