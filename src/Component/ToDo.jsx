import React from 'react';
import { connect } from 'react-redux';
import { Remove_Todo } from '../Redux/actions';

function ToDo(props) {

    const {dispatch } = props;
    const RemoveTodo = (id) => {
        dispatch({type : 'Remove_ToDo', id}) ;
    }

    const ToDoItem = props.todos.map((todo, index) => (
        <li key={index}>
          <b>{todo.title}</b>
          <button onClick={() => RemoveTodo(todo.id)}>x</button>
          <br />
          
        </li>
      ));

  return <div>
      <ul>{ToDoItem}</ul>
      <div>{props.count} </div>
  </div>;
}

const mapStateToProps = (state) => {
    return {
        todos:state.todos,
        count:state.count
    };
};
export default connect(mapStateToProps)(ToDo);

