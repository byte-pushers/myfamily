function Attendee(firstName, lastName, email) {

	var attendeeFirstName = firstName, 
		attendeeLastName = lastName,
		attendeeEmail = email;

	function setFirstName(firstName) {
		attendeeFirstName = firstName;
	}

	function setLastName(lastName) {
		attendeeLastName = lastName;
	}

	this.getEmail = function() {
		return attendeeEmail;
	};
	
	this.setEmail = function(emailAddress) {
		attendeeEmail = emailAddress;
	};
	
	this.getFirstName = function() {
		return attendeeFirstName;
	};
	
	this.getLastName = function() {
		return attendeeLastName;
	};
	
	this.getFullName = function() {
		return attendeeFirstName + " " + attendeeLastName;
	};
	
	this.toJSON = function(serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonAttendeeFirstName = (Object.isDefined(attendeeFirstName))? attendeeFirstName : null,
            jsonAttendeeLastName = (Object.isDefined(attendeeLastName))? "\"" + attendeeLastName + "\"":  null,
            jsonAttendeeEmail = (Object.isDefined(attendeeEmail))? "\"" + attendeeEmail + "\"": null;
            json =  "{" +
                "\"attendeeFirstName\": " + jsonAttendeeFirstName + "," +
                "\"attendeeLastName\": " + jsonAttendeeLastName + "," +
                "\"attendeeEmail\": " +  jsonAttendeeEmail +
                "}";

        return json;
    };
}