(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.lazyCodeUtils = {}));
})(this, (function (exports) { 'use strict';

	const itemObj = { name: 'chen', age: 18 };

	itemObj.name = 'z-boss';
	itemObj.age = 20;

	console.log(itemObj);

	exports.itemObj = itemObj;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
