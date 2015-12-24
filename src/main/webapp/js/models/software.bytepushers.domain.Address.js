function Address(addressJsonConfig) {

    var contactType = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.contactType))? addressJsonConfig.contactType: null;
	var street1 = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.street1))? addressJsonConfig.street1: null;
	var street2 = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.street2))? addressJsonConfig.street2: null;
	var city = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.city))? addressJsonConfig.city: null;
	var state = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.state))? addressJsonConfig.state: null;
	var zip = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.zip))? addressJsonConfig.zip: null;
    var country = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.country))? addressJsonConfig.country: null;
    var id = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.id))? addressJsonConfig.id: null;
    var createdDate = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.createdDate))? new Date(addressJsonConfig.createdDate): new Date();
    var lastModifiedDate = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.lastModifiedDate))? new Date(addressJsonConfig.lastModifiedDate): createdDate;
    var createdBy = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.createdBy))? addressJsonConfig.createdBy: null;
    var lastModifiedBy = (Object.isDefined(addressJsonConfig) && Object.isDefined(addressJsonConfig.lastModifiedBy))? addressJsonConfig.lastModifiedBy: null;
    var protectedMetaData = (Object.isDefined(addressJsonConfig) && Object.isArray(addressJsonConfig.protectedMetaData))? createProtectedMetaData(addressJsonConfig.protectedMetaData) : [];

    this.getProtectedMetaData = function(){
        return protectedMetaData;
    };

	this.getStreet1 = function() {
		return street1;
	};

	this.getStreet2 = function() {
        return street2;
    };

    this.getCity = function() {
        return city;
    };

    this.getState = function() {
        return state;
    };

    this.getZip = function() {
        return zip;
    };

    this.getCountry = function() {
        return country;
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
        return addressJsonConfig;
    };

    function createProtectedMetaData(protectedMetaDataJsonConfigArray){
        var tempProtectedMetaData = [];
        if((Object.isDefined(protectedMetaDataJsonConfigArray) && (Object.isArray(protectedMetaDataJsonConfigArray)))){
            protectedMetaDataJsonConfigArray.forEach(function (protectedMetaDataJsonConfig){
                tempProtectedMetaData.push(new ProtectedMetaData(protectedMetaDataJsonConfig));
            })
        }
        return tempProtectedMetaData;
    }

	this.toJSON = function(serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonId = (Object.isDefined(id))? id  : null,
            jsonContactType = (Object.isDefined(contactType))? "\"" + contactType + "\"" : null,
            jsonStreet1 = (Object.isDefined(street1))? "\"" + street1 + "\"" : null,
            jsonStreet2 = (Object.isDefined(street2))? "\"" + street2 + "\"" : null,
            jsonCity = (Object.isDefined(city))? "\"" + city + "\"" : null,
            jsonState = (Object.isDefined(state))? "\"" + state + "\"" : null,
            jsonZip = (Object.isDefined(zip))? "\"" + zip + "\"" : null,
            jsonCountry = (Object.isDefined(country))? "\"" + country + "\"" : null,
            jsonCreatedDate = (Object.isDefined(createdDate)) ? Date.parse(createdDate) : null,
            jsonLastModifiedDate = (Object.isDefined(lastModifiedDate)) ? Date.parse(lastModifiedDate) : null,
            jsonCreatedBy = (Object.isDefined(createdBy)) ? "\"" + createdBy + "\"" : null,
            jsonLastModifiedBy = (Object.isDefined(lastModifiedBy)) ? "\"" + lastModifiedBy + "\"" : null,
            json =  "{" +
                "\"id\": " + jsonId + "," +
                "\"contactType\": " + jsonContactType + "," +
                "\"street1\": " + jsonStreet1 + "," +
                "\"street2\": " + jsonStreet2 + "," +
                "\"city\": " + jsonCity + "," +
                "\"state\": " + jsonState + "," +
                "\"zip\": " + jsonZip + "," +
                "\"country\": " + jsonCountry + "," +
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

Address.prototype.toString = function () {
    return  "{" +
        "street1: " + street1 + "," +
        "street2: " + street2 + "," +
        "city: " + city + "," +
        "state: " + state + "," +
        "zip: " + zip + "," +
        "country: " + country +
        "}";
};