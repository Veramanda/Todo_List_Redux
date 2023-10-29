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
        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-4 gap-2 sm:gap-4 py-4 px-[6px] m-3">
            <div className="relative w-full sm:col-span-3 gap-x-3">
                <input 
                  type="text" 
                  className="sm:col-span-3 flex items-center w-full font-serif py-2.5 px-4 rounded-[8px] border-[2px] border-solid border-[#D1D9E2] outline-cyan-500 bg-white overflow-hidden gap-x-2"
                  required
                  value={todoValue} 
                  onChange={(e)=>setTodoValue(e.target.value)}/>
            </div>
            <button 
              type="submit" 
              className="bg-cyan-500 font-semibold rounded-md text-white relative w-full py-2.5">ADD</button>
          </div>
        </form>
      ):(
        <div>
          <form onSubmit={editSubmit}>
            <div className="grid sm:grid-cols-4 gap-2 sm:gap-4 py-4 px-[6px] m-3">
              <div className="relative w-full sm:col-span-3 gap-x-3">
                <input 
                  type="text" 
                  className="sm:col-span-3 flex items-center w-full font-serif py-2.5 px-4 rounded-[8px] border-[2px] border-solid border-[#D1D9E2] outline-cyan-500 bg-white overflow-hidden gap-x-2"
                  required
                  value={editValue||""} onChange={(e)=>setEditValue(e.target.value)}/>
              </div>
              <button 
                type="submit" 
                className="bg-cyan-500 font-semibold rounded-md text-white relative w-full py-2.5">UPDATE</button>
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