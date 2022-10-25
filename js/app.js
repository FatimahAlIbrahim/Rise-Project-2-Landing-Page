// The page sections
const sections = document.getElementsByTagName("section");

// Dynamicly build the nav bar
const documentFragment = document.createDocumentFragment();

for (const section of sections) {
    // create the li and anchor elements
    let listItemElement = document.createElement('li');
    let linkElement = document.createElement('a');

    // add the relevent text and classes to the anchor
    linkElement.textContent = section.dataset.nav;
    linkElement.classList.add("menu__link");

    // set the first section to active by default
    if(section.id[7] == "1"){
        linkElement.classList.add("menu__link--active");
    }
    linkElement.href = "#"+section.id;

    // add the elements to thier parents
    listItemElement.appendChild(linkElement)
    documentFragment.appendChild(listItemElement);
}
// add the list items to the unordered list to create the nav menu
document.getElementById("navbar__list").appendChild(documentFragment);

// add scroll event to change the active section and menu item
document.addEventListener("scroll", (event) => {
    // loop over the sections
    for (const section of sections) {
        // check if the sction satisfy the location criteria 
        if(section.getBoundingClientRect().y <= 480 && section.getBoundingClientRect().y > -130){
            // add the active class to the curent section and remove it from the previously active section
            document.querySelector(".active-section").classList.remove("active-section");
            section.classList.add("active-section");

            // add the active class to the curent section menu item and remove it from the previously active menu item
            document.querySelector(".menu__link--active").classList.remove("menu__link--active");
            let listItems = document.getElementById("navbar__list").children;
            let currentSection = Number(section.id[7]);
            listItems[(currentSection - 1)].firstElementChild.classList.add("menu__link--active");
        }
    }
});

// add a click event for the menu item to scroll to the relevent section
document.getElementById("navbar__list").addEventListener("click", (event) => {
    // check if the event target is an anchor element
    if(event.target.nodeName.toLowerCase() === "a"){
        // prevent the event default behaviour
        event.preventDefault();

        // get the section related to the clicked anchor and scroll to it
        let query = `section[data-nav = '${event.target.textContent}']`;
        let desiredSection = document.querySelector(query);
        desiredSection.scrollIntoView({behavior: "smooth"});
    }
});

document.querySelector(".hamburger__icon").addEventListener("click", () => {
    let icon = document.querySelector(".hamburger__icon");
    let menu = document.getElementById("navbar__list");

    if(icon.src.includes("menu1")){
        icon.setAttribute("src", "../images/menu2.png");
        menu.classList.remove("navbar__list--hamburger");
    } else {
        icon.setAttribute("src", "../images/menu1.png");
        menu.classList.add("navbar__list--hamburger");
    }
});

