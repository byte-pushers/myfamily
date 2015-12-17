function Email(emailJsonConfig){

    var id = (Object.isDefined(emailJsonConfig) && Object.isDefined(emailJsonConfig.id))? emailJsonConfig.id: null;
    var contactType = (Object.isDefined(emailJsonConfig) && Object.isDefined(emailJsonConfig.contactType))? emailJsonConfig.contactType: null;
    var emailAddress = (Object.isDefined(emailJsonConfig) && Object.isDefined(emailJsonConfig.emailAddress))? emailJsonConfig.emailAddress: null;
    var accessLevel = (Object.isDefined(emailJsonConfig.accessLevel) && isValidAccessLevel(emailJsonConfig.accessLevel)) ? emailJsonConfig.accessLevel : "PUBLIC";
    var createdDate = (Object.isDefined(emailJsonConfig) && Object.isDefined(emailJsonConfig.createdDate))? new Date(emailJsonConfig.createdDate): new Date();
    var lastModifiedDate = (Object.isDefined(emailJsonConfig) && Object.isDefined(emailJsonConfig.lastModifiedDate))? new Date(emailJsonConfig.lastModifiedDate): createdDate;
    var createdBy = (Object.isDefined(emailJsonConfig) && Object.isDefined(emailJsonConfig.createdBy))? emailJsonConfig.createdBy: null;
    var lastModifiedBy = (Object.isDefined(emailJsonConfig) && Object.isDefined(emailJsonConfig.lastModifiedBy))? emailJsonConfig.lastModifiedBy: null;

    function isValidAccessLevel(accessLevel){
        var validAccessLevel = false;

        if(Object.isString(accessLevel)){
            if(accessLevel == "PUBLIC"){
                validAccessLevel = true;
            }
            if(accessLevel == "PROTECTED"){
                validAccessLevel = true;
            }
            if(accessLevel == "PRIVATE"){
                validAccessLevel = true;
            }
        }

        return validAccessLevel;
    };

    this.getContactType = function(){
        return contactType;
    };

    this.getEmail = function() {
        return emailAddress;
    };

    this.getConfig = function() {
        return emailJsonConfig;
    };

    this.toJSON = function(serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonId = (Object.isDefined(id))? id : null,
            jsonContactType = (Object.isDefined(contactType))? "\"" + contactType + "\"" : null,
            jsonEmailAddress = (Object.isDefined(emailAddress))? "\"" + emailAddress + "\"" : null,
            jsonAccessLevel = (Object.isDefined(accessLevel))? "\"" + accessLevel + "\"" : null,
            jsonCreatedDate = (Object.isDefined(createdDate)) ? Date.parse(createdDate) : null,
            jsonLastModifiedDate = (Object.isDefined(lastModifiedDate)) ? Date.parse(lastModifiedDate) : null,
            jsonCreatedBy = (Object.isDefined(createdBy)) ? "\"" + createdBy + "\"" : null,
            jsonLastModifiedBy = (Object.isDefined(lastModifiedBy)) ? "\"" + lastModifiedBy + "\"" : null,
            json =  "{" +
                "\"id\": " + jsonId + "," +
                "\"contactType\": " + jsonContactType + "," +
                "\"emailAddress\": " + jsonEmailAddress + "," +
                "\"accessLevel\": " + jsonAccessLevel + "," +
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

Email.prototype.toString = function () {
    return  "{" +
        "id: " + id + "," +
        "contactType: " + contactType + "," +
        "email: " + emailAddress + "," +
        "accessLevel:" + accessLevel +
    "}";
};
