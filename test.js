import test from 'ava';
import appExists from './index.js';

test('bundle ID', async t => {
	t.true(await appExists('com.apple.Safari'));
	t.false(await appExists('com.foo.bar'));
});

test('name', async t => {
	t.true(await appExists('Safari'));
	t.false(await appExists('FooBar'));
});
