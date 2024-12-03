
const { isToday, add, isBefore } = require("date-fns");


function filterTodoByDays(filter, todos){
    let filtered = []
    
    if(filter == "today"){
        filtered = todos.filter(item => isToday(item.date));
    }

    if(filter == "week"){
        const nextWeekDate = add(new Date(), {
            weeks: 1
        })

        filtered = todos.filter(item => isBefore(item.date, nextWeekDate));
    }

    return filtered;
}

function filterTodoByProject(filter, todos){
    let filtered = []

    filtered = todos.filter(item => item.project == filter);

    return filtered;
    
}

export { filterTodoByDays, filterTodoByProject}