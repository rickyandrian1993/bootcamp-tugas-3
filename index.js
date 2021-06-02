window.addEventListener("scroll", function () {
    myScrollNavbar();
}, false);

function myScrollNavbar() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("my-nav").style.opacity = "1";
    } else {
        document.getElementById("my-nav").style.opacity = ".9";
    }
}

// Favorite function and alert //
function alertFavorite(elm) {
    var movieTitle = elm.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
    var favorite = elm.children.item(0);

    if(favorite.classList.contains('bi-heart')) {
        alert(movieTitle + ' ' + "has been added to your favorite.");

        favorite.classList.remove('bi-heart');
        favorite.classList.add('bi-heart-fill');
        favorite.classList.add('text-danger');
    } else {
        alert(movieTitle + ' ' + "has been remove from your favorite.");

        favorite.classList.add('bi-heart');
        favorite.classList.remove('bi-heart-fill');
        favorite.classList.remove('text-danger');
    }
}
// End favorite function and alert //


// Hide show function //
function showHideMovie() {
    var elm = document.querySelector('.movie-collection');
    if (elm.style.display === 'none') {
        elm.style.display = '';
    } else {
        elm.style.display = 'none';
    }
}
// End hide show function //