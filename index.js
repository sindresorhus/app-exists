'use strict';
const {execFile} = require('child_process');
const {promisify} = require('util');

const execFileP = promisify(execFile);

module.exports = async nameOrBundleId => {
	const isBundleId = nameOrBundleId.includes('.');

	const query = isBundleId ?
		`kMDItemContentType == 'com.apple.application-bundle' && kMDItemCFBundleIdentifier == '${nameOrBundleId}'` :
		`kMDItemKind == 'Application' && kMDItemFSName == '${nameOrBundleId}.app'`;

	const {stdout: appPath} = await execFileP('mdfind', [query]);

	return Boolean(appPath);
};
