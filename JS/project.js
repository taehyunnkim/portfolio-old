var projectName = document.getElementById("name")

function firstIn() {
    projectName.innerHTML = "portfolio";
    projectName.style.opacity = "1";
}
function secondIn() {
    projectName.innerHTML = "vision";
    projectName.style.opacity = "1";
}
function thirdIn() {
    projectName.innerHTML = "poli";
    projectName.style.opacity = "1";
}


function out() {
    projectName.style.opacity = "0";
}