import React from 'react';
import TextInput from './TextInput';
import TodoList from './TodoList';

class App extends React.Component {

  render() {
    return (
      <div>
        <h2>{'ToDo List'}</h2>
        <TextInput />
        <TodoList />
      </div>
    );
  }

}

export default App;
