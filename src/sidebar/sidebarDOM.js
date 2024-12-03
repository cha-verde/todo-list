import { daysSidebar } from "./days-sidebarDOM";
import { container } from "./projects-sidebarDOM";

const sidebar = document.createElement("div");
sidebar.setAttribute("class", "sidebar")

sidebar.appendChild(daysSidebar);
sidebar.appendChild(container)

export { sidebar }