// step 1: find elements
let closeButton = document.getElementById("closeButton");
let openButton = document.getElementById("openButton");
let mainBody = document.getElementById("main");


//step 2: write a function to implement the behaviour
function changeNavMenu(navBarSize) {
    document.getElementById("main").style.marginLeft = navBarSize;
    document.getElementById("websiteheader").style.marginLeft = navBarSize;
    document.getElementById("sideNavMenu").style.width = navBarSize;
}
// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-black') {
        setTheme('theme-white');
    } else {
        setTheme('theme-black');
    }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-black') {
        setTheme('theme-white');
    } else {
        setTheme('theme-black');
    }
})();


//step 3: link element, function and event

closeButton.addEventListener('click', (event) => changeNavMenu('0'));
openButton.addEventListener('click', (event) => changeNavMenu('250px'));
mainBody.addEventListener('mouseout', (event) => changeNavMenu('0'));









