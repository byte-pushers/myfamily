myFamilyApp.service('EventService', function() {
	var eventArray = [];
	var currentEventIndex = 0;
	var load = false;

    function getEventArray(){
        return eventArray;
    }

    function addEvent(newObj) {
        eventArray.push(newObj);
    }

    function deleteEvent(index) {
        eventArray.splice(index, 1);
    }

    function getEvent(index){
        return eventArray[index];
    }

    function getEventArraySize() {
        return eventArray.length;
    }

    function getCurrentEventIndex() {
        return currentEventIndex;
    }

    function setCurrentEventIndex(num) {
        currentEventIndex = num;
    }

    function getLoad(){
        return load;
    }

    function setLoad(val){
        load = val;
    }

    return {
            getEventArray : getEventArray,
            addEvent: addEvent,
            deleteEvent: deleteEvent,
            getEventArraySize : getEventArraySize,
            getEvent : getEvent,
            getCurrentEventIndex : getCurrentEventIndex,
            setCurrentEventIndex : setCurrentEventIndex,
            getLoad : getLoad,
            setLoad : setLoad
    };
});