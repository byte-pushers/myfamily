/**
 * Created by pouncilm on 11/28/15.
 */
function ProtectedMetaData (protectedMetaDataJsonConfig) {
    var isValidAccessLevel = function (accessLevel) {
        var validAccessLevel = false;
        if (Object.isString(accessLevel)) {
            if (accessLevel === "public") {
                validAccessLevel = true;
            }
            if (accessLevel == "protected") {
                validAccessLevel = true;
            }
            if (accessLevel == "private") {
                validAccessLevel = true;
            }
        }
        return validAccessLevel;
    };

    var attributeName = (Object.isDefined(protectedMetaDataJsonConfig) && Object.isDefined(protectedMetaDataJsonConfig.attributeName)) ? protectedMetaDataJsonConfig.attributeName : null;
    var accessLevel = (Object.isDefined(protectedMetaDataJsonConfig.accessLevel) && isValidAccessLevel(protectedMetaDataJsonConfig.accessLevel)) ? protectedMetaDataJsonConfig.accessLevel : "public";

    this.getAttributeName = function () {
        return attributeName;
    };
    this.getAccessLevel = function () {
        return accessLevel;
    };
    this.toJSON = function (serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties)) ? serializeUIProperties : false;
        var jsonAttributeName = (Object.isDefined(attributeName)) ? attributeName : null, jsonAccessLevel = (Object.isDefined(accessLevel)) ? accessLevel : null, json = "{" + "\"attributeName\": " + jsonAttributeName + "," + "\"accessLevel\": " + jsonAccessLevel + "}";
        return json;
    };
    this.toUIObject = function () {
        var UIObject = JSON.parse(this.toJSON(true));
        return UIObject;
    };
    this.toString = function () {
        return "{attributeName: " + attributeName + "," + " access: " + accessLevel + "}";
    };
}
