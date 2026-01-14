export default {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"feat", // New feature
				"fix", // Bug fix
				"docs", // Documentation changes
				"style", // Formatting, missing semi-colons, etc.
				"refactor", // Refactoring code
				"perf", // Performance improvements
				"test", // Adding missing tests
				"build", // Build system changes
				"ci", // CI/CD changes
				"revert", // Revert changes
				"wip", // Work in progress
				"chore", // Miscellaneous/other changes
			],
		],
		"type-case": [2, "always", "lower-case"],
		"type-empty": [2, "never"],
		"scope-case": [2, "always", "lower-case"],
		"subject-empty": [2, "never"],
		"subject-full-stop": [2, "never", "."],
		"header-max-length": [2, "always", 100],
		"body-leading-blank": [1, "always"],
		"footer-leading-blank": [1, "always"],
	},
};
