import ToDoItem from "./ToDoItem";

export default function ToDoList({ toDoList }) {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className=" w-full flex  flex-col gap-2">
        {
          toDoList.length < 1
            ? <p className=" text-gray-500">No task added yet!</p>
            : toDoList.map(task => (
              <ToDoItem />
            ))

        }
      </div>
    </div>
  )
}
