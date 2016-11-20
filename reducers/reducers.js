function getId(state) {
  return state.todos.reduce((maxId, todo) => {
      return Math.max(todo.id, maxId)
    }, -1) + 1;
}

export default function reducer(state, actions) {
  switch (actions.type) {
    case 'ADD_TODO':
      Object.assign({}, state, {
        todos: [{
          //add new to do
          text: action.text,
          completed: false,
          id: getId(state)
        }, ...state.todos]
      });
      break;

    default:
      return state;
  }
}