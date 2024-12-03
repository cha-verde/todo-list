import { daysInWeek } from "date-fns/constants";
import { is } from "date-fns/locale";

const { isToday, add, isBefore, isAfter, sub } = require("date-fns");


function filterTodoByDays(filter, todos){
    let filtered = []
    
    if(filter == "today"){
        filtered = todos.filter(item => isToday(item.date));
    }

    if(filter == "week"){
        const nextWeekDate = add(new Date(), {
            weeks: 1
        })

        filtered = todos.filter(item => isBefore(item.date, nextWeekDate) && isAfter(item.date, sub(new Date(), {days: 1})));
    }

    return filtered;
}

function filterTodoByProject(filter, todos){
    let filtered = []

    filtered = todos.filter(item => item.project == filter);

    return filtered;
    
}

export { filterTodoByDays, filterTodoByProject}