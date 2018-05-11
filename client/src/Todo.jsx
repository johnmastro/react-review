import React from 'react';

const Todo = (props) => {
  return (
    <div>
      <button onClick={(e) => props.deleteTodo(props.index)}>Delete</button>
      {props.todo}
    </div>
  );
};

export default Todo;