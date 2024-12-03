
function getTodos() {
  const todos = { ...localStorage }

  const parsedTodos = []

  for (const [key, value] of Object.entries(todos)) {
    parsedTodos.push(JSON.parse(value));
  }

  const getParsedTodos = () => parsedTodos;

  const getOneTodo = function (key) {
    return JSON.parse(todos[key])
  } 

  return { getParsedTodos, getOneTodo }
}


export { getTodos }