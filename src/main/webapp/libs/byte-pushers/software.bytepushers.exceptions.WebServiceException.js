/**
 * Created by tonte on 8/10/15.
 */
var BytePushers = BytePushers || {};
BytePushers.exceptions = BytePushers.namespace("com.bytepushers.exceptions");
BytePushers.exceptions.WebServiceException = function(webServiceExceptionConfig) {
    "use strict";
    var exceptionMessages = (Object.isDefined(webServiceExceptionConfig) && Object.isArray(webServiceExceptionConfig.exceptionMessages))? webServiceExceptionConfig.exceptionMessages: [];
    var name = "BytePushers.exceptions.WebServiceException";

    if (Object.isArray(exceptionMessages) && exceptionMessages.length > 0){
        Error.call(this, exceptionMessages[0]);
    } else {
        Error.call(this);
    }

    BytePushers.exceptions.WebServiceException.prototype = new Error();

    this.getName = function() {
        return name;
    };

    this.getExceptionMessages = function() {
        return exceptionMessages;
    };
};