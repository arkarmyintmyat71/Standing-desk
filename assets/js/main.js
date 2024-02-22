var myNav = document.getElementById('navbarsFurni');
var body = document.getElementById('popupBody');
var popup = document.getElementById('popup');

function myFunction() {
    myNav.classList.toggle('active');
}

function loadBody() {
    body.classList.add('loaded');
    popup.classList.add('active')
}

// Attaching the function to the window.onload event
window.onload = loadBody;

function closePopup(){
    popup.classList.remove('active');
    body.classList.remove('loaded');
}
