import { projectFormWindow } from "./projectFormDOM";
import { getTodos } from "../getTodos";
import { filterTodoByProject } from "../filterTodo";
import { refreshDOM } from "../main/mainDOM";


const container = document.createElement("div");
container.setAttribute("class", "projects-sidebar")

const projectsSidebarTitle = document.createElement("div");
projectsSidebarTitle.textContent = "Projects"

const projectsContainer = document.createElement("div");
projectsContainer.setAttribute("class", "projects-container")

const addButton = document.createElement("button");
addButton.textContent = "Add a project"

container.appendChild(projectsSidebarTitle)
container.appendChild(addButton)
container.appendChild(projectFormWindow)

let projects = ["Unassigned"];

function getProjects(){
    for(var todo of getTodos().getParsedTodos()){
        if(projects.indexOf(todo.project) == -1){
            projects.push(todo.project);
        }
    }
}


addButton.addEventListener("click", () => {
    projectFormWindow.showModal();
});

function refreshProject(){
    getProjects();

    projectsContainer.replaceChildren();
    for(var project of projects){
        var projectButton = document.createElement("button")
        projectButton.setAttribute("value", project)
        projectButton.textContent = project;

        projectButton.addEventListener("click", (event) => {
            const todos = filterTodoByProject(event.target.value, getTodos().getParsedTodos());
            refreshDOM(todos);
        });

        projectsContainer.appendChild(projectButton);
    }
    container.appendChild(projectsContainer)
}

export {container, refreshProject, projects}




