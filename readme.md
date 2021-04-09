# app-exists

> Check if an app exists on macOS

## Install

```
$ npm install app-exists
```

## Usage

```js
import appExists from 'app-exists';

console.log(await appExists('com.sindresorhus.Gifski'));
//=> true

console.log(await appExists('Gifski'));
//=> true

console.log(await appExists('com.sindresorhus.UnicornCakeFun'));
//=> false
```

## API

### appExists(bundleIdOrName)

Returns a `Promise<Boolean>` of whether the app exists on the user's system.

#### bundleIdOrName

The [bundle ID](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleidentifier) or name of the app.

Prefer specifying bundle ID whenever possible as it's more unique.

## Related

- [file-icon](https://github.com/sindresorhus/file-icon) - Get the icon of a file or app as a PNG image
- [bundle-name](https://github.com/sindresorhus/bundle-name) - Get bundle name from a bundle identifier
- [bundle-id](https://github.com/sindresorhus/bundle-id) - Get bundle identifier from a bundle name
