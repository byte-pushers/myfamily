function WebServiceResponse(responseConfig) {

    var status = (Object.isDefined(responseConfig) && Object.isDefined(responseConfig.status))? createStatus(responseConfig.status): null;
    var payload = (Object.isDefined(responseConfig) && Object.isDefined(responseConfig.payload))? createPayload(responseConfig.payload): null;

    this.getRequestStatus = function() {
        return status;
    };

    this.getPayload = function() {
        return payload;
    };

    this.getConfig = function() {
        return responseConfig;
    };

    function createStatus(statusConfig){
        return new WebServiceResponseStatus(statusConfig);
    };

    function createPayload(payloadConfig){
        return new WebServicePayload(payloadConfig);
    };

    this.toJSON = function(serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonStatus = (Object.isDefined(status))? "\"" + status + "\"" : null,
            jsonPayload = (Object.isDefined(payload))? "\"" + payload + "\"" : null,
            json =  "{" +
                "\"status\": " + jsonStatus+ "," +
                "\"payload\": " + jsonPayload +
                "}";
        return json;
    };

    this.toUIObject = function(){
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };
}

WebServiceResponse.prototype.toString = function () {
    return  "{" +
        "status: " + status + "," +
        "payload: " + payload +
    "}";
};