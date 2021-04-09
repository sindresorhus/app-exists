import {expectType} from 'tsd';
import appExists from './index.js';

expectType<Promise<boolean>>(appExists('com.sindresorhus.Gifski'));
