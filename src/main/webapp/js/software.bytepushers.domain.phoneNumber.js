function PhoneNumber(phoneNumberConfig) {

	var country = (Object.isDefined(phoneNumberConfig) && Object.isDefined(phoneNumberConfig.country))? phoneNumberConfig.country: null;
	var areaCode = (Object.isDefined(phoneNumberConfig) && Object.isDefined(phoneNumberConfig.areaCode))? phoneNumberConfig.areaCode: null;
	var exchangeCode = (Object.isDefined(phoneNumberConfig) && Object.isDefined(phoneNumberConfig.exchangeCode))? phoneNumberConfig.exchangeCode: null;
	var localNumber = (Object.isDefined(phoneNumberConfig) && Object.isDefined(phoneNumberConfig.localNumber))? phoneNumberConfig.localNumber: null;

	this.getCountry = function() {
		return country;
	}

	this.getAreaCode = function() {
        return areaCode;
    }

    this.getExchange = function() {
        return exchangeCode;
    }

    this.getLocalNumber = function() {
        return localNumber;
    }

	this.toJSON = function(serializeUIProperties) {
	console.log(this);
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonCountry = (Object.isDefined(country))? "\"" + country + "\"" : null,
            jsonAreaCode = (Object.isDefined(areaCode))? "\"" + areaCode + "\"" : null,
            jsonExchangeCode = (Object.isDefined(exchangeCode))? "\"" + exchangeCode + "\"" : null,
            jsonLocalNumber = (Object.isDefined(localNumber))? "\"" + localNumber + "\"" : null,
            json =  "{" +
                "\"type\": " + "\"PRIMARY\"" + "," +
                "\"country\": " + jsonCountry + "," +
                "\"areaCode\": " + jsonAreaCode + "," +
                "\"exchangeCode\": " + jsonExchangeCode + "," +
                "\"localNumber\": " + jsonLocalNumber +
            "}";
            console.log(jsonCountry + " " + jsonAreaCode + " " + jsonExchangeCode + " " + jsonLocalNumber);
        return json;
    };

    this.toUIObject = function(){
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };

this.toString = function () {
    	return  "{" +
           "type: " + "PRIMARY" + "," +
           "country: " + country + "," +
           "areaCode: " + areaCode + "," +
           "exchangeCode: " + exchangeCode + "," +
           "localNumber: " + localNumber +
           "}";
    };
}