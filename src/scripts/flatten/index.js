
import { Command } from "commander";
import { spawn } from "node:child_process";
import path from "node:path";
import chalk from "chalk";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

// Get current directory (ESM equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// CLI configuration
const program = new Command();

// Configure the CLI program
program
    .name("flatten-folder")
    .description("Flatten a folder structure by moving all files from subdirectories to the root directory and removing empty folders.")
    .version("1.0.0")
    .argument("[directory]", "Directory to flatten")
    .action(async (directory) => {
        // Default to current working directory if no directory is provided
        if (!directory) {
            console.log(chalk.yellow("⚠️  No directory specified. Please provide a directory path.\n"));
            process.exit(1);
        }

        try {
            // Resolve absolute directory path
            const dirPath = path.resolve(directory);

            // Path to the bash script
            const scriptPath = path.resolve(__dirname, "./flatten-folder.sh");

            console.log(chalk.cyan(`📁 Flattening folder: ${dirPath}`));
            console.log(chalk.gray(`Using script: ${scriptPath}\n`));

            // Execute the bash script
            const bash = spawn("bash", [scriptPath, dirPath], {
                stdio: "inherit"
            });

            // Handle script completion
            bash.on("close", (code) => {
                if (code === 0) {
                    console.log(chalk.bold.green("\n✓ Folder flattened successfully!"));
                } else {
                    console.error(chalk.bold.red(`\n✗ Script exited with code ${code}`));
                    process.exit(code);
                }
            });

            // Handle errors
            bash.on("error", (error) => {
                console.error(chalk.bold.red("✗ Error executing script:"), chalk.red(error.message));
                process.exit(1);
            });

        } catch (error) {
            console.error(chalk.bold.red("✗ Error:"), chalk.red(error.message));
            process.exit(1);
        }
    });

// Parse command line arguments
program.parse();
