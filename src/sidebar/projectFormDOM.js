import { projects, refreshProject } from "./projects-sidebarDOM";
import { updateProjectsDOM } from "../main/todoFormDOM";

const projectFormWindow = document.createElement("dialog");

const projectNameLabel = document.createElement("div");
projectNameLabel.textContent = "Project Name:"

const projectNameInput = document.createElement("input");

const addProjectButton = document.createElement("button");
addProjectButton.textContent = "Add Project"

projectFormWindow.appendChild(projectNameLabel)
projectFormWindow.appendChild(projectNameInput)
projectFormWindow.appendChild(addProjectButton)

addProjectButton.addEventListener("click", () => {
    projects.push(projectNameInput.value)
    refreshProject();
    updateProjectsDOM(projects)
    projectFormWindow.close()
});

export {projectFormWindow}