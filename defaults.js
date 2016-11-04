module.exports = {
	plugins: ['no-foreach'],
	rules: {
		// style
		indent:                           [2, 'tab'],
		'react/jsx-indent':               [2, 'tab'],
		'react/jsx-indent-props':         [2, 'tab'],
		'no-tabs':                        [0],
		semi:                             [2, 'never'],
		'key-spacing':                    [2, { mode: 'minimum' }],  // TODO: allow consistent align and 1-space styles
		'space-before-function-paren':    [2, 'never'],
		'react/jsx-space-before-closing': [2, 'never'],
		'no-trailing-spaces':             [2, { skipBlankLines: true }],
		// best practices
		eqeqeq:                           [2, 'always', { null: 'ignore' }],
		'func-style':                     [2, 'declaration', { allowArrowFunctions: true }],
		'no-foreach/no-foreach':          [2],
		'no-unused-vars':                 [2, { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
	},
}
