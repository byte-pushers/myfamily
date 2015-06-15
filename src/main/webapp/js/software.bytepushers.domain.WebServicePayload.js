function WebServicePayload(payloadConfig) {

    var person = (Object.isDefined(payloadConfig) && Object.isDefined(payloadConfig.person))? createPerson(payloadConfig.person): null;


    this.getPerson = function() {
        return person;
    };

    this.getConfig = function() {
        return payloadConfig;
    };

    function createPerson(personConfig){
        return new Person(personConfig);
    };

    this.toJSON = function(serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonPerson = (Object.isDefined(person))? person.toJSON(serializeUIProperties) : null,
            json =  "{" +
                "\"person\": " + jsonPerson +
                "}";
        return json;
    };

    this.toUIObject = function(){
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };

    this.toString = function () {
        return  "{" +
            "person: " + person +
            "}";
    };
}