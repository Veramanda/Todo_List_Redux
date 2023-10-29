import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, handleEditSubmit } from "../redux/reducer/actions";

export const Form = ({editFormVisibility, editTodo, cancelUpdate}) => {

  const dispatch = useDispatch();

  // normal add todo form
  const [todoValue, setTodoValue]=useState('');

  // state update form
  const [editValue, setEditValue]=useState('');

  // useEffect update form
  useEffect(()=>{
    setEditValue(editTodo.todo);
  },[editTodo])

  // normal add todo submit
  const handleSubmit=(e)=>{
      e.preventDefault();
      let date = new Date();
      let time = date.getTime();
      let todoObj={
          id: time,
          todo: todoValue,
          completed: false
      }
      setTodoValue('');
      dispatch(addTodo(todoObj))
  }

  // update form submit
  const editSubmit = (e) =>{
    e.preventDefault();
    let editedObj={
      id: editTodo.id,
      todo: editValue,
      completed: false
    }
    dispatch(handleEditSubmit(editedObj))
  }

  return (
    <>
      {editFormVisibility===false?(
        <form className="grid md:grid-cols-3 gap-2 md:gap-4 pt-4 pb-2 px-[6px] form-group custom-form" onSubmit={handleSubmit}>
          <div className="md:col-span-3 flex items-center w-full px-5 py-2.5 gap-x-3">
              <input type="text" className="form-control" required
              value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
              <button 
                type="submit" 
                className="bg-cyan-500 p-2 font-semibold rounded-md text-white">ADD</button>
          </div>
        </form>
      ):(
        <div>
          <form className="grid md:grid-cols-3 gap-3 md:gap-4 pt-4 pb-1 px-[6px]" onSubmit={editSubmit}>
            <div className="md:col-span-3 flex items-center w-full px-5 py-2.5 gap-x-3">
                <input type="text" className="form-control" required
                value={editValue||""} onChange={(e)=>setEditValue(e.target.value)}/>
                <button 
                  type="submit" 
                  className="bg-cyan-500 p-2 font-semibold rounded-md text-white">UPDATE</button>
            </div>
          </form>
          <div className="flex justify-center pb-3">
            <button type="button" className="bg-cyan-500 p-2 font-semibold rounded-md text-white"
            onClick={cancelUpdate}>BACK</button>
          </div>
        </div>
      )}
    </>
  )
}