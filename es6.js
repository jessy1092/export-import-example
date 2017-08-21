'use strict';

var _common = require('./common');
var y = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};
		if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}
		newObj.default = obj;
		return newObj;
	}
}

console.log("Situation: import a from './common';");
console.log('Answer: ', y.default);
console.log("Situation: import * as b from './common';");
console.log('Answer: ', y);
console.log("Situation: import { foo } from './common';");
console.log('Answer: ', _common);
