import Header from './components/Header';
import { IoAddSharp } from "react-icons/io5";
import ToDoList from './components/ToDoList';
import { useState } from 'react';


export default function App() {

  const [toDoList, setToDoList] = useState([1, 2]);

  return (
    <div className=' flex justify-center pt-20 '>
      <div className=' w-full max-w-[600px] flex flex-col items-center gap-6 p-2'>
        <Header />

        {/* //search Bar */}
        <div className=' flex w-full  justify-center '>
          <input
            type='text'
            placeholder='Add a task...'
            className=' w-full max-w-[600px]  border-1 border-purple-300 p-2 rounded-l-xl outline-0 placeholder:text-purple-400' />
          <button className=' w-[50px] rounded-r-xl flex justify-center items-center text-2xl text-white  bg-purple-500 cursor-pointer hover:bg-purple-700'><IoAddSharp /></button>
        </div>

        <ToDoList
          toDoList={toDoList} />
      </div>
    </div>
  )
}
