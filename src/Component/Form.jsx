import React from 'react';
import { connect,useDispatch,useSelector } from 'react-redux';
import { useState } from 'react'
function Form(props) {
    const dispatch=useDispatch()
    const [toDo, setToDoText] = useState({})
    
    const getValue = (e) => {
        setToDoText({ title: e.target.value, id: Date.now(), completed: false })
    }
    const AddToDo = (e) => {
        e.preventDefault();
        dispatch({ type: 'Add_Todo', todos:toDo })
        
    }
    return <form onSubmit={AddToDo} >
        <input type="text" name="" id="" onChange={getValue} />
        <input type="submit" value="Add" />
    </form>;
}

const mapStateToProps = (state) => {
    return {
        toDo:state.todos,
        count:state.count
    };
};
export default connect(mapStateToProps)(Form)

