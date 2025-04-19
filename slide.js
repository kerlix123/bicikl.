const params = new URLSearchParams(window.location.search);
if (params.get("pitanje") === "true") {
    postavi_pitanje_prosiri();
}

function prosiri(id1) {
    var x = document.getElementById(id1);
    
    if (x.style.height && x.style.height !== "0px") {
        x.style.height = x.scrollHeight + "px";
        setTimeout(() => {
            x.style.height = "0px";
        }, 10);
        setTimeout(() => {
            x.style.display = "none";
        }, 200);
    } else {
        x.style.display = "block";
        x.style.height = "0px";
        setTimeout(() => {
            x.style.height = x.scrollHeight + "px";
        }, 10);
        setTimeout(() => {
            x.style.height = "auto";
        }, 200);
    }
}

function burger_menu() {
    prosiri("linkovi");
}

function postavi_pitanje_prosiri() {
    var x = document.getElementById("postavi_pitanje");
    
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

window.addEventListener("resize", function() {
    var x = document.getElementById("linkovi");

    if (window.innerWidth > 1000) {
        x.style.display = "none"; 
    }
});