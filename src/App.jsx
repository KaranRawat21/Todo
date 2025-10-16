import Header from './components/Header';
import { IoAddSharp } from "react-icons/io5";
import ToDoList from './components/ToDoList';
import { useState } from 'react';

export default function App() {

  const [toDoList, setToDoList] = useState([]);
  const [input, setInput] = useState("");

  // Add ToDo
  const addToDO = () => {
    if (input.trim() === "") return;
    setToDoList([...toDoList, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  // Delete ToDo
  const deleteTodo = (id) => setToDoList(toDoList.filter((todo) => todo.id !== id));

  // Toggle complete
  const toggleComplete = (id) => {
    setToDoList(toDoList.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Edit ToDo
  const editTodo = (id, newText) => {
    setToDoList(toDoList.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className='flex justify-center pt-20 px-3'>
      <div className='w-full max-w-[600px] flex flex-col items-center gap-6 p-2'>
        <Header />

        {/* Input bar */}
        <div className='flex w-full justify-center'>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addToDO()}
            placeholder='Add a task...'
            className='w-full max-w-[600px] border border-purple-300 p-2 rounded-l-xl outline-0 placeholder:text-purple-400' />

          <button
            onClick={addToDO}
            className='w-[50px] rounded-r-xl flex justify-center items-center text-2xl text-white bg-purple-500 cursor-pointer hover:bg-purple-700'>
            <IoAddSharp />
          </button>
        </div>

        {/* ToDo List */}
        <ToDoList
          toDoList={toDoList}
          onDelete={deleteTodo}
          onToggle={toggleComplete}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
}
