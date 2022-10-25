console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const mainClass = document.querySelector(".main-class");
const detailsContainer = document.querySelector(".details-container");
const HIDDEN = "hidden";
const IS_POINT = "is-point";
const audio = document.querySelector(".details-audio");
function setDetails(anchor) {
    detailsImage.setAttribute('src', anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML = anchor.getAttribute('data-details-title');

    pause(1);
    audio.setAttribute('src',anchor.getAttribute('data-details-audio'));
}

for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        console.log("event - click on ", anchors[i]);
       setDetails(anchors[i]);
        showDetails();
        
        
    })
}
function showDetails() {                /*Click on img to remove hidden */
    mainClass.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    
    setTimeout(function() {
        detailsContainer.classList.remove(IS_POINT);
    },1);

    play();
    pause(100000);
}
function hideDetails() {          /* When you click the Hide-details button, delete Details-image and turn Hidden*/
    audio.pause();
    mainClass.classList.add(HIDDEN);
}
function play() {
    setTimeout(function (){
        audio.play();
    },1);
}
function pause(msecs) {
    setTimeout(function () {
        audio.pause();
    },msecs);
}



 




