import Model from "../ui/Model";

const TaskDetailsModel = ({ isOpen, setIsOpen, task }) => {
  return (
    <Model isOpen={isOpen} setIsOpen={setIsOpen} title="Task Details">
      <div className="bg-secondary/10 rounded-md p-5 mt-5">
        <h1
          className={`text-lg font-semibold mb-3  
        ${task.priority === "high" && "text-red-500"} 
        ${task.priority === "medium" && "text-yellow-500"} 
        ${task.priority === "low" && "text-green-500"}`}
        >
          {task?.title}
        </h1>
        <p className="mb-3">{task?.description}</p>
        <div className="flex justify-end">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </Model>
  );
};

export default TaskDetailsModel;
