import path from 'path'

import test from 'ava'
import eslint from 'eslint'

const { CLIEngine } = eslint

const cli = new CLIEngine({ useEslintrc: true })


const allowed = cli.executeOnFiles([
	`${__dirname}/allowed/*`,
	`${__dirname}/../*.js`, // Test code
])
for (const result of allowed.results) {
	const name = path.basename(result.filePath, path.extname(result.filePath))
	test(`allowed: ${name}`, (t) => {
		t.is(result.errorCount, 0)
		t.is(result.warningCount, 0)
	})
}


const disallowed = cli.executeOnFiles([`${__dirname}/disallowed/*`])
for (const result of disallowed.results) {
	const name = path.basename(result.filePath, path.extname(result.filePath))
	test(`disallowed: ${name}`, (t) => {
		t.is(result.errorCount, 1)
		t.is(result.warningCount, 0)
		t.is(result.messages.length, 1)
		
		const ruleName = path.basename(result.messages[0].ruleId)
		t.is(ruleName, name)
	})
}
