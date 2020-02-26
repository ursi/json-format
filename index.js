#!/usr/bin/env node

const
	fs = require(`fs`),
	path = require(`path`);

const [jsonPath, indentation = 4] = process.argv.slice(2);

const truePath = path.join(...ensureExtension(jsonPath).split(`/`));

fs.writeFileSync
	( truePath
	, JSON.stringify
		( JSON.parse(fs.readFileSync(truePath))
		, null
		, +indentation
		)
	);

function ensureExtension(path) {
	return /\.json$/.test(path)
		? path
		: path + `.json`;
}
