import { todoFormWindow } from "./todoFormDOM";
import { updateValueDOM } from "./todoFormDOM";
import { getTodos } from "../getTodos";

const mainWindow = document.createElement("div");
mainWindow.setAttribute("class", "main-window");

const windowTab = document.createElement("div");
windowTab.setAttribute("class", "window-tab");
windowTab.textContent = "Todo App"

mainWindow.appendChild(windowTab)

const allTodosSection = document.createElement("div");
allTodosSection.setAttribute("class", "all-todos-section");

mainWindow.appendChild(allTodosSection)


const { format } = require("date-fns");

function refreshDOM(todos){

    allTodosSection.replaceChildren();

    for(var todo of todos){

        const todoDOM = document.createElement("div");
        todoDOM.setAttribute("class", "todo-single");
        todoDOM.setAttribute("id", todo.id);

        const singleTab = document.createElement("div");
        singleTab.setAttribute("class", "todo-single-tab");
        todoDOM.appendChild(singleTab)
        
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("value", todo.id)
        deleteButton.setAttribute("class", "todo-delete-button");


        deleteButton.addEventListener("click", (event) => {
            removeTodo(event.currentTarget.value)
        });

        const deleteIcon = document.createElement("span")
        deleteIcon.setAttribute("class", "material-icons")
        deleteIcon.textContent = "delete_forever"

        deleteButton.appendChild(deleteIcon)

        const editButton = document.createElement("button");
        editButton.setAttribute("value", todo.id)
        editButton.setAttribute("class", "todo-edit-button");
        
        const editIcon = document.createElement("span")
        editIcon.setAttribute("class", "material-icons")
        editIcon.textContent = "edit_note"

        editButton.appendChild(editIcon)


        editButton.addEventListener("click", (event) => {
            todoFormWindow.showModal();
            console.log(event.currentTarget)
            updateValueDOM(event.currentTarget.value)
        });

      
        singleTab.appendChild(editButton)
        singleTab.appendChild(deleteButton)

        const singleArea = document.createElement("div");
        singleArea.setAttribute("class", "todo-single-area");
        todoDOM.appendChild(singleArea)


        const title = document.createElement("div");
        const description = document.createElement("div");
        description.setAttribute("class", "todo-description");
        
        const date = document.createElement("div");
        const project = document.createElement("div");

        title.textContent = todo.title;
        description.textContent = todo.description;
        date.textContent = format(todo.date, "do MMMM");
        project.textContent = todo.project

        singleArea.appendChild(title);
        singleArea.appendChild(description);
        singleArea.appendChild(date);
        // singleArea.appendChild(project);
        console.log(todo.priority)
        switch(todo.priority){
            case "low":
                singleTab.setAttribute("class", "todo-project-low");
            case "medium":
                singleTab.setAttribute("class", "todo-project-medium");
            case "high":
                singleTab.setAttribute("class", "todo-project-high");

        }

        allTodosSection.appendChild(todoDOM);
        
    }
}

function removeTodo(id){
    localStorage.removeItem(id)
    refreshDOM(getTodos().getParsedTodos())
}

export {mainWindow, refreshDOM}