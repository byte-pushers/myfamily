myFamilyApp.service('EventService', function() {
	var eventArray = [];
	var eventCounter = 0;

    function getEventArray(){
        return eventArray;
    }

    function addEvent(newObj) {
        eventArray.push(newObj);
    }

    function removeEvent(index) {
        eventArray.splice(index, 1);
    }

    function getEvent(index){
        return eventArray[index];
    }

    function getEventArraySize() {
        return eventArray.length;
    }

    function getEventCounter() {
        return eventCounter;
    }

    function setEventCounter(num) {
        eventCounter = num;
    }

    return {
            getEventArray : getEventArray,
            addEvent: addEvent,
            removeEvent: removeEvent,
            getEventArraySize : getEventArraySize,
            getEvent : getEvent,
            getEventCounter : getEventCounter,
            setEventCounter : setEventCounter
    };
});