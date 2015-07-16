function Email(emailJsonConfig){

    var personId = (Object.isDefined(emailJsonConfig) && Object.isDefined(emailJsonConfig.personId))? emailJsonConfig.personId: null;
    var contactType = (Object.isDefined(emailJsonConfig) && Object.isDefined(emailJsonConfig.contactType))? emailJsonConfig.contactType: null;
    var email = (Object.isDefined(emailJsonConfig) && Object.isDefined(emailJsonConfig.email))? emailJsonConfig.email: null;

    this.getPersonId = function(){
        return personId;
    };

    this.getContactType = function(){
        return contactType;
    };

    this.getEmail = function() {
        return email;
    };

    this.getConfig = function() {
        return emailJsonConfig;
    };

    this.toJSON = function(serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonPersonId = (Object.isDefined(personId))? "\"" + personId + "\"" : null,
            jsonEmail = (Object.isDefined(email))? "\"" + email + "\"" : null,
            json =  "{" +
                "\"personId\": " + jsonPersonId + "," +
                "\"contactType\": " + "\"PRIMARY\"" + "," +
                "\"email\": " + jsonEmail +
                "}";
        return json;
    };

    this.toUIObject = function(){
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };

    this.toString = function () {
        return  "{" +
            "personId: " + personId + "," +
            "contactType: " + contactType + "," +
            "email: " + email + "," +
            "}";
    };
}