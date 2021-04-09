/**
Check if an app exists on macOS.

@param bundleIdOrName - The [bundle ID](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleidentifier) or name of the app. Prefer specifying bundle ID whenever possible as it's more unique.

@example
```
import appExists from 'app-exists';

console.log(await appExists('com.sindresorhus.Gifski'));
//=> true

console.log(await appExists('Gifski'));
//=> true

console.log(await appExists('com.sindresorhus.UnicornCakeFun'));
//=> false
```
*/
export default function appExists(bundleIdOrName: string): Promise<boolean>;
