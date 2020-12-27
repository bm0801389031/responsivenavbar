let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
//the whole point of this top part is to creat
//variables that grab the html in the html file

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});
