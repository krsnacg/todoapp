import projectsJSON from "./../assets/data/project-data.json" assert {type: "json"}

export class Todo {

    #creationDate;
    #priority

    constructor(title = "Add a title here", desc = "Add a large description here", creationDate = new Date(Date.now()), dueDate = "Date", priority = "HIGH", state = false, UUID = crypto.randomUUID()) {
        this.UUID = UUID;
        this.title = title;
        this.desc = desc;
        this.#creationDate = creationDate;
        this.dueDate = dueDate;
        this.priority = priority;
        this.state = state;
    }

    get creationDate() {
        return this.#creationDate;
    }

    get priority() {
        return this.#priority;
    }

    set priority(value) {
        const values = ["HIGH", "MEDIUM", "LOW"];
        if (values.includes(value)) {
            this.#priority = value;
        } else {
            throw new Error(`Valor no permitido. Debe ser uno de: ${values.join(', ')}`);
        }
    }

    toString() {
        return `Name: ${this.title}, 
                UUID: ${this.UUID}, 
                Description: ${this.desc}, 
                Creation Date: ${this.#creationDate}, 
                Due Date: ${this.dueDate},
                Priority: ${this.priority},
                State: ${this.state}\n`;
    }

    toJSON() {
        return {
            UUID: this.UUID,
            title: this.title,
            desc: this.desc,
            creationDate: this.#creationDate,
            dueDate: this.dueDate,
            priority: this.#priority,
            state: this.state,
        }
    }

}

export class Project {

    constructor(name = "Default", todos = [], UUID = crypto.randomUUID()) {
        this.UUID = UUID;
        this.name = name;
        this.todos = todos;
        // this.tags = tags
    }

    addTask(task) {
        if (!(task instanceof Todo)) {
            throw new TypeError("This element is not an instance of class Todo");
        }
        this.todos.push(task);
    }

    removeTask(index) {
        if (index > this.getTaskCount() - 1 || index < 0) {
            console.error(`Invalid task index: ${index}`);
            return false;
        }
        if (this.getTaskCount() > 0) {
            const removedTask = this.todos.splice(index, 1);
            console.log(`Removed element at index ${index}: ${removedTask.toString()}`);
            return true;
        }
    }

    toString() {
        return `Name: ${this.name}\nUUID: ${this.UUID}\nTasks: ${this.todos}`
    }

    getTaskCount() {
        return this.todos.length;
    }
}

if (!localStorage.getItem("projectList")) {
    localStorage.setItem("projectList", JSON.stringify(projectsJSON));
    console.log("Projects not available. Generating new projects");
} else {
    console.log("Projects loaded")
    // const cm = JSON.parse(localStorage.getItem("projectList"));
    // console.log(`json: ${cm}`);
}

export const projectData = JSON.parse(localStorage.getItem("projectList")).projects.map((project) => {
    const todos = project.todos.map((task) => {
        return new Todo(
            task.title, 
            task.desc, 
            task.creationDate, 
            task.dueDate, 
            task.priority.toLocaleUpperCase(), 
            task.state,
            task.UUID
        );
    });
    return new Project(project.name, todos, project.UUID);
});

function isStorageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (error) {
        return (
            error instanceof DOMException &&
            error.name === "QuotaExceedError" &&
            storage &&
            storage.length !== 0
        )
    }
}

// console.log(isStorageAvailable("sessionStorage"));

