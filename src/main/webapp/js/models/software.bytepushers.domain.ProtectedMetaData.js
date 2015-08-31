function ProtectedMetaData(protectedMetaDataJsonConfig){
    var attributeName = (Object.isDefined(protectedMetaDataJsonConfig) && Object.isDefined(protectedMetaDataJsonConfig.attributeName)) ? protectedMedaDataJsonConfig.attributeName : null;
    var accessLevel = (Object.isDefined(protectedMetaDataJsonConfig.accessLevel) && Object.iValidAccessLevel(protectedMetaDataJsonConfig.accessLevel)) ? emailJsonConfig.accessLevel : public;

    var isValidAccessLevel = function(accessLevel){
        var validAccessLevel = false;

        if(Object.isString(accessLevel)){
            if(accessLevel == "public"){
                accessLevel = true;
            }
            if(accessLevel == "protected"){
                accessLevel = true;
            }
            if(accessLevel == "private"){
                accessLevel = true;
            }
        }

        return validAccessLevel;
    };

    this.getAttributeName = function () {
        return attributeName;
    };
    this.getAccessLevel = function () {
        return accessLevel;
    };


    this.toJSON = function (serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties)) ? serializeUIProperties : false;
        var jsonAttributeName = (Object.isDefined(attributeName)) ? attributeName : null,
            jsonAccessLevel = (Object.isDefined(accessLevel)) ? accessLevel : null,
            json = "{" +
                "\"attributeName\": " + jsonAttributeName + "," +
                "\"accessLevel\": " + jsonAccessLevel +
                "}";

        return json;
    };

    this.toUIObject = function () {
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };
}

ProtectedMetaData.prototype.toString = function () {
    return "{" +
        "attributeName: " + attributeName + "," +
        "access: " + accessLevel +
    "}";
};