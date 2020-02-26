#!/usr/bin/env node

const
	fs = require(`fs`),
	path = require(`path`);

const [jsonPath, indentation = 4] = process.argv.slice(2);

const truePath = path.join(...ensureExtension(jsonPath).split(`/`));

const jsonText = fs.readFileSync(truePath, 'utf-8');

const trailingNL = jsonText.slice(-1) === `\n`;

fs.writeFileSync
	( truePath
	, JSON.stringify
		( JSON.parse(jsonText)
		, null
		, +indentation
		)
	    + (trailingNL ? `\n` : ``)
	);

function ensureExtension(path) {
	return /\.json$/.test(path)
		? path
		: path + `.json`;
}
