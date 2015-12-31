/**
 * <p>Static function that is used to trim the white spaces from the beginning and end of the string.</p>
 * @static
 * @function
 * @return {<a href="http://www.w3schools.com/jsref/jsref_obj_string.asp">String</a>} The value of the string after it has been trimmed.
 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
*/
String.prototype.trim = function () {
	"use strict";
	return this.replace(/^\s+|\s+$/g, '');
};

if (!String.prototype.includes) {
	String.prototype.includes = function() {'use strict';
		return String.prototype.indexOf.apply(this, arguments) !== -1;
	};
}

/**
 * <p>Convenience function that will format a string with dynamic variables.</p>
 * @param {...string} string - first argument is the string to be formatted.  The remaining arguments are the format items (e.g. "{0}")
 * @function
 * @return {<a href="http://www.w3schools.com/jsref/jsref_obj_string.asp">String</a>} The value of the string after it has been formatted.
 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
 */
String.prototype.format = function() {
	// The string containing the format items (e.g. "{0}")
	// will and always has to be the first argument.
	//var theString = arguments[0];
	var theString = this.toString();

	// start with the second argument (i = 1)
	for (var i = 0; i < arguments.length; i++) {
		// "gm" = RegEx options for Global search (more than one instance)
		// and for Multiline search
		var regEx = new RegExp("\\{" + (i + 1) + "\\}", "gm");
		theString = theString.replace(regEx, arguments[i]);
		//theString = this.replace(regEx, arguments[i]);
	}

	return theString;
};

String.prototype.toCamelCase = function() {
	return this.replace(/^([A-Z])|\s(\w)/g, function(match, p1, p2, offset) {
		if (p2) return p2.toUpperCase();
		return p1.toLowerCase();
	});
};

String.prototype.toNormalCase = function() {
	return this.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, function(str){ return str.toUpperCase(); });
};