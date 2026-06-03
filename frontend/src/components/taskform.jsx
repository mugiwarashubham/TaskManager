import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../taskslice";

function TaskForm() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) return;

    dispatch(createTask(formData));

    setFormData({
      title: "",
      description: "",
      dueDate: "",
    });
  };

  return (
   return (
  <form
    onSubmit={handleSubmit}
    className="bg-white rounded-3xl shadow-xl p-8 mb-8"
  >
    <h2 className="text-2xl font-bold text-indigo-600 mb-6">
      Create New Task
    </h2>

    <div className="grid gap-4">

      <input
        type="text"
        placeholder="Enter task title"
        className="input input-bordered w-full"
        value={formData.title}
        onChange={(e) =>
          setFormData({
            ...formData,
            title: e.target.value,
          })
        }
      />

      <textarea
        placeholder="Enter task description"
        className="textarea textarea-bordered h-28"
        value={formData.description}
        onChange={(e) =>
          setFormData({
            ...formData,
            description: e.target.value,
          })
        }
      />

      <input
        type="date"
        className="input input-bordered"
        value={formData.dueDate}
        onChange={(e) =>
          setFormData({
            ...formData,
            dueDate: e.target.value,
          })
        }
      />

      <button
        className="btn btn-primary btn-lg"
        type="submit"
      >
        ➕ Add Task
      </button>

    </div>
  </form>
);
}

export default TaskForm;