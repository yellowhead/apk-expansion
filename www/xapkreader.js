/**
 * cordova is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) Quentin Aupetit 2013
 */
	
cordova.define("com.phonegap.plugins.xapkreader.XAPKReader", function(require, exports, module) {
	console.log("Test");
	var exec = require("cordova/exec");
	
	var XAPKReader = function() {};

	XAPKReader.prototype.get = function(filename, success, fail) {
		if(!filename) { return false; }

		if (!fail) { fail = function(){}; }

		if (typeof fail != "function")  {
			console.log("XAPKReader.get failure: failure parameter not a function");
			return;
		}

		if (typeof success != "function") {
			fail("success callback parameter must be a function");
			return;
		}

		return exec(success, fail, "XAPKReader", "get", [filename]);
	};

	var xapkreader = new XAPKReader();
	module.exports = xapkreader;

});

//-------------------------------------------------------------------
// if(!window.plugins) {
// 	window.plugins = {};
// }
// if (!window.plugins.xapkreader) {
// 	window.plugins.xapkreader = cordova.require("cordova/plugins/xapkreader");
// }