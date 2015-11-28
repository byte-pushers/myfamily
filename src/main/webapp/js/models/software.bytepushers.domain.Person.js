function Person(personJsonConfig) {

	var firstName = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.firstName))? personJsonConfig.firstName: null;
	var middleName = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.middleName))? personJsonConfig.middleName: null;
	var lastName = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.lastName))? personJsonConfig.lastName: null;
	var birthDate = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.birthDate))? personJsonConfig.birthDate: null;
    var privacy = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.privacy))? personJsonConfig.privacy: null;
    var emails = (Object.isDefined(personJsonConfig) && Object.isArray(personJsonConfig.email))? createEmails(personJsonConfig.emails): [];
    var phoneNumbers = (Object.isDefined(personJsonConfig) && Object.isArray(personJsonConfig.phoneNumbers))? createPhoneNumbers(personJsonConfig.phoneNumbers) : [];
    var addresses = (Object.isDefined(personJsonConfig) && Object.isArray(personJsonConfig.addresses))? createAddresses(personJsonConfig.addresses): [];
    var gender = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.gender))? personJsonConfig.gender: null;
    var id = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.id))? personJsonConfig.id: null;
    var createdDate = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.createdDate))? new Date(personJsonConfig.createdDate): new Date();
    var lastModifiedDate = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.lastModifiedDate))? new Date(personJsonConfig.lastModifiedDate): createdDate;
    var createdBy = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.createdBy))? personJsonConfig.createdBy: null;
    var lastModifiedBy = (Object.isDefined(personJsonConfig) && Object.isDefined(personJsonConfig.lastModifiedBy))? personJsonConfig.lastModifiedBy: null;
    var protectedMetaData = (Object.isDefined(personJsonConfig) && Object.isArray(personJsonConfig.protectedMetaData))? createProtectedMetaData(personJsonConfig.protectedMetaData) : [];

    this.getProtectedMetaData = function(){
        return protectedMetaData;
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

	this.getEmails = function() {
		return emails;
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

    function createEmails(emailsJsonConfig) {
        var tempEmails = [];
        if((Object.isDefined(emailsJsonConfig) && (Object.isArray(emailsJsonConfig)))) {
            emailsJsonConfig.forEach(function(emailJsonConfig){
                tempEmails.push(new Email(emailJsonConfig));
            });
        }
        return tempEmails;
    }

    function createProtectedMetaData(protectedMetaDataJsonConfigArray) {
        var tempProtectedMetaData = [];
        if ((Object.isDefined(protectedMetaDataJsonConfigArray) && (Object.isArray(protectedMetaDataJsonConfigArray)))) {
            protectedMetaDataJsonConfigArray.forEach(function (protectedMetaDataJsonConfig) {
                tempProtectedMetaData.push(new ProtectedMetaData(protectedMetaDataJsonConfig));
            });
        }
        return tempProtectedMetaData;
    }

    function createPhoneNumbers(phoneNumbersJsonConfig) {
        var tempPhoneNumbers = [];
        if((Object.isDefined(phoneNumbersJsonConfig) && (Object.isArray(phoneNumbersJsonConfig)))) {
            phoneNumbersJsonConfig.forEach(function(phoneNumberJsonConfig){
                tempPhoneNumbers.push(new PhoneNumber(phoneNumberJsonConfig));
            });
        }
        return tempPhoneNumbers;
    }

    function createAddresses(addressesJsonConfig) {
        var tempAddresses = [];
        if((Object.isDefined(addressesJsonConfig) && (Object.isArray(addressesJsonConfig)))) {
            addressesJsonConfig.forEach(function(addressJsonConfig){
                tempAddresses.push(new Address(addressJsonConfig));
            });
        }
        return tempAddresses;
    }

    function getEmailsJSON(serializeUIProperties){
        var json = "[";

        emails.forEach(function (email, index, arr) {
            json += (index < (arr.length -1)) ? email.toJSON(serializeUIProperties) + "," : email.toJSON(serializeUIProperties);
        });

        json += "]";

        return json;
    }

    function getPhoneNumbersJSON(serializeUIProperties){
        var json = "[";
        phoneNumbers.forEach(function (phoneNumber, index, arr) {
            json +=  (index < (arr.length -1)) ? phoneNumber.toJSON(serializeUIProperties) + "," : phoneNumber.toJSON(serializeUIProperties);
        });

        json += "]";
        return json;
    }

    function getAddressesJSON(serializeUIProperties){
        var json = "[";
        addresses.forEach(function (address, index, arr) {
            json += (index < (arr.length -1)) ? address.toJSON(serializeUIProperties) + "," : address.toJSON(serializeUIProperties);
        });
        json += "]";
        return json;
    }

	this.toJSON = function(serializeUIProperties) {
        serializeUIProperties = (Object.isDefined(serializeUIProperties) && Object.isBoolean(serializeUIProperties))? serializeUIProperties : false;
        var jsonFistName = (Object.isDefined(firstName))? "\"" + firstName + "\"" : null,
            jsonMiddleName = (Object.isDefined(middleName))? "\"" + middleName + "\"" : null,
            jsonLastName = (Object.isDefined(lastName))? "\"" + lastName + "\"" : null,
            jsonEmails = (Object.isDefined(emails))? getEmailsJSON(serializeUIProperties):  "[]",
            jsonBirthDate = (Object.isDate(birthDate))? "\"" + birthDate.toJSON() + "\"": null,
            jsonPrivacy = (Object.isDefined(privacy))? "\"" + privacy + "\"": null,
            jsonPhoneNumbers = (Object.isDefined(phoneNumbers))? getPhoneNumbersJSON(serializeUIProperties) : "[]",
            jsonAddresses = (Object.isDefined(addresses))? getAddressesJSON(serializeUIProperties) : "[]",
            jsonGender = (Object.isDefined(gender))? "\"" + gender + "\"" : null,
            jsonId = (Object.isDefined(id))? "\"" + id + "\"" : null,
            jsonCreatedDate = (Object.isDate(createdDate))? "\"" + createdDate.toJSON() + "\"" : null,
            jsonLastModifiedDate = (Object.isDate(lastModifiedDate))? "\"" + lastModifiedDate.toJSON() + "\"" : null,
            jsonCreatedBy = (Object.isDefined(createdBy))? "\"" + createdBy + "\"" : null,
            jsonLastModifiedBy = (Object.isDefined(lastModifiedBy))? "\"" + lastModifiedBy + "\"" : null,
            jsonProtectedMetaData = (Object.isDefined(protectedMetaData))? "\"" + protectedMetaData + "\"" : null,
            json =  "{" +
                "\"firstName\": " + jsonFistName + "," +
                "\"middleName\": " + jsonMiddleName + "," +
                "\"lastName\": " + jsonLastName + "," +
                "\"emails\": " + jsonEmails + "," +
                "\"birthDate\": " + jsonBirthDate + "," +
                "\"privacy\": " + jsonPrivacy + "," +
                "\"phoneNumbers\": " + jsonPhoneNumbers + "," +
                "\"addresses\": " +  jsonAddresses + "," +
                "\"gender\": " +  jsonGender + "," +
                "\"id\": " + jsonId + "," +
                "\"createdDate\": " + jsonCreatedDate + "," +
                "\"lastModifiedDate\": " + jsonLastModifiedDate + "," +
                "\"createdBy\": " + jsonCreatedBy + "," +
                "\"lastModifiedBy\": " + jsonLastModifiedBy + "," +
                "\"protectedMetaData\": " + jsonProtectedMetaData +
            "}";
        return json;
    };

    this.toUIObject = function(){
        var UIObject = JSON.parse(this.toJSON(true));

        return UIObject;
    };
}

Person.prototype.toString = function () {
    return  "{" +
        "firstName: " + firstName + "," +
        "middleName: " + middleName + "," +
        "lastName: " + lastName + "," +
        "emails: " + emails + "," +
        "birthDate: " + birthDate + "," +
        "privacy: " + privacy + "," +
        "phoneNumbers: " + phoneNumbers + "," +
        "addresses: " +  addresses + "," +
        "id: " + id + "," +
        "createdDate: " + createdDate + "," +
        "lastModifiedDate: " + lastModifiedDate + "," +
        "createdBy: " + createdBy + "," +
        "lastModifiedBy: " + lastModifiedBy + "," +
        "protectedMetaData:" + protectedMetaData +
    "}";
};