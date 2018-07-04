/**
 * @author TobiGr and Team NewPipe
 * This document provides everything to get information
 * the NewPipe web-api {@link https://gtihub.com/TeamNewPipe/web-api}.
 *
 * Elements which expect to receive information from the web-api
 * automatically, need to have a class of the following scheme:
 *      api-stable-version
 *      api-stars
 * and so on. The "stats" are unambiguous, therefore they got dropped.
 */

var api = null;

function getAPIData() {
    return api;
}

/**
 * Updates all elements having a specific class with web-api information
 * @param className of the elements which will contain the information
 * @param apiData information to display
 * @param attribute (optional) attribute to add api data to instead of content
 */
function updateWithAPIData(className, apiData, attribute) {
    attribute = attribute || -1;
    var data = apiData.toString();
    var els = document.getElementsByClassName(className);
    if (els == null) return;
    for (var i = 0; i < els.length; i++) {
        if (attribute != -1)
            els.item(i).setAttribute(attribute, data);
        else
            els.item(i).innerHTML = data;
    }
}

/**
 * Updates every element which expects to receive information
 * from the web-api
 */
function updateAllWithAPIData() {
    updateWithAPIData("api-github-stable-version", api.flavors.github.stable.version.replace("v",""));
    updateWithAPIData("api-github-stable-apk", api.flavors.github.stable.apk, "href");
    updateWithAPIData("api-f-droid-stable-version", api.flavors.fdroid.stable.version.replace("v",""));
    updateWithAPIData("api-f-droid-stable-apk", api.flavors.fdroid.stable.apk, "href");

    updateWithAPIData("api-translations", api.stats.translations);
    updateWithAPIData("api-forks", api.stats.forks);
    updateWithAPIData("api-contributors", api.stats.contributors);
    updateWithAPIData("api-stargazers", api.stats.stargazers);
    updateWithAPIData("api-watchers", api.stats.watchers);
}

/**
 * Get API information and trigger updates
 */
$(document).ready(function () {
    $.get("https://newpipe.schabi.org/api/data.json", "json")
        .done(function(resp) {
            api = resp;
            updateAllWithAPIData();
        })
        .fail(function() {
            console.log("An error occurred while getting Web-API data from https://newpipe.schabi.org/api/data.json");
        });
});
