module.exports = {
	settings: {
		jest: {
			version: require('jest/package.json').version
		}
	},
	env: {
		node: true,
		es2022: true,
		'jest/globals': true
	},
	plugins: ['jest'],
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	rules: {
		'comma-dangle': ['never'],
		'prettier/prettier': 'warn'
	}
};
