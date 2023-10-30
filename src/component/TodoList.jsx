import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, handleCheckbox } from '../redux/reducer/actions';

export const TodoList = ({handleEditClick, editFormVisibility}) => {
  const dispatch = useDispatch();

  const todos = useSelector((state)=>state.operationsReducer);
  
  return todos.map((todo)=>(

    <div key={todo.id} className="flex justify-between p-2 border-b-2 border-black bg-cyan-300 my-3 mx-4">
        <div className="flex justify-between">
          <div className="flex justify-center">
              {editFormVisibility===false&&(
                <input type="checkbox" 
                className="scale-[1.3] cursor-pointer"
                checked={todo.completed}
                onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
              )}
              <p 
                className="pl-3 font-serif"
                style={todo.completed===true?{textDecoration:"line-through"}:{textDecoration:'none'}}>
                  {todo.todo}
              </p>
          </div>
        </div>
        <div className="flex justify-center">
              {editFormVisibility===false&&(
                <>
                  <span className="pr-3 cursor-pointer" onClick={()=>handleEditClick(todo)}>✏️</span>
                  <span className="cursor-pointer" onClick={()=>dispatch(deleteTodo(todo.id))}>❌</span>
                </>
              )}
        </div>
    </div>
  ))
}