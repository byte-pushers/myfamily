myFamilyApp.service('EventService', function() {
	var eventArray = [];
	var currentEventIndex = 0;
    var currentEvent = null;
	var newEvent = false;

    function getEventArray(){
        return eventArray;
    }

    function addEvent(newObj) {
        eventArray.push(newObj);
    }

    function deleteEvent(input) {
        eventArray.splice(input);
    }

    function getEvent(index){
        return eventArray[index];
    }

    function getEventArraySize() {
        return eventArray.length;
    }

    function getCurrentEvent() {
        return currentEvent;
    }

    function setCurrentEvent(input) {
        currentEvent = input;
    }

    function hasCurrentEventLoaded(){
        if(currentEvent != null){
            return true;
        } else{
            return false;
        }
    }

    function isNewEvent(){
        return newEvent;
    }

    function setNewEvent(input){
        newEvent = input;
    }

    return {
            getEventArray : getEventArray,
            addEvent: addEvent,
            deleteEvent: deleteEvent,
            getEventArraySize : getEventArraySize,
            getEvent : getEvent,
            getCurrentEvent : getCurrentEvent,
            setCurrentEvent : setCurrentEvent,
            hasCurrentEventLoaded : hasCurrentEventLoaded,
            isNewEvent : isNewEvent,
            setNewEvent : setNewEvent
    };
});