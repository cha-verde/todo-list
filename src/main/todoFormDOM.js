import { addTodo } from "../addTodo";
import { refreshDOM } from "./mainDOM";
import { getTodos } from "../getTodos";
import { add } from "date-fns";

const todoFormWindow = document.createElement("dialog");
todoFormWindow.setAttribute("class", "form-whole");


const todoFormArea = document.createElement("div")
todoFormArea.setAttribute("class", "form-area");


const todoForm = document.createElement("form");

todoForm.setAttribute("action", "");
todoForm.setAttribute("id", "todo-form");
todoForm.setAttribute("class", "form-area")

const fields = ["title", "description", "date", "priority"]

const projectFormTab = document.createElement("div");
projectFormTab.setAttribute("class", "form-tab")

const closeButton = document.createElement("button");
closeButton.setAttribute("class", "form-close-button")

const closeIcon = document.createElement("span")
closeIcon.setAttribute("class", "material-icons")
closeIcon.textContent = "close"

closeButton.appendChild(closeIcon)

projectFormTab.appendChild(closeButton)

todoFormWindow.appendChild(projectFormTab);

for (var i of fields) {
    createTodoElement(i);
}


function createTodoElement(name, value) {

    closeButton.addEventListener("click", () => {
        const title = todoForm.querySelector("#title")
        const description = todoForm.querySelector("#description")
        title.value = ""
        description.value = ""
        todoFormWindow.close();
    });


    const label = document.createElement("label");
    label.setAttribute("for", name);
    label.textContent =  name.charAt(0).toUpperCase() + name.slice(1)
    todoForm.appendChild(label);

    const input = document.createElement("input");
    const textArea = document.createElement("textarea");
    const select = document.createElement("select");


    switch (name) {
        case "title":
            input.setAttribute("type", "text");
            input.setAttribute("name", name);
            input.required = true;
            input.setAttribute("id", name);
            input.setAttribute("class", "todo-field");
            todoForm.appendChild(input);
            break;
        case "description":
            textArea.setAttribute("name", name);
            textArea.setAttribute("id", name);
            textArea.setAttribute("class", "todo-field");
            textArea.setAttribute("rows", "5")
            textArea.setAttribute("cols", "30")
            todoForm.appendChild(textArea);
            break;
        case "date":
            input.setAttribute("type", "date");
            input.setAttribute("name", name);
            input.setAttribute("id", name);
            input.required = true;
            input.setAttribute("class", "todo-field");
            todoForm.appendChild(input);
            break;
        case "priority":
            select.setAttribute("name", name);
            select.setAttribute("id", name);
            select.required = true;
            select.setAttribute("class", "todo-field");
            const low = document.createElement("option")
            low.setAttribute("value", "low");
            low.textContent = "Low"
            const medium = document.createElement("option")
            medium.setAttribute("value", "medium");
            medium.textContent = "Medium"
            const high = document.createElement("option")
            high.setAttribute("value", "high");
            high.textContent = "high"
            select.appendChild(low);
            select.appendChild(medium);
            select.appendChild(high);
            todoForm.appendChild(select);
            break;

    }
}

const label = document.createElement("label");
label.setAttribute("for", "project");
label.textContent = "Projects";

todoForm.appendChild(label);

const addButton = document.createElement("button");
addButton.textContent = "Update";

addButton.setAttribute("class", "form-add-button");


todoFormArea.appendChild(todoForm);
todoFormArea.appendChild(addButton);


todoFormWindow.appendChild(todoFormArea)



addButton.addEventListener("click", () => {

    addTodo(todoForm.id)
    const todos = getTodos().getParsedTodos()
    refreshDOM(todos)
    todoFormWindow.close();
    todoForm.id = ''

});

function updateProjectsDOM(todos) {

    if (todoForm.querySelector("#project") != null) {
        const s = todoForm.querySelector("#project")
        todoForm.removeChild(s)
    }

    const select = document.createElement("select");

    select.setAttribute("name", "project");
    select.setAttribute("id", "project");
    select.setAttribute("class", "todo-field");
    select.required = true;


    const opt = document.createElement("option")

    console.log(todos)

    for (var todo of todos) {
        const projectOpt = document.createElement("option")
        projectOpt.setAttribute("value", todo);
        projectOpt.textContent = todo
        select.appendChild(projectOpt);

    }

    todoForm.appendChild(select);

}

function updateValueDOM(id) {
    const todo = getTodos().getOneTodo(id);
    todoForm.setAttribute("id", id)
    const title = todoForm.querySelector("#title")
    const description = todoForm.querySelector("#description")
    const date = todoForm.querySelector("#date")
    const project = todoForm.querySelector("#project")

    title.value = todo.title
    description.value = todo.description
    date.value = todo.date
    project.value = todo.project



}


export { todoFormWindow, updateProjectsDOM, updateValueDOM };

