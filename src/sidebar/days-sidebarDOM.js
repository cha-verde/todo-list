import { filterTodoByDays } from "../filterTodo";
import { getTodos } from "../getTodos";
import { refreshDOM } from "../main/mainDOM";

const daysSidebar = document.createElement("div");
daysSidebar.setAttribute("class", "days-sidebar")

const todayButton = document.createElement("button");
const thisWeekButton = document.createElement("button");
const allTasksButton = document.createElement("button");

todayButton.textContent = "Today";
thisWeekButton.textContent = "This Week"
allTasksButton.textContent = "All Tasks"

daysSidebar.appendChild(todayButton);
daysSidebar.appendChild(thisWeekButton);
daysSidebar.appendChild(allTasksButton);

todayButton.addEventListener("click", () => {
    const todos = filterTodoByDays("today", getTodos().getParsedTodos());
    refreshDOM(todos);
});

thisWeekButton.addEventListener("click", () => {
    const todos = filterTodoByDays("week", getTodos().getParsedTodos());
    refreshDOM(todos);
});


allTasksButton.addEventListener("click", () => {
    const todos = getTodos().getParsedTodos();
    refreshDOM(todos)
});

export {daysSidebar}




