import React from "react";
import Form from './Component/Form'
import ToDo from "./Component/ToDo";
import { connect } from 'react-redux';
function App(props) {
  const { toDo } = props;
  return (
    <div>
      <h1>TO do</h1>
      <Form />
      <ToDo/>

    </div>
  )
}


const mapStateToProps = (state) => {
  return {
      toDo:state.todos
  };
};

export default connect(mapStateToProps)(App);

