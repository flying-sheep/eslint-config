const baseRules = require('eslint-config-airbnb-base/rules/style')

const [_, ...restricted] = baseRules.rules['no-restricted-syntax']

module.exports = {
	plugins: ['no-foreach'],
	rules: {
		/* style */
		
		// tabs
		indent:                           [2, 'tab'],
		'react/jsx-indent':               [2, 'tab'],
		'react/jsx-indent-props':         [2, 'tab'],
		'no-tabs':                        [0],
		// no semicolons
		semi:                             [2, 'never'],
		// spacing
		'key-spacing':                    [2, { mode: 'minimum' }], // TODO: allow consistent align and 1-space styles
		'space-before-function-paren':    [2, { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
		'react/jsx-tag-spacing':          [2, { beforeSelfClosing: 'never' }],
		// indented empty lines and blank lines
		'no-trailing-spaces':             [2, { skipBlankLines: true }], // TODO: enforce indented empty lines
		'lines-between-class-members':    [2, 'always', { exceptAfterSingleLine: true }],
		
		/* best practices */
		
		// x == null is a common idiom testing for null and undefined
		eqeqeq:                           [2, 'always', { null: 'ignore' }],
		// function statements for function.name
		'func-style':                     [2, 'declaration', { allowArrowFunctions: true }],
		// allow using hoisted declarations before they’re defined (necessary for mutual recursion)
		'no-use-before-define':           [2, { functions: false, classes: false }],
		// for..of instead of forEach: be explicit about using side effects
		'no-foreach/no-foreach':          [2],
		'no-restricted-syntax':           [2, ...restricted.filter(r => ![r, r.selector].includes('ForOfStatement'))],
		// allow python-style _ignored variables
		'no-unused-vars':                 [2, { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
		'no-underscore-dangle':           [0],
	},
}
