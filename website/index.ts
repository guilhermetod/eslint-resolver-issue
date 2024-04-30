import { consecutiveUniqueRandom } from 'unique-random';

import { one } from '@common';

import { two } from './two';

console.log(one, two, consecutiveUniqueRandom(0, 10));
