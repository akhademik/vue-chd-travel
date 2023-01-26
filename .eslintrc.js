module.exports = {
	env: {
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
	parser: 'vue-eslint-parser',
	rules: {
		'vue/multi-word-component-names': 'off',
		'vue/require-explicit-emits': 'off',
		'vue/require-prop-types': 'off',
		'vue/v-on-event-hyphenation': 'off',
		'vue/attribute-hyphenation': 'off',
	},
	globals: {
		$ref: 'readonly',
	},
	overrides: [
		{
			files: ['*.html'],
			rules: {
				'vue/comment-directive': 'off',
			},
		},
	],
};
