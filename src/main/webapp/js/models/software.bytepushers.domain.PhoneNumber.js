function PhoneNumber(phoneNumberJsonConfig) {

	var country = (Object.isDefined(phoneNumberJsonConfig) && Object.isDefined(phoneNumberJsonConfig.country))? phoneNumberJsonConfig.country: null;
	var areaCode = (Object.isDefined(phoneNumberJsonConfig) && Object.isDefined(phoneNumberJsonConfig.areaCode))? phoneNumberJsonConfig.areaCode: null;
	var exchangeCode = (Object.isDefined(phoneNumberJsonConfig) && Object.isDefined(phoneNumberJsonConfig.exchangeCode))? phoneNumberJsonConfig.exchangeCode: null;
	var localNumber = (Object.isDefined(phoneNumberJsonConfig) && Object.isDefined(phoneNumberJsonConfig.localNumber))? phoneNumberJsonConfig.localNumber: null;
    var id = (Object.isDefined(phoneNumberJsonConfig) && Object.isDefined(phoneNumberJsonConfig.id))? phoneNumberJsonConfig.id: null;
    var createdDate = (Object.isDefined(phoneNumberJsonConfig) && Object.isDefined(phoneNumberJsonConfig.createdDate))? new Date(phoneNumberJsonConfig.createdDate): new Date();
    var lastModifiedDate = (Object.isDefined(phoneNumberJsonConfig) && Object.isDefined(phoneNumberJsonConfig.lastModifiedDate))? new Date(phoneNumberJsonConfig.lastModifiedDate): createdDate;
    var createdBy = (Object.isDefined(phoneNumberJsonConfig) && Object.isDefined(phoneNumberJsonConfig.createdBy))? phoneNumberJsonConfig.createdBy: null;
    var lastModifiedBy = (Object.isDefined(phoneNumberJsonConfig) && Object.isDefined(phoneNumberJsonConfig.lastModifiedBy))? phoneNumberJsonConfig.lastModifiedBy: null;

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
        return phoneNumberJsonConfig;
    };

    function createProtectedMetaData(protectedMetaDataJsonConfigArray){
        var tempProtectedMetaData = [];
        if ((Object.isDefined(protectedMetaDataJsonConfigArray) && (Object.isArray(protectedMetaDataJsonConfigArray)))){
            protectedMetaDataJsonConfigArray.forEach(function (protectedMetaDataJsonConfig){
                tempProtectedMetaData.push(new ProtectedMetaData(protectedMetaDataJsonConfig));
            });
        }
        return tempProtectedMetaData;
    }
	this.toJSON = function(serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonId = (Object.isDefined(id))? id  : null,
            jsonCountry = (Object.isDefined(country))? "\"" + country + "\"" : null,
            jsonAreaCode = (Object.isDefined(areaCode))? "\"" + areaCode + "\"" : null,
            jsonExchangeCode = (Object.isDefined(exchangeCode))? "\"" + exchangeCode + "\"" : null,
            jsonLocalNumber = (Object.isDefined(localNumber))? "\"" + localNumber + "\"" : null,
            jsonCreatedDate = (Object.isDefined(createdDate)) ? Date.parse(createdDate) : null,
            jsonLastModifiedDate = (Object.isDefined(lastModifiedDate)) ? Date.parse(lastModifiedDate) : null,
            jsonCreatedBy = (Object.isDefined(createdBy)) ? "\"" + createdBy + "\"" : null,
            jsonLastModifiedBy = (Object.isDefined(lastModifiedBy)) ? "\"" + lastModifiedBy + "\"" : null,
            json =  "{" +
                "\"id\": " + jsonId + "," +
                "\"contactType\": " + "\"PRIMARY\"" + "," +
                "\"country\": " + jsonCountry + "," +
                "\"areaCode\": " + jsonAreaCode + "," +
                "\"exchangeCode\": " + jsonExchangeCode + "," +
                "\"localNumber\": " + jsonLocalNumber  + "," +
                "\"createdDate\": " + jsonCreatedDate + "," +
                "\"lastModifiedDate\": " + jsonLastModifiedDate + "," +
                "\"createdBy\": " + jsonCreatedBy + "," +
                "\"lastModifiedBy\": " + jsonLastModifiedBy +
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