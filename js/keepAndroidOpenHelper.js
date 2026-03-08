let kaoBanner, navbar;
document.addEventListener('DOMContentLoaded', () => {
    kaoBanner = document.getElementsByClassName('kao-banner');
    navbar = document.getElementById('header');
    if (kaoBanner.length === 0 || navbar === null || !navbar.classList.contains('navbar-fixed-top')) {
        return;
    }
    kaoBanner = kaoBanner[0];
    if (kaoBanner.style.display === 'none') {
        return;
    }
    document.addEventListener('scroll', scrollSpy);

    kaoBanner.getElementsByClassName('kao-banner-close')[0].addEventListener('click', () => {
        document.removeEventListener('scroll', scrollSpy);
        navbar.style.top = '0';
    });
    scrollSpy()

})
function scrollSpy() {
    if (window.scrollY < kaoBanner.offsetHeight) {
        navbar.style.top = kaoBanner.offsetHeight - window.scrollY + 'px';
    } else {
        navbar.style.top = '0';
    }
}