function Person(personJsonConfig) {

    var id = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.id))? personJsonConfig.id: null;
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

    this.getId = function() {
        return id;
    };

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

    function getDateJSON(date) {
        console.log(date);
        return "[" + date.substring(0, 4) + "," + date.substring(5, 7); + "," + date.substring(8, 10) + "]";
    }

	this.toJSON = function(serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonId = (Object.isDefined(id))? "\"" + id + "\"" : null,
            jsonFistName = (Object.isDefined(firstName))? "\"" + firstName + "\"" : null,
            jsonMiddleName = (Object.isDefined(middleName))? "\"" + middleName + "\"" : null,
            jsonLastName = (Object.isDefined(lastName))? "\"" + lastName + "\"" : null,
            jsonUsername = (Object.isDefined(username))? "\"" + username + "\"" : null,
            jsonPassword = (Object.isDefined(password))? "\"" + password + "\"" : null,
            jsonBirthDate = (Object.isDefined(birthDate))? birthDate: null,
            jsonEmail = (Object.isDefined(email))? "\"" + email + "\"":  null,
            jsonPhoneNumbers = (Object.isDefined(phoneNumbers))? getPhoneNumbersJSON(serializeUIProperties) : "[]",
            jsonAddresses = (Object.isDefined(addresses))? getAddressesJSON(serializeUIProperties) : "[]",
            jsonGender = (Object.isDefined(gender))? "\"" + gender + "\"" : null,
            json =  "{" +
                "\"id\": " + null + "," +
                "\"firstName\": " + jsonFistName + "," +
                "\"middleName\": " + jsonMiddleName + "," +
                "\"lastName\": " + jsonLastName + "," +
                "\"email\": " + jsonEmail + "," +
                "\"birthDate\": " + jsonBirthDate + "," +
                "\"phoneNumbers\": " + jsonPhoneNumbers + "," +
                "\"addresses\": " +  jsonAddresses + "," +
                "\"gender\": " +  jsonGender + "," +
                "\"username\": " + jsonUsername + "," +
                "\"password\": " + jsonPassword +
            "}";
        return json;
    };

    this.toUIObject = function(){
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };

    this.toString = function () {
    	return  "{" +
            "id: " + id + "," +
           "firstName: " + firstName + "," +
           "middleName: " + middleName + "," +
           "lastName: " + lastName + "," +
           "username: " + username + "," +
           "password: " + password + "," +
           "passwordConfirm: " + passwordConfirm + "," +
           "email: " + email + "," +
           "phoneNumbers: " + phoneNumbers + "," +
           "addresses: " +  addresses +
        "}";
    };
}