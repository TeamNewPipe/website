/**
 * @author TobiGr for Team NewPipe
 * This document provides everything to get information from
 * the NewPipe Website API (Web API) {@link https://github.com/TeamNewPipe/web-api}.
 *
 * Elements which expect to receive information from the Web API
 * automatically, need to have an attribute of the following scheme:
 *      data-newpipe-api="JSON_IDENTIFIER_OF_THE_REQUESTED_VALUE"
 *
 * By default, the inner HTML of the elements having the above's attribute is replaced.
 * You can also specify an attribute to store the API data instead:
 *      data-newpipe-api-attribute="ATTRIBUTE_NAME"
 *
 *  Example usage:
 *  <pre>
 *  <a href="https://default.locati.on" data-newpipe-api="flavors.fdroid.stable.apk" data-newpipe-api-attribute="href">
 *      download APK</a>
 *  </pre>
 */

/**
 * Stores the Web API data. Is <code>null</code> when uninitialized.
 * @type {null | JSON}
 */
let api = null;

/**
 * Recursive function to update elements with API data
 * @param {Object | string | number} object - Object or value from the {@link #api} object
 * @param {string} key - key of the object
 * @param {null | string} oldIdentifier
 * @return {void}
 */
function updateWithAPIData(object, key, oldIdentifier) {
    let newIdentifier = (oldIdentifier === null) ? key : oldIdentifier + '.' + key;
    if (object instanceof Object) {
        // this is a JSON object containing more objects with API data
        // iterate through them
        Object.keys(object).forEach(function (name) {
            updateWithAPIData(object[name], name, newIdentifier);
        });
    } else {
        // this object is a value
        if (object === -1) return; // invalid value, something went wrong when building the API data

        // get all elements which registered to be updated with the API data
        let elementsToUpdate = document.querySelectorAll('[data-newpipe-api="' + newIdentifier + '"]');
        if (elementsToUpdate == null) return;

        let data = object.toString();
        for (let i = 0; i < elementsToUpdate.length; i++) {
            if (elementsToUpdate.item(i).hasAttribute("data-newpipe-api-attribute")) {
                // the element requests to set an attribute to the API value
                let attr = elementsToUpdate.item(i).getAttribute("data-newpipe-api-attribute");
                elementsToUpdate.item(i).setAttribute(attr, data);
            } else {
                // default: set the inner HTML of the element to the API value
                elementsToUpdate.item(i).innerHTML = data;
            }
        }
    }
}

/**
 * Updates every element which expects to receive information
 * from the Web API
 * @return {void}
 */
function updateAllWithAPIData() {
    Object.keys(api).forEach(function (name) {
        updateWithAPIData(api[name], name, null);
    })
}

/**
 * Fetch API information and trigger updates
 */
$(document).ready(function () {
    $.get("https://newpipe.net/api/data.json", "json")
        .done(function(resp) {
            api = resp;
            updateAllWithAPIData();
        })
        .fail(function() {
            console.log("An error occurred while getting Web API data from https://newpipe.net/api/data.json");
        });
});
