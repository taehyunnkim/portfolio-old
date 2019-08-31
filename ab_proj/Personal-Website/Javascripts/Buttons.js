var appBar;
var gameBar;
var webBar;
var appButton;
var gameButton;
var websButton;


function displayApps() {
    appBar = document.getElementById('appList');
    appButton = document.getElementById('appButton');
    toggleElementsOn(appButton.children);
    if(appBar.style.opacity == 0) {
       appBar.style.opacity = '1';
       enableElements(appBar.children);
    } else {
        appBar.style.opacity = '0';
        disableElements(appBar.children);
    }
    
    hideBar(document.getElementById('gameList'), document.getElementById('webList'));
}

function displayGames() {
    gameBar = document.getElementById('gameList');
    gameButton = document.getElementById('gameButton');
    if(gameBar.style.opacity == 0) {
       gameBar.style.opacity = '1';
       enableElements(gameBar.children);
    } else {
        gameBar.style.opacity = '0';
        disableElements(gameBar.children);
    }
    
    hideBar(document.getElementById('appList'), document.getElementById('webList'));
}

function displayWeb() {
    webBar = document.getElementById('webList');
    websButton = document.getElementById('webButton');
    if(webBar.style.opacity == 0) {
       webBar.style.opacity = '1';
       enableElements(webBar.children);
    } else {
        webBar.style.opacity = '0';
        disableElements(webBar.children);
    }
    
    hideBar(document.getElementById('appList'), document.getElementById('gameList'));
}

function hideBar(list1, list2) {
    if(list1.style.opacity > 0 || 
       list2.style.opacity > 0) {
       list1.style.opacity = 0;
       list2.style.opacity = 0;
       disableElements(list1.children);
       disableElements(list2.children);
    }
}

function closeAll() {
    var appBar = document.getElementById('appList');
    var gameBar = document.getElementById('gameList');
    var webBar = document.getElementById('webList');
    
    appBar.style.opacity = 0;
    gameBar.style.opacity = 0;
    webBar.style.opacity = 0;
    
    disableElements(appBar.children);
    disableElements(gameBar.children);
    disableElements(webBar.children);
}

function disableElements(el) {
    for (var i = 0; i < el.length; i++) {
        el[i].hidden = true;

        disableElements(el[i].children);
    }
}

function enableElements(el) {
    for (var i = 0; i < el.length; i++) {
        el[i].hidden = false;

        enableElements(el[i].children);
    }
}

function toggleElementsOn(el) {
    for (var i = 0; i < el.length; i++) {
        el[i].style.opacity = 1;

        enableElements(el[i].children);
    }
}
