
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 900);
})

function center_it() {
    var x = 0;
    var y = 0;
    var el = document.getElementById("block");
    el.style.position = "relative";
    el.style.left = x + 'px';
    el.style.top = y + 'px';
}

window.particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
  });

  