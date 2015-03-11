myFamilyApp.service('global', function() {
	var eventArray = [];

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

    return {
            addEvent: addEvent,
            removeEvent: removeEvent,
            getEventArraySize : getEventArraySize
    };
});