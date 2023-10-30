import { Form } from "./component/inputToDo";
import { TodoList } from "./component/TodoList";
import { useState } from "react";

function App() {
  //update state
  const [editFormVisibility, setEditFormVisibility]=useState(false);

  // edit state
  const [editTodo, setEditTodo]=useState('');

  // function click edit icon
  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  // back button click
  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }

  return (
    <div className="justify-center text-center m-4">
      <h1 className="text-[32px] font-bold ">MY TODO LIST</h1>
      <div className="flex justify-center">
        <div className="w-full max-w-[700px] rounded-md bg-slate-200 mt-6">
          <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
            cancelUpdate={cancelUpdate}/>
          <div>
            <button className="px-2 py-[4px] m-2 bg-cyan-500 text-white rounded-md font-semibold" >
              All
            </button>
            <button className="px-2 py-[4px] m-2 bg-cyan-500 text-white rounded-md font-semibold">
              Active
            </button>
            <button className="px-2 py-[4px] m-2 bg-cyan-500 text-white rounded-md font-semibold" >
              Completed
            </button>
          </div>
          <TodoList handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
        </div>
      </div>
    </div>
  )
}

export default App