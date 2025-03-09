import "./styles.css"
import { displayHome } from "./home"
import { loadAboutContent } from "./about";
import { loadMenuContent } from "./menu.js";

window.addEventListener("load", displayHome);

const buttons = Array.from(document.querySelectorAll("button"));

buttons.at(0).addEventListener("click", () => {
    displayHome();
});

buttons.at(1).addEventListener("click", () => {
    loadMenuContent();
})

buttons.at(2).addEventListener("click", () => {
    loadAboutContent();
})

console.log("UOOH")

