function Person(personJsonConfig) {

	var firstName = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.firstName))? personJsonConfig.firstName: null;
	var middleName = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.middleName))? personJsonConfig.middleName: null;
	var lastName = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.lastName))? personJsonConfig.lastName: null;
	var username = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.username))? personJsonConfig.username: null;
	var password = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.password))? personJsonConfig.password: null;
	var passwordConfirm = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.passwordConfirm))? personJsonConfig.passwordConfirm: null;
	var birthDate = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.birthDate))? personJsonConfig.birthDate: null;
    var email = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.email))? personJsonConfig.email: null;
    var phoneNumbers = (Object.isDefined(personJsonConfig) && Object.isArray(personJsonConfig.phoneNumbers))? createPhoneNumbers(personJsonConfig.phoneNumbers) : [];
    var addresses = (Object.isDefined(personJsonConfig) && Object.isArray(personJsonConfig.addresses))? createAddresses(personJsonConfig.addresses): [];
    var gender = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.gender))? personJsonConfig.gender: null;
    var attendee = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.attendee))? personJsonConfig.attendee: false;
    var id = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.id))? personJsonConfig.id: null;
    var createdDate = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.createdDate))? new Date(personJsonConfig.createdDate): new Date();
    var lastModifiedDate = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.lastModifiedDate))? new Date(personJsonConfig.lastModifiedDate): createdDate;
    var createdBy = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.createdBy))? personJsonConfig.createdBy: null;
    var lastModifiedBy = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.lastModifiedBy))? personJsonConfig.lastModifiedBy: null;

	this.getFirstName = function() {
		return firstName;
	};

	this.getMiddleName = function() {
        return middleName;
    };

    this.getLastName = function() {
        return lastName;
    };

    this.getUsername = function() {
        return username;
    };

    this.getPassword = function() {
        return password;
    };

    this.getPassword2 = function() {
        return passwordConfirm;
    };

	this.getEmail = function() {
		return email;
	};

	this.getBirthDate = function() {
        return birthDate;
    };

    this.getPhoneNumbers = function() {
        return phoneNumbers;
    };

    this.getAddresses = function() {
    		return addresses;
    };

    this.getGender = function(){
        return gender;
    };

    this.getId = function() {
        return id;
    };

    this.getCreatedDate = function() {
        return createdDate;
    };

    this.getLastModifiedDate = function() {
        return id;
    };

    this.getCreatedBy = function() {
        return createdBy;
    };

    this.getLastModifiedBy = function() {
        return lastModifiedBy;
    };

    function createPhoneNumbers(phoneNumbersJsonConfig) {
        var tempPhoneNumbers = [];
        if((Object.isDefined(phoneNumbersJsonConfig) && (Object.isArray(phoneNumbersJsonConfig)))) {
            phoneNumbersJsonConfig.forEach(function(phoneNumberJsonConfig){
                tempPhoneNumbers.push(phoneNumberJsonConfig);
            });
        }
        return tempPhoneNumbers;
    };

    function createAddresses(addressesJsonConfig) {
        var tempAddresses = [];
        if((Object.isDefined(addressesJsonConfig) && (Object.isArray(addressesJsonConfig)))) {
            addressesJsonConfig.forEach(function(addressJsonConfig){
                tempAddresses.push(addressJsonConfig);
            });
        }
        return tempAddresses;
    };

    function getPhoneNumbersJSON(serializeUIProperties){
        var json = "[";
        phoneNumbers.forEach(function (phoneNumber, index, arr) {
            json = json + phoneNumber.toJSON(serializeUIProperties);
            (index <= arr.length) ? json : json = json + ",";
        });
        json = json + "]";
        return json;
    }

    function getAddressesJSON(serializeUIProperties){
        var json = "[";
        addresses.forEach(function (address, index, arr) {
            json = json + address.toJSON(serializeUIProperties);
            (index <= arr.length) ? json : json = json + ",";
        });
        json = json + "]";
        return json;
    }

	this.toJSON = function(serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonFistName = (Object.isDefined(firstName))? "\"" + firstName + "\"" : null,
            jsonMiddleName = (Object.isDefined(middleName))? "\"" + middleName + "\"" : null,
            jsonLastName = (Object.isDefined(lastName))? "\"" + lastName + "\"" : null,
            jsonUsername = (Object.isDefined(username))? "\"" + username + "\"" : null,
            jsonPassword = (Object.isDefined(password))? "\"" + password + "\"" : null,
            jsonBirthDate = (Object.isDefined(birthDate))? "\"" + birthDate.toJSON() + "\"": null,
            jsonEmail = (Object.isDefined(email))? "\"" + email + "\"":  null,
            jsonPhoneNumbers = (Object.isDefined(phoneNumbers))? getPhoneNumbersJSON(serializeUIProperties) : "[]",
            jsonAddresses = (Object.isDefined(addresses))? getAddressesJSON(serializeUIProperties) : "[]",
            jsonGender = (Object.isDefined(gender))? "\"" + gender + "\"" : null,
            jsonAttendee = (Object.isDefined(attendee))? "\"" + attendee + "\"" : false,
            jsonId = (Object.isDefined(id))? "\"" + id + "\"" : null,
            jsonCreatedDate = (Object.isDefined(createdDate))? "\"" + createdDate.toJSON() + "\"" : null,
            jsonLastModifiedDate = (Object.isDefined(lastModifiedDate))? "\"" + lastModifiedDate.toJSON() + "\"" : null,
            jsonCreatedBy = (Object.isDefined(createdBy))? "\"" + createdBy + "\"" : null,
            jsonLastModifiedBy = (Object.isDefined(lastModifiedBy))? "\"" + lastModifiedBy + "\"" : null,
            json =  "{" +
                "\"firstName\": " + jsonFistName + "," +
                "\"middleName\": " + jsonMiddleName + "," +
                "\"lastName\": " + jsonLastName + "," +
                "\"email\": " + jsonEmail + "," +
                "\"birthDate\": " + jsonBirthDate + "," +
                "\"phoneNumbers\": " + jsonPhoneNumbers + "," +
                "\"addresses\": " +  jsonAddresses + "," +
                "\"gender\": " +  jsonGender + "," +
                "\"username\": " + jsonUsername + "," +
                "\"password\": " + jsonPassword + "," +
                "\"attendee\": " + jsonAttendee + "," +
                "\"id\": " + jsonId + "," +
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

    this.toString = function () {
    	return  "{" +
            "firstName: " + firstName + "," +
            "middleName: " + middleName + "," +
            "lastName: " + lastName + "," +
            "email: " + email + "," +
            "phoneNumbers: " + phoneNumbers + "," +
            "addresses: " +  addresses + "," +
            "username: " + username + "," +
            "password: " + password + "," +
            "attendee: " + attendee + "," +
            "id: " + id + "," +
            "createdDate: " + createdDate + "," +
            "lastModifiedDate: " + lastModifiedDate + "," +
            "createdBy: " + createdBy + "," +
            "lastModifiedBy: " + lastModifiedBy +
        "}";
    };
}