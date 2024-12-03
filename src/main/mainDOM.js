import { todoFormWindow } from "./todoFormDOM";
import { updateValueDOM } from "./todoFormDOM";

const mainWindow = document.createElement("div");
mainWindow.setAttribute("class", "main-window");


function refreshDOM(todos){

    mainWindow.replaceChildren();

    for(var todo of todos){

        const todoDOM = document.createElement("div");
        todoDOM.setAttribute("class", "todo-single");
        todoDOM.setAttribute("id", todo.id);


        const title = document.createElement("div");
        const description = document.createElement("div");
        const date = document.createElement("div");
        const project = document.createElement("div");


        title.textContent = todo.title;
        description.textContent = todo.description;
        date.textContent = todo.date;
        project.textContent = todo.project

        todoDOM.appendChild(title);
        todoDOM.appendChild(description);
        todoDOM.appendChild(date);
        todoDOM.appendChild(project);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit"
        editButton.setAttribute("value", todo.id)


        editButton.addEventListener("click", (event) => {
            todoFormWindow.showModal();
            updateValueDOM(event.target.value)
        });


        todoDOM.appendChild(editButton)

        mainWindow.appendChild(todoDOM);
        
    }
}

export {mainWindow, refreshDOM}