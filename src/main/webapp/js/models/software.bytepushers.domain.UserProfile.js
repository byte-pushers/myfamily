/**
 * Created by pouncilm on 8/6/15.
 */
function UserProfile(userProfileJsonConfig) {
    var username = (Object.isDefined(userProfileJsonConfig) && Object.isString(userProfileJsonConfig.username)) ? userProfileJsonConfig.username : null;
    var password = (Object.isDefined(userProfileJsonConfig) && Object.isString(userProfileJsonConfig.password)) ? userProfileJsonConfig.password : null;
    var isAttendee = (Object.isDefined(userProfileJsonConfig) && Object.isBoolean(userProfileJsonConfig.isAttendee)) ? userProfileJsonConfig.isAttendee : false;
    var person = (Object.isDefined(userProfileJsonConfig) && Object.isDefined(userProfileJsonConfig.person)) ? new Person(userProfileJsonConfig) : null;
    var id = (Object.isDefined(userProfileJsonConfig) && Object.isDefined(userProfileJsonConfig.id))? personJsonConfig.id: null;


    this.getUsername = function () {
        return username;
    };

    this.getPassword = function () {
        return password;
    };

    this.isAttendee = function () {
        return isAttendee;
    };

    this.getPerson = function () {
        return person;
    };

    this.toString = function () {
        return "{" +
            "username: " + username + "," +
            "password: " + password + "," +
            "isAttendee:" + isAttendee + "," +
            "person:" + person.toString() +
        "}";
    };

    this.toJSON = function(serializeUIProperties){
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties)) ? serializeUIProperties : false;
        var jsonUsername = (Object.isDefined(username)) ? "\"" + username + "\"" : null,
            jsonPassword = (Object.isDefined(password)) ? "\"" + password + "\"" : null,
            jsonIsAttendee = (Object.isDefined(isAttendee)) ? isAttendee : false,
            jsonPerson = (Object.isDefined(person)) ? "\"" + person.toJSON() + "\"" : null,
            json = "{" +
               "\"username\" : " + jsonUsername + "," +
               "\"password\" : " + jsonPassword + "," +
               "\"isAttendee\" : " + jsonIsAttendee + "," +
               "\"person\" : " + jsonPerson +
            "}";
        return json;
    };

    this.toUIObject = function(){
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };
};
