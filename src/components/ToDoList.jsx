import ToDoItem from "./ToDoItem";

export default function ToDoList({ toDoList, onDelete }) {
  return (
    <div className="w-full ">
      <div className=" w-full flex  flex-col gap-2 items-center">
        {
          toDoList.length < 1
            ? <p className=" text-gray-500">No task added yet!</p>
            : toDoList.map(task => (
              <ToDoItem
                key={task.id}
                task={task}
                onDelete={onDelete} />
            ))

        }
      </div>
    </div>
  )
}
