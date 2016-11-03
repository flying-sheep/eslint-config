module.exports = {
	extends: [
		'eslint-config-airbnb',
		'./defaults',
	].map(require.resolve),
	rules: {},
}
