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
        if(Object.isDefined(messages)){
            var filtered = messages.filter(function(message, index, messageArray){
                var existingMessages = [], filterResults = false;
    
                if(index > 0){
                    existingMessages = messageArray.splice(0, index);
                } else {
                    filterResults = true;
                }
    
                if(!filterResults){
                    filterResults = existingMessages.some(function(existingMessage) {
                        if(Object.isDefined(existingMessage) && Object.isDefined(message)) {
                            if(existingMessage.getValue() === message.getValue()) {
                              return true;
                            }
                        }
                    });
                }
    
                return filterResults;
            });
            
            return filtered;
        }
        return messages;
        
    };
});