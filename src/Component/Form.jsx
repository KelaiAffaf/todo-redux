import React from 'react';
import { connect,useDispatch,useSelector } from 'react-redux';
import { useState } from 'react'
function Form(props) {

    const dispatch=useDispatch()
    
    const [toDo, setToDoText] = useState({title:""})
    
    
    const getValue = (e) => {
        setToDoText({ title: e.target.value, id:Math.floor(Math.random()*100) , completed: false })
    
    }
    const AddToDo = () => {
        dispatch({ type: 'Add_Todo', todos:toDo })
        setToDoText({ title:""})
        
    }
    return <div>
        <input type="text" name="" id=""   value ={toDo.title} onChange={getValue} />
        <button type="submit" value="Add" onClick={()=>{toDo.title.trim().length!=0?AddToDo():alert("Add to do please")}} >Add </button>
    </div>;
}

const mapStateToProps = (state) => {
    return {
        toDo:state.todos,
        count:state.count
    };
};
export default connect(mapStateToProps)(Form)

