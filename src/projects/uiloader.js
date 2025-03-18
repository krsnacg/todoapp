import { setupTaskItemButtons, setupTaskItemEditing, setupProjectItemButtons, setupProjectItemEditing, setupAddProjectButton } from "./eventloader";
import { projectData } from "./objects";

console.log(projectData.at(0).todos.find(t => t.UUID == ""));

function addTask(taskListHTML, projectToUpdate, task, taskIndex) {
    // const projectToUpdate = projectData.find(p => p.UUID === projectUUID);
    // if (!projectToUpdate) { 
    //     console.error(`Error: Couldn't find the corresponding project wiht ${projectUUID}`);
    //     console.log("Skipping task creation");
    //     return;
    // }
    const taskHTML = document.createElement("div");
    taskHTML.classList.add("task")
    taskHTML.innerHTML = `<div class="task-collapsed">
                                    <!--<div class="task-left">-->
                                    <div class="task-name">
                                        <input type="checkbox" name="" id="state" ${task.state ? "checked" : ""}>
                                        <input type="text" id="name" value="${task.title}">
                                    </div>
                                    <!--<div class="task-exp-collapsed"><span class="task-exp-date">${task.dueDate}</span></div>-->
                                    <!--</div>-->
                                    <button type="button" class="task-icon delete-icon"></button>
                                    <button type="button" class="caret caret-down"></button>
                                </div>
                                <div class="task-expanded">
                                    <textarea>${task.desc}</textarea>
                                    <div class="task-exp">Due: <input type="date" class="task-exp-date" value = "${task.dueDate}"></div>
                                    <div class="task-state">State: <span class="state-indicator">${task.state ? "Done" : "Pending"}</span></div>
                                    <div class="task-priority">Priority: 
                                        <span class="priority">
                                            <select name="priority" id="priority">
                                                <option value="LOW">Low</option>
                                                <option value="MEDIUM">Medium</option>
                                                <option value="HIGH">High</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div class="non-editable">
                                        <div class="task-creation-date">Creation: ${task.creationDate}</div>
                                        <div class="task-id">ID: ${task.UUID}</div>
                                    </div>
                                </div>`;
    taskHTML.querySelector("#priority").value = task.priority.toUpperCase();
    
    setupTaskItemEditing(projectToUpdate, taskHTML, task);
    setupTaskItemButtons(projectToUpdate, taskHTML, task);
    taskListHTML.appendChild(taskHTML);
    console.log(`Created task #${taskIndex + 1} in project {${projectToUpdate.UUID}} `);
    // document.querySelectorAll(".projectlist")[projectIndex].appendChild();
}

function addProject(projectListHTML, project) {
    const projectHTML = document.createElement("div");
    const projectNameContainer = document.createElement("div");
    const projectNameHeading = document.createElement("h3");

    projectHTML.classList.add("project");
    projectNameContainer.classList.add("project-name");
    projectNameHeading.setAttribute("contenteditable", "true");
    projectNameHeading.textContent = project.name;
    projectNameContainer.appendChild(projectNameHeading);
    projectNameContainer.innerHTML += `<button type="button" class="project-icon close-icon"></button>`;
    projectHTML.appendChild(projectNameContainer);
    projectHTML.innerHTML += `<div class="add-task">
                                <button type="button" class="add-task-button">Add task</button>
                            </div>`;
    const taskListHTML = document.createElement("div");
    taskListHTML.classList.add("tasks");
    project.todos.forEach((todo, todoIndex) => {
        addTask(taskListHTML, project, todo, todoIndex);
    });
    
    projectHTML.appendChild(taskListHTML);
    setupProjectItemEditing(project, projectHTML);
    setupProjectItemButtons(projectData, project, projectHTML, addTask);
    projectListHTML.appendChild(projectHTML);
}

export function displayProjects() {
    const projectListHTML = document.querySelector(".projectlist");
    projectListHTML.innerHTML = "";
    projectData.forEach((project) => {
        addProject(projectListHTML, project)
    });
    setupAddProjectButton(projectListHTML, projectData, addProject);
}