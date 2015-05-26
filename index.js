'use strict';
var arrayContains = require('array-contains');

module.exports = function (opts) {
	var opts = opts || {};

	if (!opts.userAgent && typeof navigator === 'undefined') {
		return false;
	}

	var reg = new RegExp(/(OPR|Opera)\/((\d+)?[\w\.]+)/);
	var arr = reg.exec(opts.userAgent || navigator.userAgent);

	if (!arr || (opts.version && !arrayContains(arr, opts.version))) {
		return false;
	}

	return true;
}
