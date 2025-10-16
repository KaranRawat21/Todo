import Header from './components/Header';
import { IoAddSharp } from "react-icons/io5";
import ToDoList from './components/ToDoList';
import { useState } from 'react';


export default function App() {

  const [toDoList, setToDoList] = useState([]);
  const [input, setInput] = useState("");

  const addToDO = () => {
    if (input.trim() === "") return;
    setToDoList([...toDoList, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  //handle delete
  const deleteTodo = (id) => setToDoList(toDoList.filter((todo) => todo.id !== id));

  //handle toggleComplete
  const toggleComplete = (id) => {
    setToDoList(toDoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  };





  return (
    <div className=' flex justify-center pt-20 '>
      <div className=' w-full max-w-[600px] flex flex-col items-center gap-6 p-2'>
        <Header />

        {/* //search Bar */}
        <div className=' flex w-full  justify-center '>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Add a task...'
            className=' w-full max-w-[600px]  border-1 border-purple-300 p-2 rounded-l-xl outline-0 placeholder:text-purple-400' />

          <button
            onClick={addToDO}
            className=' w-[50px] rounded-r-xl flex justify-center items-center text-2xl text-white  bg-purple-500 cursor-pointer hover:bg-purple-700'><IoAddSharp /></button>
        </div>

        <ToDoList
          toDoList={toDoList}
          onDelete={deleteTodo}
          onToggle={toggleComplete}
        />
      </div>
    </div>
  )
}
