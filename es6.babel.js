import x from './common';

import * as y from './common';

import { foo } from './common';

console.log("Situation: import a from './common';");
console.log('Answer: ', x);
console.log("Situation: import * as b from './common';");
console.log('Answer: ', y);
console.log("Situation: import { foo } from './common';");
console.log('Answer: ', foo);

// Situation: import x from './common';
// Answer:  module.exports
// Situation: import * as y from './common';
// Answer:  { '0': 'm',
//   '1': 'o',
//   '2': 'd',
//   '3': 'u',
//   '4': 'l',
//   '5': 'e',
//   '6': '.',
//   '7': 'e',
//   '8': 'x',
//   '9': 'p',
//   '10': 'o',
//   '11': 'r',
//   '12': 't',
//   '13': 's',
//   default: 'module.exports' }
// Situation: import { foo } from './common';
// Answer:  undefined
