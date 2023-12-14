let btn = document.getElementById("btn");
let logo = document.getElementById("logo");

btn.addEventListener("click",() => {
    let mode = document.getElementById("mode");
    btn.classList.toggle("fa-moon")
    if(btn.classList.toggle("fa-sun")){
        mode.href = "style.css"
    }
    else{
        mode.href = "light.css"
    }

    
    if(logo.src == "./image/light logo.png"){
        logo.src = "./image/logo.png";
    } 
    else{
        logo.src ="./image/light logo.png";
    }
})

let bars = document.getElementById("bars");
let home = document.querySelector(".nav ul");
let enternet = document.querySelector(".enternet");

bars.addEventListener("click", () => {
    home.classList.toggle("active");
    enternet.classList.toggle("add");
})

let href = document.querySelectorAll(".navbar_wrapper a");
href.addEventListener("click", () => {
    console.log("hello")
})
console.log(href);

