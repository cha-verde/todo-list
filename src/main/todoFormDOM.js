import { addTodo } from "../addTodo";
import { refreshDOM } from "./mainDOM";
import { getTodos } from "../getTodos";

const todoFormWindow = document.createElement("dialog");


const todoForm = document.createElement("form");
todoForm.setAttribute("action", "");
todoForm.setAttribute("id", "todo-form");

const fields = ["title", "description", "date", "priority"]

const closeButton = document.createElement("button");
closeButton.textContent = "X";
todoFormWindow.appendChild(closeButton);

for (var i of fields) {
    createTodoElement(i);
}


function createTodoElement(name, value) {

    closeButton.addEventListener("click", () => {
        todoFormWindow.close();
    });


    const label = document.createElement("label");
    label.setAttribute("for", name);
    label.textContent = name;

    todoForm.appendChild(label);

    if (name == "priority") {
        const select = document.createElement("select");
        select.setAttribute("name", name);
        select.setAttribute("id", name);
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
    }
    else {
        const input = document.createElement("input");
        if (name == "date") {
            input.setAttribute("type", "date");
        }
        else {
            input.setAttribute("type", "text");
        }
        input.setAttribute("name", name);
        input.setAttribute("id", name);
        input.setAttribute("class", "todo-field");

        todoForm.appendChild(input);
    }
}

const label = document.createElement("label");
label.setAttribute("for", "project");
label.textContent = "Projects";

todoForm.appendChild(label);

const addButton = document.createElement("button");
addButton.textContent = "Add";

todoFormWindow.appendChild(addButton);

todoFormWindow.appendChild(todoForm);

let currentId = "";

addButton.addEventListener("click", () => {
    addTodo(currentId)
    const todos = getTodos().getParsedTodos()
    refreshDOM(todos)
    todoFormWindow.close();
    currentId = "";

});

function updateProjectsDOM(todos) {

    if(todoForm.querySelector("#project") != null){
        const s = todoForm.querySelector("#project")
        todoForm.removeChild(s)
   }

    const select = document.createElement("select");

    select.setAttribute("name", "project");
    select.setAttribute("id", "project");
    select.setAttribute("class", "todo-field");

    const opt = document.createElement("option")
    opt.setAttribute("value", "None");
    opt.textContent = "None"
    select.appendChild(opt);

    console.log(todos)

    for (var todo of todos) {
        const projectOpt = document.createElement("option")
        projectOpt.setAttribute("value", todo);
        projectOpt.textContent = todo
        select.appendChild(projectOpt);

    }

    todoForm.appendChild(select);

}

function updateValueDOM(id){
    const todo = getTodos().getOneTodo(id);
    const title = todoForm.querySelector("#title")
    const description = todoForm.querySelector("#description")

    console.log(todo.title)
    console.log(todo.description)

    title.value = todo.title
    description.value = todo.description
    currentId = id

}


export { todoFormWindow, updateProjectsDOM, updateValueDOM};

