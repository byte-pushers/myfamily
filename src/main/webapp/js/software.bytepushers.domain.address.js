function Address(addressJsonConfig) {

	var street1 = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.street1))? addressJsonConfig.street1: null;
	var street2 = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.street2))? addressJsonConfig.street2: null;
	var city = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.city))? addressJsonConfig.city: null;
	var state = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.state))? addressJsonConfig.state: null;
	var zip = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.zip))? addressJsonConfig.zip: null;
    var country = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.country))? addressJsonConfig.country: null;

	this.getStreet1 = function() {
		return street1;
	}

	this.getStreet2 = function() {
        return street2;
    }

    this.getCity = function() {
        return city;
    }

    this.getState = function() {
        return state;
    }

    this.getZip = function() {
        return zip;
    }

    this.getCountry = function() {
        return country;
    }


	this.toJSON = function(serializeUIProperties) {
	console.log(this);
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonStreet1 = (Object.isDefined(street1))? "\"" + street1 + "\"" : null,
            jsonStreet2 = (Object.isDefined(street2))? "\"" + street2 + "\"" : null,
            jsonCity = (Object.isDefined(city))? "\"" + city + "\"" : null,
            jsonState = (Object.isDefined(state))? "\"" + state + "\"" : null,
            jsonZip = (Object.isDefined(zip))? "\"" + zip + "\"" : null,
            jsonCountry = (Object.isDefined(country))? "\"" + country + "\"" : null,
            json =  "{" +
                "\"type\": " + "\"PRIMARY\"" + "," +
                "\"street1\": " + jsonStreet1 + "," +
                "\"street2\": " + jsonStreet2 + "," +
                "\"city\": " + jsonCity + "," +
                "\"state\": " + jsonState + "," +
                "\"zip\": " + jsonZip + "," +
                "\"country\": " + jsonCountry +
            "}";
            console.log(jsonStreet1 + " " + jsonStreet2 + " " + jsonCity + " " + jsonState + " " + jsonZip + " " + jsonCountry);
            console.log(json);
        return json;
    };

    this.toUIObject = function(){
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };

this.toString = function () {
    	return  "{" +
           "street1: " + street1 + "," +
           "street2: " + street2 + "," +
           "city: " + city + "," +
           "state: " + state + "," +
           "zip: " + zip + "," +
           "country: " + country +
           "}";
    };
}