const baseRules = require('eslint-config-airbnb-base/rules/style')

const [_, ...restricted] = baseRules.rules['no-restricted-syntax']

module.exports = {
	plugins: ['no-foreach'],
	rules: {
	// style
		//tabs
		indent:                           [2, 'tab'],
		'react/jsx-indent':               [2, 'tab'],
		'react/jsx-indent-props':         [2, 'tab'],
		'no-tabs':                        [0],
		//no semicolons
		semi:                             [2, 'never'],
		//spacing
		'key-spacing':                    [2, { mode: 'minimum' }],  // TODO: allow consistent align and 1-space styles
		'space-before-function-paren':    [2, 'never'],
		'react/jsx-space-before-closing': [2, 'never'],
		//indented empty lines
		'no-trailing-spaces':             [2, { skipBlankLines: true }], // TODO: enforce indented empty lines
	// best practices
		//x == null is a common idiom testing for null and undefined
		eqeqeq:                           [2, 'always', { null: 'ignore' }],
		//function statements for function.name
		'func-style':                     [2, 'declaration', { allowArrowFunctions: true }],
		//for..of instead of forEach: be explicit about using side effects
		'no-foreach/no-foreach':          [2],
		'no-restricted-syntax':           [2, ...restricted.filter(r => r !== 'ForOfStatement')],
		//allow python-style _ignored variables
		'no-unused-vars':                 [2, { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
	},
}
