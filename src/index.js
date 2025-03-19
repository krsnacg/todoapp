import "./styles.css"
import "./projects/projects.css"
import { displayProjects } from "./projects/uiloader";

window.addEventListener("load", () => {
    displayProjects();
});
