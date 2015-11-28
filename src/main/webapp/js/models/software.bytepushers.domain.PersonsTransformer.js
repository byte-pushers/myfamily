/**
 * Created by pouncilm on 11/28/15.
 */
/**
 * Represents the application api.  If the variable is already defined use it,
 * otherwise create an empty object.
 *
 * @type {BytePushers|*|BytePushers|*|{}|{}}
 */
var BytePushers = BytePushers || {};
/**
 * Represents the application static variable. Use existing static variable, if one already exists,
 * otherwise create a new one.
 *
 * @static
 * @type {*|BytePushers.models|*|BytePushers.models|Object|*|Object|*}
 */
BytePushers.models = BytePushers.models || BytePushers.namespace("software.bytepushers.models");
/**
 * Represents the application static variable. Use existing static variable, if one already exists,
 * otherwise create a new one.
 *
 * @static
 * @type {*|BytePushers.models.PersonsTransformer|*|BytePushers.models.PersonsTransformer|Object|*|Object|*}
 */
BytePushers.models.PersonsTransformer =  BytePushers.namespace("software.bytepushers.models.PersonsTransformer");
/**
 * Static method for the PersonsTransformer class that is responsible for transforming the JSON response.
 *
 * @static
 * @method
 * @param {String} personsJsonConfig  Represents the JSON response of a Restful service call.
 * @param {String} user  Represents user who has made the JSON Restful service call request.
 * @returns {Person} The response domain model of a service call request.
 *
 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
 */
BytePushers.models.PersonsTransformer.transformJSONPayload = function (personsJsonConfig, user) {
    'use strict';

    /**
     * Represent an existing Person.
     *
     * @private
     * @field
     * @type {Person}
     */
    var persons = [];

    if (!Object.isDefined(personsJsonConfig)) {
        throw new BytePushers.exceptions.InvalidParameterException("personsJsonConfig can not be null or undefined.");
    }

    for(var i = 0; i < personsJsonConfig.length;  i++){
        var personJsonConfig = personsJsonConfig[i];

        var aPerson = BytePushers.models.PersonTransformer.transformJSONPayload(personJsonConfig);
        persons.push[aPerson];
    }


    return persons;
};