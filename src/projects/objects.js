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
            throw new Error(`Valor no permitido. Debe ser uno de: ${valoresPermitidos.join(', ')}`);
        }
    }

}

export class Project {

    constructor(name = "Default", todos = [], tags = []) {
        this.UUID = crypto.randomUUID();
        this.name = name;
        this.todos = todos;
        this.tags = tags
    }
}

