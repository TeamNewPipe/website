/**
 * Handle fullsize images with Bootstrap modal
 **/

// set the media to display in #mediaFileView
function viewMediaFile(m) {
    var img = document.getElementById("mediaFullScreen");
    img.src = (m.getAttribute("src") != null && m.getAttribute("src") != 'undefined') ? m.getAttribute("src") : m.getElementsByTagName("img")[0].getAttribute("src");
}

// prevent opening #mediaFileView (modal) when a download link is clicked
$('#mediaFileView').on('show.bs.modal', function (e) {
  var button = e.relatedTarget;
  if($(button).hasClass('media-download') || $(button).hasClass('author')) {
    e.stopPropegation();
  }  
});

// close #mediaFileView (modal) with escape key
$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key := keycode `27`
        $('#mediaFileView').modal('hide');
    }
});