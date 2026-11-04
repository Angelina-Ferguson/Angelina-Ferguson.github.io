//pages
import {} from "/Pages/HomePage.js";


//components
import {} from "/Components/NavBar.js";
import {} from "/Components/AboutSection.js";
import {} from "/Components/ProjectsSection.js";
import {} from "/Components/ExperienceSection.js";


let selectedPage;

document.addEventListener ("DOMContentLoaded", 
    selectedPage = document.querySelector("#about-btn"),
    selectedPage.style.backgroundColor = "rgb(104, 245, 198)",
);

// document.querySelectorAll(".btn-div button").forEach( (btn) => { btn.addEventListener("hover", (e) => {
//     e.target.style.backgroundColor = "rgb(104, 245, 198)"
// })});
   
document.querySelectorAll("home-page button").forEach( (btn) => { btn.addEventListener("click", (e) => {
    if (selectedPage) {selectedPage.style.backgroundColor = "white";}
    e.target.style.backgroundColor = "rgb(104, 245, 198)";
    selectedPage = e.target
    var cleanedText = selectedPage.id.replace("-btn", "").toLowerCase()
    switch (cleanedText) {
        case "about":
            document.querySelector('#section-container').innerHTML = `<about-section></about-section>`;            
            break;
        case "exp":
            document.querySelector('#section-container').innerHTML = `<experience-section></experience-section>`;
            break;
        case "proj":
            document.querySelector('#section-container').innerHTML = `<projects-section></projects-section>`;
            break;
    }
})});
