/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

/////////////////////////////////////////

// Dynamicly build the nav bar
const sections = document.getElementsByTagName("section");
const documentFragment = document.createDocumentFragment();

for (const section of sections) {
    let listItemElement = document.createElement('li');
    let linkElement = document.createElement('a');

    linkElement.textContent = section.dataset.nav;
    linkElement.classList.add("menu__link");
    if(section.id[7] == "1"){
        linkElement.classList.add("menu__link--active");
    }
    linkElement.href = "#"+section.id;

    listItemElement.appendChild(linkElement)
    documentFragment.appendChild(listItemElement);
}
//documentFragment.children[0].children[0].classList.add("menu__link--active");
document.getElementById("navbar__list").appendChild(documentFragment);

// add scroll event
document.addEventListener("scroll", (event) => {
    for (const section of sections) {
        if(section.getBoundingClientRect().y <= 480 && section.getBoundingClientRect().y > -130){
            section.classList.add("active-section");
            document.querySelector(".menu__link--active").classList.remove("menu__link--active");
            let listItems = document.getElementById("navbar__list").children;
            let currentSection = Number(section.id[7]);
            listItems[(currentSection - 1)].firstElementChild.classList.add("menu__link--active");
        }else{
            section.classList.remove("active-section");
        }
    }
});

// add on click event
document.getElementById("navbar__list").addEventListener("click", (event) => {
    if(event.target.nodeName.toLowerCase() === "a"){
        event.preventDefault();
        let query = `section[data-nav = '${event.target.textContent}']`;
        let desiredSection = document.querySelector(query);
        desiredSection.scrollIntoView({behavior: "smooth"});
    }
}) 

