import { todoFormWindow } from "./main/todoFormDOM";
import { sidebar } from "./sidebar/sidebarDOM";
import { mainWindow, refreshDOM } from "./main/mainDOM";
import { getTodos } from "./getTodos";
import { refreshProject } from "./sidebar/projects-sidebarDOM";
import { updateProjectsDOM } from "./main/todoFormDOM";
import { projects } from "./sidebar/projects-sidebarDOM";

import "./styles.css"

const container = document.querySelector(".container");
container.appendChild(sidebar)
container.appendChild(mainWindow);

const body = document.querySelector("body");

body.appendChild(todoFormWindow);

const todos = getTodos().getParsedTodos();
refreshDOM(todos)

refreshProject();
updateProjectsDOM(projects)
