// animating the menu icon 

let icon = document.querySelector("#menu-icon");
let links = document.querySelector(".links");
let closeIcon = document.querySelector("#close-icon");

icon.addEventListener('click',function(){
closeIcon.classList.toggle('displayIcon');
icon.classList.toggle('hideIcon');
links.classList.toggle('show');

});

closeIcon.addEventListener('click',function(){
links.classList.toggle('show');
closeIcon.classList.toggle('displayIcon');
icon.classList.toggle('hideIcon');
})