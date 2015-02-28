function Event(eventJsonConfig) {

    var eventNameElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.eventNameElement))? eventJsonConfig.eventNameElement: null;
    var descriptionElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.descriptionElement))? eventJsonConfig.descriptionElement: null;
    var htmlElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.htmlElement))? eventJsonConfig.htmlElement: null;
    var check1Value = (Object.isDefined(eventJsonConfig) && Object.isBoolean(eventJsonConfig.check1Value))? eventJsonConfig.check1Value: false;
    var check2Value = (Object.isDefined(eventJsonConfig) && Object.isBoolean(eventJsonConfig.check2Value))? eventJsonConfig.check2Value: false;
    var street1Element = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.street1Element))? eventJsonConfig.street1Element: null;
    var street2Element = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.street2Element))? eventJsonConfig.street2Element: null;
    var cityElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.cityElement))? eventJsonConfig.cityElement: null;
    var stateElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.stateElement))? eventJsonConfig.stateElement: null;
    var zipElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.zipElement))? eventJsonConfig.zipElement: null;
    var countryElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.countryElement))? eventJsonConfig.countryElement: null;
    var startMonthElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.startMonthElement))? eventJsonConfig.startMonthElement: null;
    var startDayElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.startDayElement))? eventJsonConfig.startDayElement: null;
    var startYearElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.startYearElement))? eventJsonConfig.startYearElement: null;
    var startHourElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.startHourElement))? eventJsonConfig.startHourElement: null;
    var startMinuteElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.startMinuteElement))? eventJsonConfig.startMinuteElement: null;
    var startMeridiemElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.startMeridiemElement))? eventJsonConfig.startMeridiemElement: null;
    var endMonthElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.endMonthElement))? eventJsonConfig.endMonthElement: null;
    var endDayElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.endDayElement))? eventJsonConfig.endDayElement: null;
    var endYearElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.endYearElement))? eventJsonConfig.endYearElement: null;
    var endHourElement = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.endHourElement))? eventJsonConfig.endHourElement: null;
    var endMinuteElement  = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.endMinuteElement))? eventJsonConfig.endMinuteElement: null;
    var endMeridiemElement  = (Object.isDefined(eventJsonConfig) && Object.isDefined(eventJsonConfig.endMeridiemElement))? eventJsonConfig.endMeridiemElement: null;
	var attendeeArray = (Object.isDefined(eventJsonConfig) && Object.isArray(eventJsonConfig.attendeeArray))? eventJsonConfig.attendeeArray: [];
	
	this.getAttendeeArray  = function() {
		return attendeeArray;
	};
	
	this.addToAttendeeArray  = function(attendee) {
		attendeeArray.push(attendee);
	};
	
	this.removeFromAttendeeArray = function(index) {
		attendeeArray.splice(index, 1);
	};
	
	this.getAttendee = function(index){
		return attendeeArray[index];
	};
	
	this.setEventName = function(name) {
		eventNameElement = name;
	};
	
	this.getEventName = function() {
		return eventNameElement;
	};
	
	this.setLastName = function(name) {
		lastNameElement = name;
	};

	this.getLastName = function() {
		return lastNameElement;
	};

	this.getFullName = function() {
		return firstName + " " + lastName;
	};

	this.getDescription = function() {
		return descriptionElement;
	};

	this.getCheckbox1 = function() {
		return check1Value;
	};

	this.getCheckbox2 = function() {
		return check2Value;
	};
	
	this.getHTML = function() {
		return htmlElement;
	};
	
	this.setStreet1 = function(input) {
		street1Element = input;
	};
	
	this.getStreet1 = function() {
		return street1Element;
	};
	
	this.setStreet2 = function(input) {
		street2Element = input;
	};

	this.getStreet2 = function() {
		return street2Element;
	};
	
	this.setCity = function(input) {
		cityElement = input;
	};

	this.getCity = function() {
		return cityElement;
	};

	this.setState = function(input) {
		stateElement = input;
	};
	
	this.getState = function() {
		return stateElement;
	};
	
	this.setZip = function(input) {
		zipElement = input;
	};

	this.getZip = function() {
		return zipElement.value;
	};
	
	this.setCountry = function(input) {
		countryElement = input;
	};

	this.getCountry = function() {
		return countryElement;
	};
	
	this.setStartMonth = function(input) {
		startMonthElement = input;
	};

	this.getStartMonth = function() {
		return startMonthElement;
	};
	
	this.setStartDay = function(input) {
		startDayElement = input;
	};

	this.getStartDay = function() {
		return startDayElement;
	};
	
	this.setStartYear = function(input) {
		startYearElement = input;
	};

	this.getStartYear = function() {
		return startYearElement;
	};
	
	this.setStartHour = function(input) {
		startHourElement = input;
	};

	this.getStartHour = function() {
		return startHourElement;
	};
	
	this.setStartMinute = function(input) {
		startMinuteElement = input;
	};

	this.getStartMinute = function() {
		return startMinuteElement;
	};
	
	this.setStartMeridiem = function(input) {
		startMeridiemElement = input;
	};

	this.getStartMeridiem = function() {
		return startMeridiemElement;
	};
	
	this.setEndMonth = function(input) {
		endMonthElement = input;
	};

	this.getEndMonth = function() {
		return endMonthElement;
	};
	
	this.setEndDay = function(input) {
		endDayElement = input;
	};

	this.getEndDay = function() {
		return endDayElement;
	};
	
	this.setEndYear = function(input) {
		endYearElement = input;
	};

	this.getEndYear = function() {
		return endYearElement;
	};
	
	this.setEndHour = function(input) {
		endHourElement = input;
	};

	this.getEndHour = function() {
		return endHourElement;
	};
	
	this.setEndMinute = function(input) {
		endMinuteElement = input;
	};

	this.getEndMinute = function() {
		return endMinuteElement;
	};
	
	this.setEndMeridiem = function(input) {
		endMeridiemElement = input;
	};

	this.getEndMeridiem = function() {
		return endMeridiemElement;
	};

    this.toString = function () {
        return "Survey {id: " + id + ", name: " + name + ", vistaTitle: " + vistaTitle + ", description: " + description + ", version: " + version +
            ", displayOrder: " + displayOrder + ", mha: " + mha + ", mhaTestName: " + mhaTestName + ", mhaResultGroupIen: " + mhaResultGroupIen +
            ", clinicalReminder" + clinicalReminder + ", markedForDeletion: " + markedForDeletion +
            ", visible: " + visible + ", createdDate: " + createdDate + "}";
    };

    this.toJSON = function (serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonEventNameElement = (Object.isDefined(eventNameElement))? eventNameElement : null,
            jsonDescriptionElement = (Object.isDefined(descriptionElement))? "\"" + descriptionElement + "\"":  null,
            jsonHtmlElement = (Object.isDefined(htmlElement))? "\"" + htmlElement + "\"": null,
            jsonCheck1Value = (serializeUIProperties)? Object.isDefined(check1Value)? "\"check1Value\": " + check1Value + ",": false: "",
            jsonCheck2Value = (serializeUIProperties)? Object.isDefined(check2Value)? "\"check2Value\": " + check2Value + ",": false: "",
            jsonStreet1Element = (Object.isDefined(street1Element))? "\"" + street1Element + "\"": null,
            jsonStreet2Element = (Object.isDefined(street2Element))? "\"" + street2Element + "\"": null,
            jsonCityElement = (Object.isDefined(cityElement))? "\"" + cityElement + "\"": null,
            jsonStateElement = (Object.isDefined(stateElement))? "\"" + stateElement + "\"": null,
            jsonZipElement = (Object.isDefined(zipElement))? zipElement: null,
            jsonCountryElement = (Object.isDefined(countryElement))? "\"" + countryElement + "\"": null,
            jsonStartMonthElement = (Object.isDefined(startMonthElement))? startMonthElement: null,
            jsonStartDayElement = (Object.isDefined(startDayElement))? startDayElement: null,
            jsonStartYearElement = (Object.isDefined(startYearElement))? startYearElement: null,
            jsonStartHourElement = (Object.isDefined(startHourElement))? startHourElement: null,
            jsonStartMinuteElement = (Object.isDefined(startMinuteElement))? startMinuteElement: null,
            jsonStartMeridiemElement = (Object.isDefined(startMeridiemElement))? "\"" + startMeridiemElement + "\"": null,
            jsonEndMonthElement = (Object.isDefined(endMonthElement))? endMonthElement: null,
            jsonEndDayElement = (Object.isDefined(endDayElement))? endDayElement: null,
            jsonEndYearElement = (Object.isDefined(endYearElement))? endYearElement: null,
            jsonEndHourElement = (Object.isDefined(endHourElement))? endHourElement: null,
            jsonEndMinuteElement = (Object.isDefined(endMinuteElement))? endMinuteElement: null,
            jsonEndMeridiemElement = (Object.isDefined(endMeridiemElement))? "\"" + endMeridiemElement + "\"": null,
            jsonAttendeeArray = (Object.isArray(attendeeArray))? ",\"attendeeArray\":" + attendeeArray.toJSON(serializeUIProperties): "",
            json =  "{" +
                "\"eventNameElement\": " + jsonEventNameElement + "," +
                "\"descriptionElement\": " + jsonDescriptionElement + "," +
                "\"htmlElement\": " +  jsonHtmlElement + "," +
                jsonCheck1Value +
                jsonCheck2Value +
                "\"street1Element\": "+ jsonStreet1Element + "," +
                "\"street2Element\": "+ jsonStreet2Element + "," +
                "\"cityElement\": "+ jsonCityElement + "," +
                "\"stateElement\": "+ jsonStateElement + "," +
                "\"zipElement\": "+ jsonZipElement + "," +
                "\"countryElement\": "+ jsonCountryElement + "," +
                "\"startMonthElement\": "+ jsonStartMonthElement + "," +
                "\"startDayElement\": "+ jsonStartDayElement + "," +
                "\"startYearElement\": "+ jsonStartYearElement + "," +
                "\"startHourElement\": "+ jsonStartHourElement + "," +
                "\"startMinuteElement\": "+ jsonStartMinuteElement + "," +
                "\"startMeridiemElement\": "+ jsonStartMeridiemElement + "," +
                "\"endMonthElement\": "+ jsonEndMonthElement + "," +
                "\"endDayElement\": "+ jsonEndDayElement + "," +
                "\"endYearElement\": "+ jsonEndYearElement + "," +
                "\"endHourElement\": "+ jsonEndHourElement + "," +
                "\"endMinuteElement\": "+ jsonEndMinuteElement + "," +
                "\"endMeridiemElement\": "+ jsonEndMeridiemElement + "," +
                jsonAttendeeArray +
                "}";

        return json;
    };

    this.toUIObject = function(){
        var surveyUIObject = JSON.parse(this.toJSON(true));

        return surveyUIObject;
    };
}