/**
 * This file is called Action Creator (creates actions)
 *
 * Actions are objects as :
 * {
 *    type : 'ADD_TODO'     //the only thing needed is type
 *    text: 'this is our first to do'
 * }
 */

export default actions = {
  addTodo(text) {
    return {
      type: 'ADD_TODO',
      text: text
    }
  }
};


