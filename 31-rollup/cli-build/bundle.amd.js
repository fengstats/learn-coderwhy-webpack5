define(['exports'], (function (exports) { 'use strict';

	const itemObj = { name: 'chen', age: 18 };

	itemObj.name = 'z-boss';
	itemObj.age = 20;

	console.log(itemObj);

	exports.itemObj = itemObj;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
