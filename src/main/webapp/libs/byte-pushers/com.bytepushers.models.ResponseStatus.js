/**
 * Represents the application api.  If the variable is already defined use it,
 * otherwise create an empty object.
 *
 * @type {BytePushers|*|BytePushers|*|{}|{}}
 */
var BytePushers = BytePushers || {};
/**
 * Represents the application static variable. Use existing static variable, if one already exists,
 * otherwise create a new one.
 *
 * @static
 * @type {*|BytePushers.models|*|BytePushers.models|Object|*|Object|*}
 */
BytePushers.models = BytePushers.models || BytePushers.namespace("software.bytepushers.models");
/**
 * Constructor method for the ResponseStatus Domain Model class.  The properties of this class can be initialized with
 * the jsonResponseStatus Object.
 * @class
 * @classdesc   This class is a domain model class; which means it has both behaviour and state
 *              information about the user.
 * @param {JSON Object}  jsonResponseStatus  Represents the JSON representation of a Response Status object.
 * @constructor
 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
 */
BytePushers.models.ResponseStatus =  function (jsonResponseStatus) {
    var convertingArray = function(jsonMessages, errorType){
        var msgArray = [], msg;

        jsonMessages.forEach(function (message, index, array) {
            // Create new message object with errory Type and messages from jsonMsgs Array.
            msg = new BytePushers.models.Message({type: errorType, value: message})

            //TODO: Put msg object into the msgArray.
        });
    };

    var convertingArray2 = function(jsonMessages, errorType){
        var msgArray = [], msg;

        //TODO: use for loop to loop through the jsonMessages Array.
        //START Loop
        //TODO: Assigned index value out of array to a message variable upon each loop.
        //todo: Create new message object with error Type and messages variable from jsonMsgs Array.
        //TODO: Put msg object into the msgArray.
        //END Loop
    };

    var determineMessageType = function(requestStatus){
        var messageType = (requestStatus.toLowerCase() === "Failure".toLowerCase()) ? "error" : "";
        return messageType;
    };
    /**
     * Represent the response requestStatus from a Restful service call.
     *
     * @private
     * @field
     * @type {String}
     */
     var requestStatus = (Object.isDefined(jsonResponseStatus) && Object.isDefined(jsonResponseStatus.requestStatus)) ? jsonResponseStatus.requestStatus : "Failure",
        /**
         * Represent the response requestStatus message from a Restful service call.
         *
         * @private
         * @field
         * @type {EScreeningDashboardApp.models.Message}
         */
        messages = (Object.isDefined(jsonResponseStatus) && Object.isArray(jsonResponseStatus.messages)) ? convertingArray(jsonResponseStatus.messages, determineMessageType(requestStatus)) : [];//(requestStatus.toLowerCase() === "failed")? new BytePushers.models.Message({type: "error", value: jsonResponseStatus.message}): new BytePushers.models.Message({type: "success", value: jsonResponseStatus.message}) : null,
        /**
         * Represent the response requestStatus exception from a Restful service call.
         *
         * @private
         * @field
         * @type {BytePushers.models.ResponseException}
         */
        exception = (Object.isDefined(jsonResponseStatus) && Object.isDefined(jsonResponseStatus.exception)) ? new BytePushers.models.ResponseException(jsonResponseStatus.exception) : null;




    /**
     * Convenience method that gets the response message of a service call.
     *
     * @public
     * @method
     * @returns {EScreeningDashboardApp.models.Message} The response message of the service call.
     */
    this.getMessage = function () {
        return message;
    };

    /**
     * Convenience method that gets the response requestStatus of a service call.
     *
     * @public
     * @method
     * @returns {String} The response requestStatus of a service call.
     */
    this.getRequestStatus = function () {
        return requestStatus;
    };

    /**
     * Convenience method that gets the response requestStatus exception of a service call.
     *
     * @public
     * @method
     * @returns {BytePushers.models.ResponseException} The response requestStatus exception of a service call.
     */
    this.getException = function () {
        return exception;
    };
};