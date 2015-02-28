function Event(eventJsonConfig) {

    var name = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.name))? eventJsonConfig.name: null;
    var description = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.description))? eventJsonConfig.description: null;
    var url = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.url))? eventJsonConfig.url: null;
    var checkbox1 = (Object.isDefined(eventJsonConfig) && Object.isBoolean(eventJsonConfig.checkbox1))? eventJsonConfig.checkbox1: false;
    var checkbox2 = (Object.isDefined(eventJsonConfig) && Object.isBoolean(eventJsonConfig.checkbox2))? eventJsonConfig.checkbox2: false;
    var address1 = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.address1))? eventJsonConfig.address1: null;
    var address2 = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.address2))? eventJsonConfig.address2: null;
    var city = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.city))? eventJsonConfig.city: null;
    var state = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.state))? eventJsonConfig.state: null;
    var zip = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.zip))? eventJsonConfig.zip: null;
    var country = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.country))? eventJsonConfig.country: null;
    var startMonth = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.startMonth))? eventJsonConfig.startMonth: null;
    var startDay = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.startDay))? eventJsonConfig.startDay: null;
    var startYear = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.startYear))? eventJsonConfig.startYear: null;
    var startHour = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.startHour))? eventJsonConfig.startHour: null;
    var startMinute = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.startMinute))? eventJsonConfig.startMinute: null;
    var startMeridiem = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.startMeridiem))? eventJsonConfig.startMeridiem: null;
    var endMonth = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.endMonth))? eventJsonConfig.endMonth: null;
    var endDay = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.endDay))? eventJsonConfig.endDay: null;
    var endYear = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.endYear))? eventJsonConfig.endYear: null;
    var endHour = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.endHour))? eventJsonConfig.endHour: null;
    var endMinute  = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.endMinute))? eventJsonConfig.endMinute: null;
    var endMeridiem  = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.endMeridiem))? eventJsonConfig.endMeridiem: null;
	var attendeeArray = (Object.isDefined(eventJsonConfig) && Object.isArray(eventJsonConfig.attendeeArray))? eventJsonConfig.attendeeArray: [];
	
	this.getAttendeeArray  = function() {
		return attendeeArray;
	};
	
	this.addToAttendeeArray  = function(attendee) {
		attendeeArray.push(attendee);
	};
	
	this.removeFromAttendeeArray = function(index) {
		attendeeArray.splice(index);
	};
	
	this.getAttendee = function(index){
		return attendeeArray[index];
	};
	
	this.setEventName = function(name) {
		name = name;
	};
	
	this.getEventName = function() {
		return name;
	};
	
	this.setDescrption = function(desc){
		description = desc;
	}

	this.getDescription = function() {
		return description;
	};

	this.getCheckbox1 = function() {
		return checkbox1;
	};

	this.getCheckbox2 = function() {
		return checkbox2;
	};
	
	this.getHTML = function() {
		return url;
	};
	
	this.setStreet1 = function(input) {
		address1 = input;
	};
	
	this.getStreet1 = function() {
		return address1;
	};
	
	this.setStreet2 = function(input) {
		address2 = input;
	};

	this.getStreet2 = function() {
		return address2;
	};
	
	this.setCity = function(input) {
		city = input;
	};

	this.getCity = function() {
		return city;
	};

	this.setState = function(input) {
		state = input;
	};
	
	this.getState = function() {
		return state;
	};
	
	this.setZip = function(input) {
		zip = input;
	};

	this.getZip = function() {
		return zip.value;
	};
	
	this.setCountry = function(input) {
		country = input;
	};

	this.getCountry = function() {
		return country;
	};
	
	this.setStartMonth = function(input) {
		startMonth = input;
	};

	this.getStartMonth = function() {
		return startMonth;
	};
	
	this.setStartDay = function(input) {
		startDay = input;
	};

	this.getStartDay = function() {
		return startDay;
	};
	
	this.setStartYear = function(input) {
		startYear = input;
	};

	this.getStartYear = function() {
		return startYear;
	};
	
	this.setStartHour = function(input) {
		startHour = input;
	};

	this.getStartHour = function() {
		return startHour;
	};
	
	this.setStartMinute = function(input) {
		startMinute = input;
	};

	this.getStartMinute = function() {
		return startMinute;
	};
	
	this.setStartMeridiem = function(input) {
		startMeridiem = input;
	};

	this.getStartMeridiem = function() {
		return startMeridiem;
	};
	
	this.setEndMonth = function(input) {
		endMonth = input;
	};

	this.getEndMonth = function() {
		return endMonth;
	};
	
	this.setEndDay = function(input) {
		endDay = input;
	};

	this.getEndDay = function() {
		return endDay;
	};
	
	this.setEndYear = function(input) {
		endYear = input;
	};

	this.getEndYear = function() {
		return endYear;
	};
	
	this.setEndHour = function(input) {
		endHour = input;
	};

	this.getEndHour = function() {
		return endHour;
	};
	
	this.setEndMinute = function(input) {
		endMinute = input;
	};

	this.getEndMinute = function() {
		return endMinute;
	};
	
	this.setEndMeridiem = function(input) {
		endMeridiem = input;
	};

	this.getEndMeridiem = function() {
		return endMeridiem;
	};

    this.getAttendeesAsJSON = function (serializeUIProperties) {
    	var json = "[";
    	attendeeArray.forEach(function (attendee, index, arr) {
            json = json + attendee.toJSON(serializeUIProperties);
            (index = arr.length()) ? null : json = json + ",";
            
        });
    	json = json + "]";
    	return json;
    };

    this.toJSON = function(serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonName = (Object.isDefined(name))? name : null,
            jsonDescription  = (Object.isDefined(description))? "\"" + description + "\"":  null,
            jsonURL = (Object.isDefined(url))? "\"" + url + "\"": null,
            jsonCheckbox1 = (serializeUIProperties)? Object.isDefined(checkbox1)? "\"checkbox1\": " + checkbox1 + ",": false: "",
            jsonCheckbox2 = (serializeUIProperties)? Object.isDefined(checkbox2)? "\"checkbox2\": " + checkbox2 + ",": false: "",
            jsonAddress1 = (Object.isDefined(address1))? "\"" + address1 + "\"": null,
            jsonAddress2 = (Object.isDefined(address2))? "\"" + address2 + "\"": null,
            jsonCity = (Object.isDefined(city))? "\"" + city + "\"": null,
            jsonState = (Object.isDefined(state))? "\"" + state + "\"": null,
            jsonZip = (Object.isDefined(zip))? zip: null,
            jsonCountry = (Object.isDefined(country))? "\"" + country + "\"": null,
            jsonStartMonth = (Object.isDefined(startMonth))? startMonth: null,
            jsonStartDay = (Object.isDefined(startDay))? startDay: null,
            jsonStartYear = (Object.isDefined(startYear))? startYear: null,
            jsonStartHour = (Object.isDefined(startHour))? startHour: null,
            jsonStartMinute = (Object.isDefined(startMinute))? startMinute: null,
            jsonStartMeridiem = (Object.isDefined(startMeridiem))? "\"" + startMeridiem + "\"": null,
            jsonEndMonth = (Object.isDefined(endMonth))? endMonth: null,
            jsonEndDay = (Object.isDefined(endDay))? endDay: null,
            jsonEndYear = (Object.isDefined(endYear))? endYear: null,
            jsonEndHour = (Object.isDefined(endHour))? endHour: null,
            jsonEndMinute = (Object.isDefined(endMinute))? endMinute: null,
            jsonEndMeridiem = (Object.isDefined(endMeridiem))? "\"" + endMeridiem + "\"": null,
            jsonAttendeeArray = (Object.isArray(attendeeArray))? "\"attendeeArray\":" + this.getAttendeesAsJSON(serializeUIProperties) : "[]",
            json =  "{" +
                "\"name\": " + jsonName + "," +
                "\"description\": " + jsonDescription  + "," +
                "\"url\": " +  jsonURL  + "," +
                jsonCheckbox1 +
                jsonCheckbox2 +
                "\"address1\": "+ jsonAddress1  + "," +
                "\"address2\": "+ jsonAddress2  + "," +
                "\"city\": "+ jsonCity  + "," +
                "\"state\": "+ jsonState  + "," +
                "\"zip\": "+ jsonZip  + "," +
                "\"country\": "+ jsonCountry  + "," +
                "\"startMonth\": "+ jsonStartMonth  + "," +
                "\"startDay\": "+ jsonStartDay  + "," +
                "\"startYear\": "+ jsonStartYear  + "," +
                "\"startHour\": "+ jsonStartHour  + "," +
                "\"startMinute\": "+ jsonStartMinute  + "," +
                "\"startMeridiem\": "+ jsonStartMeridiem  + "," +
                "\"endMonth\": "+ jsonEndMonth  + "," +
                "\"endDay\": "+ jsonEndDay  + "," +
                "\"endYear\": "+ jsonEndYear  + "," +
                "\"endHour\": "+ jsonEndHour  + "," +
                "\"endMinute\": "+ jsonEndMinute  + "," +
                "\"endMeridiem\": "+ jsonEndMeridiem  + "," +
                jsonAttendeeArray +
                "}";
        return json;
    };

    this.toUIObject = function(){
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };
    
    this.toString = function () {
        return "Survey {id: " + id + ", name: " + name + ", vistaTitle: " + vistaTitle + ", description: " + description + ", version: " + version +
            ", displayOrder: " + displayOrder + ", mha: " + mha + ", mhaTestName: " + mhaTestName + ", mhaResultGroupIen: " + mhaResultGroupIen +
            ", clinicalReminder" + clinicalReminder + ", markedForDeletion: " + markedForDeletion +
            ", visible: " + visible + ", createdDate: " + createdDate + "}";
    };
}
