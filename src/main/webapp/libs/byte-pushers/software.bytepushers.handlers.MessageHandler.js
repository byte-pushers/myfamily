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
 * @type {*|BytePushers.handlers|*|BytePushers.handlers|Object|*|Object|*}
 */
BytePushers.handlers = BytePushers.handlers || BytePushers.namespace("software.bytepushers.handlers");
/**
 * Constructor method for the MessageHandler class.  The properties of this class can be initialized with
 * the jsonUserObject.
 * @class
 * @classdesc   This class is a handler class; which means it has the behaviour to know how to handle the Message.
 * @param {String}  jsonMessagesArrayObject  Represents the JSON representation of a Answer object.
 * @constructor
 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
 */
BytePushers.handlers.MessageHandler = function (jsonMessagesArrayObject) {
    var messages = (Object.isArray(jsonMessagesArrayObject) && jsonMessagesArrayObject.length > 0)? jsonMessagesArrayObject : [];

    function removeMessage(index){
        if(messages[index].numLives == 0){
            messages.splice(index, 1);
        }
        else{
            messages[index].numLives--;
        }
    }

    this.hasErrorMessages = function() {
        return messages.some( function(message, index) {
            if(Object.isDefined(message)) {
                if (message.getType().toLowerCase() === "error") {
                    return true;
                }
            }
        });
    };

    this.hasSuccessfulMessages = function() {
        return messages.some( function(message, index) {
            if(message.getType().toLowerCase() === BytePushers.models.Message.SUCCESSFUL_SAVE ||
                message.getType().toLowerCase() === BytePushers.models.Message.SUCCESSFUL_DELETE){
                return true;
            }
        });
    };

    this.clearMessages = function(type) {
        type = (Object.isDefined(type))? type : "all";

        messages.forEach( function(message, index) {
            if(type === "all"
                || message.getType().toLowerCase() === type){
                removeMessage(index);
            }
        });
    };

    /**
     * @param someMessage is the message object we are adding
     * @param addDuplicateMessages flag to allow duplicates
     * @param lives is an integer indicating how many times clearMessages() can be called
     * on the message without it being removed.  This is used for times when state transitions
     * happen and you want the message to stay around for the next state.
     */
    this.addMessage = function (someMessage, addDuplicateMessages, lives){
        addDuplicateMessages = (Object.isDefined(addDuplicateMessages))? addDuplicateMessages : false;
        someMessage.numLives = Object.isDefined(lives) && parseInt(lives) == lives ? lives : 0;

        if(addDuplicateMessages){//we don't care if there are dups
            messages.push(someMessage);
        }
        else{
            var foundDuplicatedMessage = messages.some(function (message) {
                if(message.getValue() === someMessage.getValue()) {
                    return true;
                }
            });

            if(!foundDuplicatedMessage) {
                messages.push(someMessage);
            }
        }
    };

    this.addMessages = function (someMessages, addDuplicateMessages, lives){
        if(Object.isArray(someMessages)) {
            someMessages.forEach(function(message, index, array){
                this.addMessage(message, addDuplicateMessages, lives);
            }, this);
        }
    };

    this.getMessages = function(){
        return messages;
    };
};