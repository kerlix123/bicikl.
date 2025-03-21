let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}


function prosiri() {
    var x = document.getElementById("linkovi");
    var list = document.getElementById("burger_menu");
    x.style.height = list.offsetHeight + "px";
    if (x.style.display === "block") { 
        setTimeout(() => {
            x.style.height = "0px";
        }, 10);
        setTimeout(() => {
            x.style.display = "none";
        }, 200);
    } else {
        x.style.display = "block";
        x.style.height = list.offsetHeight + "px";
        setTimeout(function(){
            x.style.height = "auto";
        }, 200);
    }
}

window.addEventListener("resize", function() {
    var x = document.getElementById("linkovi");

    if (window.innerWidth > 1000) {
        x.style.display = "none"; 
    }
});