import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";
import Model from "../ui/Model";

const AddTaskModel = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTask(data));
    reset();
    setIsOpen(false);
  };

  const onCancel = () => {
    setIsOpen(false);
    reset();
  };

  return (
    <Model isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div className="mt-3 flex flex-col gap-2">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            className="w-full  rounded-md"
            required
            {...register("title")}
          />
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <label>Description</label>
          <textarea
            placeholder="Description"
            className="w-full rounded-md"
            required
            {...register("description")}
          />
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <label>Deadline</label>
          <input
            type="date"
            placeholder="Title"
            className="w-full rounded-md"
            required
            {...register("date")}
          />
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <label>Assign to</label>
          <select
            className="w-full  rounded-md"
            required
            {...register("assignTo")}
          >
            <option>Farhad</option>
            <option>Rakib</option>
            <option>Sakib</option>
          </select>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <label>Priority</label>
          <select
            className="w-full  rounded-md"
            required
            {...register("priority")}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <div className="mt-3 flex gap-3 justify-end">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            Save
          </button>
        </div>
      </form>
    </Model>
  );
};

export default AddTaskModel;
