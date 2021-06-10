import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {

    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <span className="todo-list-item">
      <span
          className="todo-list-item-label"
          style={style}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-m float-right">
        <i className="fas fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-m float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
    );
};

export default TodoListItem;
