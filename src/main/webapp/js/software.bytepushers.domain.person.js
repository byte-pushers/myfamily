function Person(personJsonConfig) {

	var fistName = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.firstName))? personJsonConfig.firstName: null;
	var middleName = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.middleName))? personJsonConfig.middleName: null;
	var lastName = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.lastName))? personJsonConfig.lastName: null;
	var username = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.username))? personJsonConfig.username: null;
	var password = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.password))? personJsonConfig.password: null;
	var passwordConfirm = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.passwordConfirm))? personJsonConfig.passwordConfirm: null;
	var birthDate = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.birthDate))? personJsonConfig.birthDate: null;
    var email = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.email))? personJsonConfig.email: null;
    var phoneNumbers = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.phoneNumbers))? personJsonConfig.phoneNumbers: [];
    var addresses = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.addresses))? personJsonConfig.addresses: [];
    var gender = (Object.isDefined(gender) && Object.isDefined(personJsonConfig.gender))? personJsonConfig.gender: [];

    var emailRegex = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9]+.[A-Z]{3}$", "i");

	this.getFistName = function() {
		return firstName;
	}

	this.getMiddleName = function() {
        return middleName;
    }

    this.getLastName = function() {
        return lastName;
    }

    this.getUsername = function() {
        return username;
    }

    this.getPassword = function() {
        return password;
    }

    this.getPassword2 = function() {
        return passwordConfirm;
    }

	this.getEmail = function() {
		return email;
	};

	this.getBirthDate = function() {
        return birthDate;
    }

    this.getPhoneNumbers = function() {
    		return phoneNumbers;
    }

    this.getAddresses = function() {
    		return addresses;
    }

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
        var jsonFistName = (Object.isDefined(fistName))? "\"" + fistName + "\"" : null,
            jsonMiddleName = (Object.isDefined(middleName))? "\"" + middleName + "\"" : null,
            jsonLastName = (Object.isDefined(lastName))? "\"" + lastName + "\"" : null,
            jsonBirthDate = (Object.isDefined(birthDate))? "\"" + birthDate.getFullYear()  + "-" + birthDate.getMonth() + "-" + birthDate.getDate() + "\"" : null,
            jsonEmail = (Object.isDefined(email))? "\"" + email + "\"":  null,
            jsonPhoneNumbers = (Object.isDefined(phoneNumbers))? getPhoneNumbersJSON(serializeUIProperties) : null,
            jsonAddresses = (Object.isDefined(addresses))? getAddressesJSON(serializeUIProperties) : null,
            json =  "{" +
                "\"firstName\": " + jsonFistName + "," +
                "\"middleName\": " + jsonMiddleName + "," +
                "\"lastName\": " + jsonLastName + "," +
                "\"email\": " + jsonEmail + "," +
                "\"birthDate\": " + jsonBirthDate + "," +
                "\"phoneNumbers\": " + jsonPhoneNumbers + "," +
                "\"addresses\": " +  jsonAddresses + "," +
                "\"gender\": " +  "\"MALE\"" +
                "}";
        return json;
    };

    this.toUIObject = function(){
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };

    this.toString = function () {
    	return  "{" +
           "firstName: " + fistName + "," +
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