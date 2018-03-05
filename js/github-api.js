/**
 * Get the latest stable version name
 * @param tag boolean specifies whether the tag name or the version name should be returned later
 * @returns the latest version name, e.g. v0.11.1
 */
function latestVersion(tag = false) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://newpipe.schabi.org/api/current-version", false);
    xhttp.send();
    return (tag) ?xhttp.responseText.substr(1) : xhttp.responseText;
}
