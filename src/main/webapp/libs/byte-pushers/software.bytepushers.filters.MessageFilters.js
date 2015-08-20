/**
 * Created by pouncilt on 9/19/14.
 */
/**
 * Angular service factory method that creates the BatteryService object.
 *
 * @author Bryan Henderson
 */
angular.module('BytePushersApp.filters.messages', []).filter('uniqueMessage', function(){
    'use strict';
    return function (messages) {
        if(Object.isArray(messages)){
            var filteredArray = messages.filter(function(message, index, messageArray){
                var existingMessages = [], filterArrayResults = false;
    
                if(index > 0){
                    existingMessages = messageArray.splice(0, index);
                } else {
                    filterArrayResults = true;
                }
    
                if(!filterArrayResults){
                    filterArrayResults = existingMessages.some(function(existingMessage) {
                        if(Object.isDefined(existingMessage) && Object.isDefined(message)) {
                            if(existingMessage.getValue() === message.getValue()) {
                              return true;
                            }
                        }
                    });
                }
    
                return filterArrayResults;
            });
            
            return filteredArray;
        }
        return filteredArray;
        
    };
}).filter('errorMessage', function (){
    'use strict';
    return function (messages) {
        var filteredArray = [], filterResult = false;
        if(Object.isArray(messages) && messages.length > 0){
            filteredArray = messages.filter(function(message, messageIndex, messageArray) {
                if(message.getType().toLowerCase() === BytePushers.models.Message.ERROR) {
                    if(!Object.isDefined(message.getValue())) {
                        message.setValue(BytePushers.models.Message.ERROR_MSG);
                    }
                    filterResult = true;
                } else {
                    filterResult = false;
                }

                return filterResult;
            });

           filteredArray;
        } else{
            filteredArray = messages;
        }

        return filteredArray
    }
}).filter('successfulMessage', function (){
    'use strict';
    return function (messages) {
        var filteredArray = [], filterResult = false;
        if(Object.isArray(messages)){
            filteredArray = messages.filter(function(message, messageIndex, messageArray) {
                if(message.getType().toLowerCase().contains(BytePushers.models.Message.SUCCESSFUL)) {
                    if(!Object.isDefined(message.getValue())) {
                        message.setValue("Warning:  Successful action did not produce a message.");
                    }
                    filterResult = true;
                } else {
                    filterResult = false;
                }

                return filterResult;
            });

            filteredArray = filteredArray;
        }

        return filteredArray
    }
});