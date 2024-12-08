import { todoFormWindow } from "../main/todoFormDOM";
import { daysSidebar } from "./days-sidebarDOM";
import { container } from "./projects-sidebarDOM";

const sidebar = document.createElement("div");
sidebar.setAttribute("class", "sidebar")


const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("class", "add-button-container")

const categoryContainer = document.createElement("div");
categoryContainer.setAttribute("class", "category-container")

const addTodoButton = document.createElement("button");
addTodoButton.setAttribute("class", "add-button")


addTodoButton.textContent = "Add Todo"

addTodoButton.addEventListener("click", () => {
    todoFormWindow.showModal();
});

buttonContainer.appendChild(addTodoButton)

categoryContainer.appendChild(daysSidebar);
categoryContainer.appendChild(container)

sidebar.appendChild(buttonContainer)
sidebar.appendChild(categoryContainer)


export { sidebar }