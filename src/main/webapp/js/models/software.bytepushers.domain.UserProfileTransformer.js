/**
 * Created by pouncilm on 8/6/15.
 */
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
 * @type {*|BytePushers.models.UserProfileTransformer|*|BytePushers.models.UserProfileTransformer|Object|*|Object|*}
 */
BytePushers.models.UserProfileTransformer =  BytePushers.namespace("software.bytepushers.models.UserProfileTransformer");
/**
 * Static method for the UserProfileTransformer class that is responsible for transforming the JSON response.
 *
 * @static
 * @method
 * @param {String} userProfileJsonConfig  Represents the JSON response of a Restful service call.
 * @param {String} user  Represents user who has made the JSON Restful service call request.
 * @returns {UserProfile} The response domain model of a service call request.
 *
 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
 */
BytePushers.models.UserProfileTransformer.transformJSONPayload = function (userProfileJsonConfig, user) {
    'use strict';

    /**
     * Represent an existing UserProfile.
     *
     * @private
     * @field
     * @type {UserProfile}
     */
    var aUserProfile;

    if (!Object.isDefined(userProfileJsonConfig)) {
        throw new BytePushers.exceptions.InvalidParameterException("userProfileJsonConfig can not be null or undefined.");
    }

    aUserProfile = new UserProfile(userProfileJsonConfig);

    return aUserProfile;
};
