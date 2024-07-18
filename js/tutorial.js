document.addEventListener('DOMContentLoaded', function() {
    let images = document.querySelectorAll('.figure-wrapper > figure > img, .figure-wrapper > figure > video');
    for (let image in images) {
        images[image].onclick = function () {
            viewMediaFile(this, true)
        };
    }
});
