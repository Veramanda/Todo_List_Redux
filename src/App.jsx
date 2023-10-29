import { Form } from "./component/inputToDo";
import { Todos } from "./component/TodoList";
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
        <div className="w-full max-w-[700px] rounded-md bg-slate-100 mt-6">
          <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
            cancelUpdate={cancelUpdate}/>
          <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
        </div>
      </div>
    </div>
  )
}

export default App