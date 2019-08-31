function mouseoverProfile(){
    var astro = document.getElementById("astro");
    astro.style.width = "21%";
    astro.style.height = "auto";
}

function mouseoutProfile(){
    var astro = document.getElementById("astro");
    astro.style.width = "20%";
    astro.style.height = "auto";
}

function mouseoverProject(){
    var comp = document.getElementById("comp");
    comp.style.width = "18%";
    comp.style.height = "auto";
}

function mouseoutProject(){
    var comp = document.getElementById("comp");
    comp.style.width = "17%";
    comp.style.height = "auto";
}

particlesJS.load('particles-js', '../JSON/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});