import { Project, Todo } from "./objects";
// TODO: Implement event delegation
export function setupTaskItemEditing(project, taskHtml, task) {
    const taskToUpdate = project.todos.find(t => t.UUID === task.UUID);
    taskHtml.querySelector("#state").addEventListener("change", (stateInput) => {
        if (taskToUpdate) {
            taskToUpdate.state = stateInput.target.checked;
            taskHtml.querySelector(".state-indicator").textContent = taskToUpdate.state ? "Done" : "Pending";
            console.log(`Task {${task.UUID}} state changed to: ${taskToUpdate.state}`);
        }
    });
    taskHtml.querySelector("#name").addEventListener("input", (nameInput) => {
        if (taskToUpdate) {
            taskToUpdate.name = nameInput.target.value;
            console.log(`name changed: ${taskToUpdate.name} on task: {${task.UUID}}`);
        }
    });
    taskHtml.querySelector(".task-exp-date").addEventListener("change", (expDateInput) => {
        if (taskToUpdate) {
            taskToUpdate.dueDate = expDateInput.target.value;
            console.log(`due date change: ${taskToUpdate.dueDate} on task: {${task.UUID}}`);
        }
    });
    taskHtml.querySelector("#priority").addEventListener("change", (selectElement) => {
        if (taskToUpdate) {
            taskToUpdate.priority = selectElement.target.value;
            console.log(`priority change: ${taskToUpdate.priority} on task: {${task.UUID}}`);
        }
    });
    //Resizable textarea
    taskHtml.querySelector("textarea").addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    });
}

export function setupTaskItemButtons(project, taskHtml, task) {
    taskHtml.querySelector(".caret").addEventListener("click", (event) => {
        const button = event.target;
        event.stopPropagation();
        toggleExpansion(button, button.parentNode.parentNode);
        console.log("caret button clicked");
    });
    const divSelector = ".task-collapsed";
    taskHtml.querySelector(divSelector).addEventListener("click", (event) => {
        const button = event.target.querySelector(".caret");
        // console.log(button.parentNode); // Doing this gives an error
        if (button) {
            // console.log(button.parentNode); // Moving that console.log here doesn't give the error
            toggleExpansion(button, button.parentNode.parentNode);
            console.log("div clicked");
        }
    });
    const buttonSelector = ".task-icon";
    taskHtml.querySelector(buttonSelector).addEventListener("click", () => {
        const updatedTaskIndex =  project.todos.findIndex(t => t.UUID === task.UUID) // Array.from(task.parentNode.children).indexOf(task); // Recalcula el índice
        if (project.removeTask(updatedTaskIndex)) {
            taskHtml.remove();
            console.log(`delete button fired, NEW ARARY: [${project.toString()}]`);
            // Reasignar índices a los botones de eliminar restantes
            // updateTaskIndices(task.parentNode, projectIndex);
        } else {
            console.log("Couldn't remove element")
        }
    });
}

export function setupProjectItemButtons(projectList, project, projectHTML, addTask) {
    const selector = ".add-task-button";
    projectHTML.querySelector(selector).addEventListener("click", (button) => {
        const task = new Todo();
        project.addTask(task);
        const taskListHTML = projectHTML.querySelector(".tasks");
        // console.log(taskList);
        addTask(taskListHTML, project, task, project.getTaskCount() - 1);
        console.log(`button ${selector} fired from project ${project.UUID}`);
    });
    const deleteButtonSelector = ".project-icon";
    projectHTML.querySelector(deleteButtonSelector).addEventListener("click", () => {
        const projectToRemove = projectList.findIndex(p => p.UUID === project.UUID);
        if (projectToRemove != -1) {
            projectHTML.remove();
            const projectRemoved = projectList.splice(projectToRemove, 1);
            console.log(`Removed project ${projectRemoved}`);
        }
        
    });
}

export function setupProjectItemEditing(project, projectHTML) {
    projectHTML.querySelector("h3").addEventListener("input", (element) => {
        project.name = element.target.textContent;
        console.log(element.target.textContent);
    });
}

export function setupAddProjectButton(projectListHTML, projectList, addProject) {
    document.querySelector(".addproj").addEventListener("click", (button) => {
        const project = new Project();
        projectList.push(project);
        addProject(projectListHTML, project);
        // displayProjects(projectList);
        console.log(`Project created with UUID ${project.UUID}`);
    });
}

// Función común para manejar la expansión/contracción
function toggleExpansion(caretButton, parentElement) {
    caretButton.classList.toggle("caret-up");
    caretButton.classList.toggle("caret-down");
    parentElement.classList.toggle("expandable");
}