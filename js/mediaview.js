function viewMediaFile(m) {
    //document.getElementsByTagName("HTML")[0].setAttribute("class", "modal-open-a");
    var img = document.getElementById("mediaFullScreen");
    img.src = (m.getAttribute("src") != null && m.getAttribute("src") != 'undefined') ? m.getAttribute("src") : m.getElementsByTagName("img")[0].getAttribute("src");
    //alert(m.getAttribute("src"));
}
$('#mediaFileView').on('show.bs.modal', function (e) {
      if($(e.relatedTarget).hasClass('media-download')) e.stopPropagation();
});