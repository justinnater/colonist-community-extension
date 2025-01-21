import solid from "eslint-plugin-solid";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
    {
        files: ["**/*.{ts,tsx}"], // Target only .ts and .tsx files
        ignores: [
            "node_modules/**",
            "dist/**",
            "**/*.d.ts", // Exclude .d.ts files from linting
        ],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: "module",
                project: "./tsconfig.eslint.json", // Use ESLint-specific tsconfig
            },
        },
        plugins: {
            solid,
            "@typescript-eslint": typescriptPlugin,
        },
        rules: {
            ...typescriptPlugin.configs.recommended.rules,
            ...solid.configs.recommended.rules,
            "object-curly-spacing": ["error", "always"], // Enforce spacing in imports
            "quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }], // Enforce double quotes
            "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }] // Use @typescript-eslint rule
        },
    },
];
