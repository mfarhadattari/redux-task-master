import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserTask,
  updateTaskStatus,
} from "../../redux/features/tasks/taskSlice";
import TaskDetailsModel from "./TaskDetailsModel";

const MyTasks = () => {
  const dispatch = useDispatch();

  const { name: userName } = useSelector((state) => state.userSlice.user);
  const { userTask, tasks } = useSelector((state) => state.taskSlice);

  useEffect(() => {
    dispatch(setUserTask(userName));
  }, [userName, dispatch, tasks]);

  const [isOpen, setIsOpen] = useState(false);
  const [openTask, setOpenTask] = useState({});
  const taskDetails = (id) => {
    setOpenTask(tasks.find((task) => task.id === id));
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userTask.map((task) => (
          <div
            key={task.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{task.title}</h1>
            <div className="flex gap-3">
              <button
                className="grid place-content-center"
                title="Details"
                onClick={() => taskDetails(task.id)}
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button
                className="grid place-content-center"
                title="Done"
                onClick={() =>
                  dispatch(
                    updateTaskStatus({ id: task.id, status: "completed" })
                  )
                }
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <TaskDetailsModel isOpen={isOpen} setIsOpen={setIsOpen} task={openTask} />
    </div>
  );
};

export default MyTasks;
