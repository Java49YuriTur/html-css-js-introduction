console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const mainClass = document.querySelector(".main-class");
const HIDDEN = "hidden";
function setDetails(anchor) {
    detailsImage.setAttribute('src', anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML = anchor.getAttribute('data-details-title');
}

for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        console.log("event - click on ", anchors[i]);
        showDetails();
        setDetails(anchors[i]);
    })
}
function showDetails() {                /*Click on img to remove hidden */
    mainClass.classList.remove(HIDDEN);
}
function hideDetails() {          /* When you click the Hide-details button, delete Details-image and turn Hidden*/
    mainClass.classList.add(HIDDEN);
}