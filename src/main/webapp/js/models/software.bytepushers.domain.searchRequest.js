function SearchRequest(searchRequestJsonConfig) {

    var firstName = (Object.isDefined(searchRequestJsonConfig) && Object.isDefined(searchRequestJsonConfig.personId)) ? searchRequestJsonConfig.personId : null;
    var middleName = (Object.isDefined(searchRequestJsonConfig) && Object.isDefined(searchRequestJsonConfig.contactType)) ? searchRequestJsonConfig.contactType : null;
    var lastName = (Object.isDefined(searchRequestJsonConfig) && Object.isDefined(searchRequestJsonConfig.email)) ? searchRequestJsonConfig.email : null;
    var username = (Object.isDefined(searchRequestJsonConfig) && Object.isDefined(searchRequestJsonConfig.email)) ? searchRequestJsonConfig.email : null;
    var address = (Object.isDefined(searchRequestJsonConfig) && Object.isDefined(searchRequestJsonConfig.email)) ? searchRequestJsonConfig.email : null;

    this.getFirstName = function(){
        return firstName;
    };

    this.getMiddleName = function(){
        return middleName;
    };

    this.getLastName = function() {
        return lastName;
    };

    this.getUsername = function() {
        return username;
    };

    this.getAddress = function() {
        return address;
    };

    this.getConfig = function() {
        return searchRequestJsonConfig;
    };

    this.toJSON = function(serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonFirstName = (Object.isDefined(firstName))? "\"" + firstName + "\"" : null,
            jsonMiddleName = (Object.isDefined(middleName))? "\"" + middleName + "\"" : null,
            jsonLastName = (Object.isDefined(lastName))? "\"" + lastName + "\"" : null,
            jsonUsername = (Object.isDefined(username))? "\"" + username + "\"" : null,
            jsonAddress = (Object.isDefined(firstName))? "\"" + address + "\"" : null,
            json =  "{" +
                "\"firstName\": " + jsonFirstName + "," +
                "\"middleName\": " + jsonMiddleName + "," +
                "\"lastName\": " + jsonLastName + "," +
                "\"username\": " + jsonUsername + "," +
                "\"address\": " + address +
                "}";
        return json;
    };

    this.toUIObject = function(){
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };
}

SearchRequest.prototype.toString = function () {
    return  "{" +
        "firstName: " + firstName + "," +
        "middleName: " + middleName + "," +
        "lastName: " + lastName + "," +
        "username: " + username + "," +
        "address: " + address.toString() +
    "}";
};
