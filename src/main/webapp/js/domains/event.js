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
    var startDate = (Object.isDefined(eventJsonConfig) && Object.isDate(eventJsonConfig.startDate))? eventJsonConfig.startDate : null;
    var endDate = (Object.isDefined(eventJsonConfig) && Object.isDate(eventJsonConfig.endDate))? eventJsonConfig.endDate : null;
	var attendeeArray = (Object.isDefined(eventJsonConfig) && Object.isArray(eventJsonConfig.attendeeArray))? eventJsonConfig.attendeeArray: [];
	
	this.getAttendeeArray  = function() {
		return attendeeArray;
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
	
	this.setAddress1 = function(input) {
		address1 = input;
	};
	
	this.getAddress1= function() {
		return address1;
	};
	
	this.setAddress2 = function(input) {
		address2 = input;
	};

	this.getAddress2 = function() {
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
	
	this.getStartDate = function(){
		return startDate;
	}
	
	this.setStartDate = function(date) {
		startDate = date;
	}
	
	this.getEndDate = function(){
		return endDate;
	}
	
	this.setEndDate = function(date) {
		endDate = date;
	}
	

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
            jsonStartDate = (Object.isDate(startDate)) ? "\"" + startDate + "\"": null,		
            jsonEndDate = (Object.isDate(endDate))? "\"" + endDate + "\"": null,
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
                "\"startDate\": "+ jsonStartDate  + "," +
                "\"endDate\": "+ jsonEndDate  + "," +
                jsonAttendeeArray +
                "}";
        return json;
    };

    this.toUIObject = function(){
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };
    
    this.toString = function () {
    	
    	return "Event {" +
        "name: " + name + "," +
        "description: " + description  + "," +
        "url: " +  url  + "," +
        "checkbox1: " +  checkbox1  + "," +
        "checkbox2: " +  checkbox2  + "," +
        "address1: "+ address1  + "," +
        "ddress2: "+ address2  + "," +
        "city: "+ city  + "," +
        "state: "+ state  + "," +
        "zip: "+ zip  + "," +
        "country: "+ country  + "," +
        "startDate: "+ startDate  + "," +
        "endDate: "+ endDate  + "," +
        "attendees: " + attendeeArray +
        "}";
    };
}
