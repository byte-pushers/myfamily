/**
 * Created by pouncilm on 8/4/15.
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
 * @type {*|BytePushers.models.PersonTransformer|*|BytePushers.models.PersonTransformer|Object|*|Object|*}
 */
BytePushers.models.PersonTransformer =  BytePushers.namespace("software.bytepushers.models.PersonTransformer");
/**
 * Static method for the PersonTransformer class that is responsible for transforming the JSON response.
 *
 * @static
 * @method
 * @param {String} personJsonConfig  Represents the JSON response of a Restful service call.
 * @param {String} user  Represents user who has made the JSON Restful service call request.
 * @returns {Person} The response domain model of a service call request.
 *
 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
 */
BytePushers.models.PersonTransformer.transformJSONResponse = function (personJsonConfig, user) {
    'use strict';

    /**
     * Represent an existing Person.
     *
     * @private
     * @field
     * @type {Person}
     */
    var aPerson;

    if (!Object.isDefined(personJsonConfig)) {
        throw new BytePushers.exceptions.InvalidParameterException("personJsonConfig can not be null or undefined.");
    }

    aPerson = new Person(personJsonConfig);

    return aPerson;
};