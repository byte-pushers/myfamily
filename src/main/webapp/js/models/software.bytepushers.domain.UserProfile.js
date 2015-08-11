/**
 * Created by pouncilm on 8/6/15.
 */
function UserProfile(userProfileJsonConfig) {
    var username = (Object.isDefined(userProfileJsonConfig) && Object.isString(userProfileJsonConfig.username)) ? userProfileJsonConfig.username : null;
    var password = (Object.isDefined(userProfileJsonConfig) && Object.isString(userProfileJsonConfig.password)) ? userProfileJsonConfig.password : null;
    var isAttendee = (Object.isDefined(userProfileJsonConfig) && Object.isBoolean(userProfileJsonConfig.isAttendee)) ? userProfileJsonConfig.isAttendee : false;
    var person = (Object.isDefined(userProfileJsonConfig) && Object.isDefined(userProfileJsonConfig.person)) ? new Person(userProfileJsonConfig.person) : null;
    var id = (Object.isDefined(userProfileJsonConfig) && Object.isDefined(userProfileJsonConfig.id))? personJsonConfig.id: null;
    var createdDate = (Object.isDefined(userProfileJsonConfig) && Object.isDefined(userProfileJsonConfig.createdDate))? new Date(userProfileJsonConfig.createdDate): new Date();
    var lastModifiedDate = (Object.isDefined(userProfileJsonConfig) && Object.isDefined(userProfileJsonConfig.lastModifiedDate))? new Date(userProfileJsonConfig.lastModifiedDate): createdDate;
    var createdBy = (Object.isDefined(userProfileJsonConfig) && Object.isDefined(userProfileJsonConfig.createdBy))? userProfileJsonConfig.createdBy: null;
    var lastModifiedBy = (Object.isDefined(userProfileJsonConfig) && Object.isDefined(userProfileJsonConfig.lastModifiedBy))? userProfileJsonConfig.lastModifiedBy: null;


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
    this.getId = function(){
        return id;
    };

    this.getCreatedDate = function(){
        return createdDate;
    };

    this.getLastModifiedBy = function(){
        return lastModifiedBy;
    };

    this.getLastModifiedDate = function(){
        return lastModifiedDate;
    };

    this.getCreatedBy = function(){
        return createdBy;
    };

    this.toString = function () {
        return "{" +
            "username: " + username + "," +
            "password: " + password + "," +
            "isAttendee:" + isAttendee + "," +
            "person:" + person.toString() + "," +
            "id:" + id + "," +
            "createdDate:" + createdDate + "," +
            "lastModifiedBy:" + lastModifiedBy + "," +
            "lastModifiedDate:" + lastModifiedDate + "," +
            "createdBy:" + createdBy +
        "}";
    };

    this.toJSON = function(serializeUIProperties){
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties)) ? serializeUIProperties : false;
        var jsonUsername = (Object.isDefined(username)) ? "\"" + username + "\"" : null,
            jsonPassword = (Object.isDefined(password)) ? "\"" + password + "\"" : null,
            jsonIsAttendee = (Object.isDefined(isAttendee)) ? isAttendee : false,
            jsonPerson = (Object.isDefined(person)) ? person.toJSON() : null,
            jsonId = (Object.isDefined(id)) ? id : null,
            jsonCreatedDate = (Object.isDefined(createdDate)) ? "\"" + createdDate.toJSON() + "\"" : null,
            jsonLastModifiedBy = (Object.isDefined(lastModifiedBy)) ? "\"" + lastModifiedBy + "\"" : null,
            jsonLastModifiedDate = (Object.isDefined(lastModifiedDate)) ? "\"" + lastModifiedDate.toJSON() + "\"" : null,
            jsonCreatedBy = (Object.isDefined(createdBy)) ? "\"" + createdBy + "\"" : null,
            json = "{" +
               "\"username\" : " + jsonUsername + "," +
               "\"password\" : " + jsonPassword + "," +
               "\"isAttendee\" : " + jsonIsAttendee + "," +
               "\"person\" : " + jsonPerson + "," +
               "\"id\" : " + jsonId + "," +
               "\"createdDate\" : " + jsonCreatedDate + "," +
               "\"lastModifiedBy\" : " + jsonLastModifiedBy + "," +
               "\"lastModifiedDate\" : " + jsonLastModifiedDate + "," +
               "\"createdBy\" : " + jsonCreatedBy +
            "}";
        return json;
    };

    this.toUIObject = function(){
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };
};
