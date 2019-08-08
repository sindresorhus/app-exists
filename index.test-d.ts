import {expectType} from 'tsd';
import appExists = require('.');

expectType<Promise<boolean>>(appExists("com.sindresorhus.Gifski"));
