import projectsJSON from "./../assets/data/project-data.json" assert {type: "json"}

export class Todo {

    #creationDate;
    #priority

    constructor(title = "Add a title here", desc = "Add a large description here", creationDate = new Date(Date.now()), dueDate = "Date", priority = "HIGH", state = false) {
        this.UUID = crypto.randomUUID();
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

}

export class Project {

    constructor(name = "Default", todos = [], tags = []) {
        this.UUID = crypto.randomUUID();
        this.name = name;
        this.todos = todos;
        this.tags = tags
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

export const projectData = projectsJSON.projects.map((project) => {
    const todos = project.todos.map((task) => {
        return new Todo(
            task.title, 
            task.desc, 
            task.creationDate, 
            task.dueDate, 
            task.priority.toLocaleUpperCase(), 
            task.state
        );
    });
    return new Project(project.name, todos);
});