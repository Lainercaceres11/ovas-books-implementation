

import { Command } from "commander";
import fs from "node:fs/promises";
import path from "node:path";
import chalk from "chalk";

// CLI configuration
const program = new Command();

// Default base name when none is specified
const DEFAULT_BASE_NAME = "default_name";

// Configure the CLI program
program
    .name("normalize-filenames")
    .description("Normalize filenames in a specified directory by converting them to lowercase and replacing spaces with underscores.")
    .version("1.0.0")
    .option("-d, --directory <path>", "Directory to normalize filenames in")
    .option("-n, --name <name>", "Specify a base name for normalization", DEFAULT_BASE_NAME)
    .action(async (options) => {
        // Extract user options
        const directory = options.directory;
        const baseName = options.name;

        // Validate directory input
        if (!directory) {
            console.error(chalk.bold.red("✗ Error:"), chalk.red("Directory path is required."));
            process.exit(1);
        }

        try {   
            // Resolve absolute directory path
            const dirPath = path.resolve(directory);
            // Read all files from the directory
            const files = await fs.readdir(dirPath);

            // Counter for files with custom base name
            let counter = 1;

            for (const file of files) {
                const oldPath = path.join(dirPath, file);
                const fileExtension = path.extname(file);

                let newFileName;
                // If a custom base name was specified
                if (baseName && baseName !== DEFAULT_BASE_NAME) {
                    // Normalize the base name (lowercase and no spaces)
                    const normalizedBaseName = baseName.toLowerCase().replace(/ /g, "_").replace(/_+/g, "_");
                    // Create counter with padding (01, 02, etc.)
                    const paddedCounter = counter.toString().padStart(2, '0');
                    newFileName = `${normalizedBaseName}-${paddedCounter}${fileExtension}`;
                    counter++;
                } else {
                    // Just normalize the existing name
                    newFileName = file.toLowerCase().replace(/ /g, "_").replace(/_+/g, "_");
                }

                const newPath = path.join(dirPath, newFileName);

                // Only rename if the name changed
                if (oldPath !== newPath) {
                    await fs.rename(oldPath, newPath);
                    console.log(chalk.cyan(`${file}`) + chalk.gray(' -> ') + chalk.green(`${newFileName}`));
                }
            }

            console.log(chalk.bold.green("✓ Filename normalization complete."));

        } catch (error) {
            console.error(chalk.bold.red("✗ Error:"), chalk.red(error.message));
        }
    });

// Parse command line arguments
program.parse();
