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
 */
function updateWithAPIData(className, apiData) {
    var data = apiData.toString();
    var els = document.getElementsByClassName(className);
    if (els == null) return;
    for (var i = 0; i < els.length; i++) {
        els.item(i).innerHTML = data;
    }
}

/**
 * Updates every element which expects to receive information
 * from the web-api
 */
function updateAllWithAPIData() {
    updateWithAPIData("api-translations", api.stats.translations);
    var flavours = ["stable", "beta"];
    for(var i = 0; i < flavours.length; i++) {
        updateWithAPIData("api-" + flavours[i] + "-version",
            api.flavors[flavours[i]].version.replace(new RegExp("((-beta)|[v])","g"),""));
        updateWithAPIData("api-" + flavours[i] + "-new",
            /*api.flavors[flavours[i]].changelog.split("</ul>")[0]);
        console.log(api.flavors[flavours[i]].changelog);*/
    }
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
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://newpipe.schabi.org/api/data.json", false);
    xhttp.send();
    var resp = xhttp.responseText;
    if (resp == null || typeof resp == 'undefined' || resp == "") {
        console.log("An error occurred while getting Web-API data from https://newpipe.schabi.org/api/data.json");
        return false;
    }
    api = JSON.parse(resp);
    updateAllWithAPIData();
});
