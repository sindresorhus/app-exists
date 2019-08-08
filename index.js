'use strict';
const runApplescript = require('run-applescript');

module.exports = async nameOrBundleId => {
	nameOrBundleId = `"${nameOrBundleId}"`;

	const isBundleId = nameOrBundleId.includes('.');
	if (!isBundleId) {
		nameOrBundleId = `(get id of application ${nameOrBundleId})`;
	}

	const exists = await runApplescript(`
		try
			tell application "Finder" to get application file id ${nameOrBundleId}
			return true
		end try
	`);

	return exists === 'true';
};
