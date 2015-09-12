function PhoneNumber(phoneNumberConfig) {

	var country = (Object.isDefined(phoneNumberConfig) && Object.isDefined(phoneNumberConfig.country))? phoneNumberConfig.country: null;
	var areaCode = (Object.isDefined(phoneNumberConfig) && Object.isDefined(phoneNumberConfig.areaCode))? phoneNumberConfig.areaCode: null;
	var exchangeCode = (Object.isDefined(phoneNumberConfig) && Object.isDefined(phoneNumberConfig.exchangeCode))? phoneNumberConfig.exchangeCode: null;
	var localNumber = (Object.isDefined(phoneNumberConfig) && Object.isDefined(phoneNumberConfig.localNumber))? phoneNumberConfig.localNumber: null;
    var id = (Object.isDefined(phoneNumberConfig) && Object.isDefined(phoneNumberConfig.id))? phoneNumberConfig.id: null;
    var createdDate = (Object.isDefined(phoneNumberConfig) && Object.isDefined(phoneNumberConfig.createdDate))? new Date(phoneNumberConfig.createdDate): new Date();
    var lastModifiedDate = (Object.isDefined(phoneNumberConfig) && Object.isDefined(phoneNumberConfig.lastModifiedDate))? new Date(phoneNumberConfig.lastModifiedDate): createdDate;
    var createdBy = (Object.isDefined(phoneNumberConfig) && Object.isDefined(phoneNumberConfig.createdBy))? phoneNumberConfig.createdBy: null;
    var lastModifiedBy = (Object.isDefined(phoneNumberConfig) && Object.isDefined(phoneNumberConfig.lastModifiedBy))? phoneNumberConfig.lastModifiedBy: null;
    var protectedMetaData = (Object.isDefined(phoneNumberConfig) && Object.isDefined(phoneNumberConfig.getProtectedMetaData))? phoneNumberConfig.protectedMetaData : null;

    this.getProtectedMetaData = function(){
        return protectedMetaData;
    };

	this.getCountry = function() {
		return country;
	};

	this.getAreaCode = function() {
        return areaCode;
    };

    this.getExchangeCode = function() {
        return exchangeCode;
    };

    this.getLocalNumber = function() {
        return localNumber;
    };

    this.getId = function() {
        return id;
    };

    this.getCreatedDate = function() {
        return createdDate;
    };

    this.getLastModifiedDate = function() {
        return id;
    };

    this.getCreatedBy = function() {
        return createdBy;
    };

    this.getLastModifiedBy = function() {
        return lastModifiedBy;
    };

    this.getConfig = function() {
        return phoneNumberConfig;
    };

	this.toJSON = function(serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonCountry = (Object.isDefined(country))? "\"" + country + "\"" : null,
            jsonAreaCode = (Object.isDefined(areaCode))? "\"" + areaCode + "\"" : null,
            jsonExchangeCode = (Object.isDefined(exchangeCode))? "\"" + exchangeCode + "\"" : null,
            jsonLocalNumber = (Object.isDefined(localNumber))? "\"" + localNumber + "\"" : null,
            jsonId = (Object.isDefined(id))? id : null,
            jsonCreatedDate = (Object.isDefined(createdDate))? "\"" + createdDate.toJSON() + "\"" : null,
            jsonLastModifiedDate = (Object.isDefined(lastModifiedDate))? "\"" + lastModifiedDate.toJSON() + "\"" : null,
            jsonCreatedBy = (Object.isDefined(createdBy))? "\"" + createdBy + "\"" : null,
            jsonLastModifiedBy = (Object.isDefined(lastModifiedBy))? "\"" + lastModifiedBy + "\"" : null,
            jsonProtectedMetaData = (Object.isDefined(protectedMetaData))? "\"" + protectedMetaData + "\"" : null,
            json =  "{" +
                "\"contactType\": " + "\"PRIMARY\"" + "," +
                "\"country\": " + jsonCountry + "," +
                "\"areaCode\": " + jsonAreaCode + "," +
                "\"exchangeCode\": " + jsonExchangeCode + "," +
                "\"localNumber\": " + jsonLocalNumber  + "," +
                "\"id\": " + jsonId + "," +
                "\"createdDate\": " + jsonCreatedDate + "," +
                "\"lastModifiedDate\": " + jsonLastModifiedDate + "," +
                "\"createdBy\": " + jsonCreatedBy + "," +
                "\"lastModifiedBy\": " + jsonLastModifiedBy + "," +
                "\"protectedMetaData\": " + jsonProtectedMetaData +
            "}";
        return json;
    };

    this.toUIObject = function(){
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };
}

PhoneNumber.prototype.toString = function () {
    return  "{" +
        "type: " + "PRIMARY" + "," +
        "country: " + country + "," +
        "areaCode: " + areaCode + "," +
        "exchangeCode: " + exchangeCode + "," +
        "localNumber: " + localNumber +
    "}";
};