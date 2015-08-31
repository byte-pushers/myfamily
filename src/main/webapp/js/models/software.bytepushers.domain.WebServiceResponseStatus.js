function WebServiceResponseStatus(responseStatusConfig) {

    var request = {
        Successful: "Successful",
        Failure: "Failure"
    };

    var messages = (Object.isDefined(responseStatusConfig) && Object.isArray(responseStatusConfig.messages))? responseStatusConfig.messages: [];
    var requestStatus = (Object.isDefined(responseStatusConfig) && Object.isDefined(responseStatusConfig.requestStatus))? responseStatusConfig.requestStatus: request.Failure;

    this.getMessages = function() {
        return messages;
    };

    this.getRequestStatus = function() {
        return requestStatus;
    };

    this.getConfig = function() {
        return responseStatusConfig;
    };

    function getMessagesAsJSON(serializeUIProperties){
        var json = "[";
        messages.forEach(function (string, index, arr) {
            json = json + string;
            (index <= arr.length) ? json : json = json + ",";
        });
        json = json + "]";
        return json;
    }

    this.toJSON = function(serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonMessages = (Object.isDefined(messages))? "\"" + getMessagesAsJSON(serializeUIProperties) + "\"" : null,
            jsonRequestStatus = (Object.isDefined(requestStatus))? "\"" + requestStatus + "\"" : null,
            json =  "{" +
                "\"messages\": " + jsonMessages+ "," +
                "\"requestStatus\": " + jsonRequestStatus +
                "}";
        return json;
    };

    this.toUIObject = function(){
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };
}

WebServiceResponseStatus.prototype.toString = function () {
    return  "{" +
        "messages: " + messages + "," +
        "requestStatus: " + requestStatus +
    "}";
};