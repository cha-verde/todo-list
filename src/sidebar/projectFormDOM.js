import { projects, refreshProject } from "./projects-sidebarDOM";
import { updateProjectsDOM } from "../main/todoFormDOM";

const projectFormWindow = document.createElement("dialog");
projectFormWindow.setAttribute("class", "form-whole")

const projectFormTab = document.createElement("div");
projectFormTab.setAttribute("class", "form-tab")

const closeButton = document.createElement("button");
closeButton.setAttribute("class", "form-close-button")

const closeIcon = document.createElement("span")
closeIcon.setAttribute("class", "material-icons")
closeIcon.textContent = "close"

closeButton.appendChild(closeIcon)

projectFormTab.appendChild(closeButton)

const projectFormArea = document.createElement("div");
projectFormArea.setAttribute("class", "form-area")

const projectNameLabel = document.createElement("div");
projectNameLabel.textContent = "Project name:"

const projectNameInput = document.createElement("input");
projectNameInput.setAttribute("class", "project-form-name-input")

const addProjectButton = document.createElement("button");
addProjectButton.setAttribute("class", "form-add-button")
addProjectButton.textContent = "Add"



projectFormArea.appendChild(projectNameLabel)
projectFormArea.appendChild(projectNameInput)
projectFormArea.appendChild(addProjectButton)

projectFormWindow.appendChild(projectFormTab)
projectFormWindow.appendChild(projectFormArea)


addProjectButton.addEventListener("click", () => {
    projects.push(projectNameInput.value)
    refreshProject();
    updateProjectsDOM(projects)
    projectFormWindow.close()
});

closeButton.addEventListener("click", () => {
    projectFormWindow.close()
});

export {projectFormWindow}