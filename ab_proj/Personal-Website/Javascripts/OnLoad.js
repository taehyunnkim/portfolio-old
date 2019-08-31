function toggleDropDown() {
  var content = document.getElementById("contentContainer");
  var text = document.getElementById("introduction");
  var textEnd = document.getElementById("introductionEnd");
  var dropdown = document.getElementById("dropdown");
    
  if (window.matchMedia('(max-device-width: 500px)').matches) {
        if (content.style.height == '0vh') {
            text.innerHTML = 'eric kim \n{ ';
            textEnd.innerHTML = '}';
            dropdown.style.transform = 'rotate(360deg)';
            dropdown.style.paddingTop = '0.25vh';
            dropdown.style.paddingRight = '0.25vh';
            content.style.height = '8vh';
      } else {
            text.innerHTML = 'eric kim { ... }';
            textEnd.innerHTML = '';
            dropdown.style.transform = 'rotate(270deg)';
            content.style.height = '0vh';
            dropdown.style.paddingTop = '0vh';
            dropdown.style.paddingRight = '0.25vh';
      }
  } else {
      if (content.style.height == '0vh' || content.style.height == '0') {
        content.style.height = '0vh';
        text.innerHTML = 'eric kim \n{ ';
        textEnd.innerHTML = '}';
        dropdown.style.transform = 'rotate(360deg)';
        dropdown.style.paddingTop = '1vh';
        dropdown.style.paddingRight = '1vh';
        content.style.height = '14vh';
      } else {
        text.innerHTML = 'eric kim { ... }';
        textEnd.innerHTML = '';
        dropdown.style.transform = 'rotate(270deg)';
        content.style.height = '0vh';
        dropdown.style.paddingTop = '0vh';
        dropdown.style.paddingRight = '1vh';
      }
  }
} 

function displayBackground() {
    var bg = document.getElementById("background");
    bg.style.opacity = '0.4';
}

// window.onload
window.onload = function() {
    // document.getElementById("contentContainer").style.height = '0vh';   
    toggleDropDown();
    // toggleDropDown();
    displayBackground();
    
    var textareaWidth = document.getElementById("appList").scrollWidth;

    // width of our wrapper equals width of the inner part of the textarea
    document.getElementById("wrapper").style.width = textareaWidth + "px";
};

// event listener
document.addEventListener('DOMContentLoaded', function() {
    // setTimeout(toggleDropDown, 1000);
}, false);

