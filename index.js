import {homedir} from 'os';
import path from 'path';
import {promisify} from 'util';
import {execFile} from 'child_process';

const execFileP = promisify(execFile);

export default async function appExists(nameOrBundleId) {
	const isBundleId = nameOrBundleId.includes('.');

	const paths = [
		'/Applications',
		path.join(homedir(), 'Applications')
	];

	const pathArgs = paths.flatMap(path => ['-onlyin', path]);

	const query = isBundleId ?
		`kMDItemContentType == 'com.apple.application-bundle' && kMDItemCFBundleIdentifier == '${nameOrBundleId}'` :
		`kMDItemKind == 'Application' && kMDItemFSName == '${nameOrBundleId}.app'`;

	const {stdout: appPath} = await execFileP('mdfind', [query, ...pathArgs]);

	return Boolean(appPath);
}
