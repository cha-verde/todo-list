import { Todo } from "./todo";


function addTodo(id){

  const fields = document.querySelectorAll(".todo-field");

    if(localStorage.getItem(id) != null){
      localStorage.removeItem(id)
    }
    else{
      id = Math.floor(Math.random() * 100000)
    }

    const newTodo = new Todo();

    fields.forEach((field) => {
        newTodo[field.id] = field.value;
      });
    
    newTodo.id = id;

    localStorage.setItem(id, JSON.stringify(newTodo));
   
}

export {addTodo}