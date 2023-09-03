/**
 * Handle full-size images with Bootstrap modal
 **/
let img, video;

// set the media to display in #mediaFileView
function viewMediaFile(media, openModal = false) {
    if (img === undefined || img === "undefined" || img === null) {
        img = document.getElementById("mediaFullScreen");
        video = document.getElementById("videoFullScreen");
    }

    let tagName = media.tagName.toUpperCase();
    if (tagName !== "IMG" && tagName !== "VIDEO") {
        media = media.querySelector("img, video")
    }

    let attr = media.getAttribute("src");

    switch (media.tagName.toUpperCase()) {
        case "IMG":
            img.src = (attr != null && attr !== 'undefined') ? attr : media.getElementsByTagName("img")[0].getAttribute("src");
            break;

        case "VIDEO":
            video.src = (attr != null && attr !== 'undefined') ? attr : media.getElementsByTagName("video")[0].getAttribute("src");
            video.play();
            video.loop = !!media.loop;
            break;
    }
    
    if (openModal) $('#mediaFileView').modal('show');
}

// prevent opening #mediaFileView (modal) when a download link is clicked
$('#mediaFileView').on('show.bs.modal', function (e) {
  let button = e.relatedTarget;
  if ($(button).hasClass('media-download') || $(button).hasClass('author')) {
    e.stopPropegation();
  }  
});

// close #mediaFileView (modal) with escape key
$(document).keyup(function(e) {
     if (e.keyCode === 27) { // escape key := keycode `27`
        $('#mediaFileView').modal('hide');
    }
});

$(document).ready(function () {
   $('[data-action="view-media-file"]').click(function () {
       viewMediaFile(this)
   });
});