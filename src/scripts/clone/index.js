import fs from "node:fs/promises";
import { confirm, input, select } from "@inquirer/prompts";
import path from "node:path";
import chalk from "chalk";
import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

// GitHub organization repositories
const PHASER_LABS_REPOS = [
    { name: "arcanum-archer", url: "https://github.com/phaser-labs/arcanum-archer" },
    { name: "city-learning-game", url: "https://github.com/phaser-labs/city-learning-game" },
    { name: "classic-memory-game", url: "https://github.com/phaser-labs/classic-memory-game" },
    { name: "frog-quiz-adventure", url: "https://github.com/phaser-labs/frog-quiz-adventure" },
    { name: "maze-knowledge", url: "https://github.com/phaser-labs/maze-knowledge" },
    { name: "mistery-mode", url: "https://github.com/phaser-labs/mistery-mode" },
    { name: "nira-wisdom-quest", url: "https://github.com/phaser-labs/nira-wisdom-quest" },
    { name: "quiz-board-journey", url: "https://github.com/phaser-labs/quiz-board-journey" },
    { name: "quiz-flight", url: "https://github.com/phaser-labs/quiz-flight" },
    { name: "tap-reveal", url: "https://github.com/phaser-labs/tap-reveal" },
    { name: "temple-of-knowledge", url: "https://github.com/phaser-labs/temple-of-knowledge" },
    { name: "trivia-driver", url: "https://github.com/phaser-labs/trivia-driver" },
    { name: "tricky-rush", url: "https://github.com/phaser-labs/tricky-rush" },
];

/**
 * Clone a git repository
 */
async function cloneRepository(repoUrl, targetPath) {
    try {
        const { stdout, stderr } = await execAsync(`git clone "${repoUrl}" "${targetPath}"`);
        if (stderr && !stderr.includes('Cloning into')) {
            console.log(chalk.dim(stderr));
        }
        return true;
    } catch (error) {
        throw new Error(`Failed to clone repository: ${error.message}`);
    }
}

/**
 * Check if git is available
 */
async function checkGitAvailable() {
    try {
        await execAsync('git --version');
        return true;
    } catch {
        return false;
    }
}

// Main CLI function
async function main() {
    console.log(chalk.bold.cyan("\n🔄 Clonar Repositorios de GitHub CLI\n"));

    try {
        // Check if git is installed
        const gitAvailable = await checkGitAvailable();
        if (!gitAvailable) {
            console.error(chalk.bold.red("\n✗ Error:"), chalk.red("Git no está instalado o no está disponible en PATH"));
            console.log(chalk.yellow("Por favor instala Git desde https://git-scm.com/"));
            process.exit(1);
        }

        // Use repository list
        const repositories = PHASER_LABS_REPOS;
        console.log(chalk.green(`✓ ${repositories.length} repositorios disponibles\n`));

        // Select repository to clone
        const selectedRepo = await select({
            message: "Selecciona un repositorio para clonar:",
            choices: repositories.map(repo => ({
                name: repo.description 
                    ? `${repo.name} - ${repo.description}` 
                    : repo.name,
                value: repo,
                description: repo.url
            })),
            pageSize: 15
        });

        // Prompt for target directory
        const targetDir = await input({
            message: "Ingresa el directorio destino:",
            default: "src/components/games",
            validate: (value) => {
                if (!value || value.trim() === "") {
                    return "La ruta del directorio es requerida";
                }
                return true;
            }
        });

        // Prompt for custom folder name
        const useCustomName = await confirm({
            message: `¿Usar nombre de carpeta personalizado? (por defecto: ${selectedRepo.name})`,
            default: false
        });

        let folderName = selectedRepo.name;
        if (useCustomName) {
            folderName = await input({
                message: "Ingresa el nombre de la carpeta:",
                default: selectedRepo.name,
                validate: (value) => {
                    if (!value || value.trim() === "") {
                        return "El nombre de la carpeta es requerido";
                    }
                    // Check for invalid characters
                    if (/[<>:"|?*]/.test(value)) {
                        return "El nombre de la carpeta contiene caracteres inválidos";
                    }
                    return true;
                }
            });
        }

        // Resolve full path
        const fullTargetPath = path.resolve(targetDir, folderName);

        // Check if directory already exists
        try {
            await fs.access(fullTargetPath);
            const overwrite = await confirm({
                message: chalk.yellow(`El directorio "${folderName}" ya existe. ¿Sobrescribir?`),
                default: false
            });

            if (!overwrite) {
                console.log(chalk.yellow("\n✗ Operación cancelada"));
                return;
            }

            await fs.rm(fullTargetPath, { recursive: true, force: true });
        } catch {
            // Directory doesn't exist, which is fine
        }

        // Final confirmation
        const confirmed = await confirm({
            message: chalk.bold(
                `\n¿Clonar "${selectedRepo.name}" en "${fullTargetPath}"?`
            ),
            default: true
        });

        if (!confirmed) {
            console.log(chalk.yellow("\n✗ Operación cancelada"));
            return;
        }

        // Create target directory
        await fs.mkdir(path.dirname(fullTargetPath), { recursive: true });

        console.log(chalk.cyan(`\n📦 Clonando repositorio...\n`));
        console.log(chalk.dim(`Repositorio: ${selectedRepo.url}`));
        console.log(chalk.dim(`Destino: ${fullTargetPath}\n`));

        // Clone the repository
        await cloneRepository(selectedRepo.url, fullTargetPath);

        console.log(chalk.bold.green(`\n✓ ${selectedRepo.name} clonado exitosamente`));
        console.log(chalk.dim(`Ubicación: ${fullTargetPath}`));
        console.log(chalk.bold.green("\n✓ ¡Listo!\n"));

    } catch (error) {
        if (error.name === 'ExitPromptError') {
            console.log(chalk.yellow("\n✗ Operación cancelada"));
            process.exit(0);
        }
        console.error(chalk.bold.red("\n✗ Error:"), chalk.red(error.message));
        process.exit(1);
    }
}

// Run the CLI
main();
