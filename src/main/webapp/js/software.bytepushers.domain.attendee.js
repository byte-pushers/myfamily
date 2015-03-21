function Attendee(attendeeJsonConfig) {
	
	var name = (Object.isDefined(attendeeJsonConfig) && Object.isDefined(attendeeJsonConfig.name))? attendeeJsonConfig.name: null;
    var email = (Object.isDefined(attendeeJsonConfig) && Object.isDefined(attendeeJsonConfig.email))? attendeeJsonConfig.email: null;

    var alphaRegex = new RegExp("^[A-Z]+$", "i");
    var numericRegex = new RegExp("^[0-9]+$");
    var alphaNumericRegex = new RegExp("^[A-Z0-9.! ?]+$", "i");
    var URLRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    var emailRegex = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9]+.[A-Z]{3}$", "i");



	this.setName = function(n) {
		name = n;
	}
	
	this.getName = function() {
		return name;
	}

	this.getEmail = function() {
		return email;
	};
	
	this.setEmail = function(e) {

		email = e;
	};
	
	this.toJSON = function(serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonAttendeeName = (Object.isDefined(name))? name : null,
            jsonAttendeeEmail = (Object.isDefined(email))? "\"" + email + "\"":  null,
            json =  "{" +
                "\"attendeeFirstName\": " + jsonAttendeeName + "," +
                "\"attendeeEmail\": " +  jsonAttendeeEmail +
                "}";
        return json;
    };
    
    this.toUIObject = function(){
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };
    
this.toString = function () {
    	
    	return "Attendee(s) {" +
        "name: " + name + "," +
        " email: " + email  + "," +
        "}";
    };
}