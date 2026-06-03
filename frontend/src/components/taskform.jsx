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
    <form
      onSubmit={handleSubmit}
      className="card bg-base-100 shadow-md p-6 mb-6"
    >
      <input
        type="text"
        placeholder="Task Title"
        className="input input-bordered mb-3"
        value={formData.title}
        onChange={(e) =>
          setFormData({
            ...formData,
            title: e.target.value,
          })
        }
      />

      <textarea
        placeholder="Description"
        className="textarea textarea-bordered mb-3"
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
        className="input input-bordered mb-3"
        value={formData.dueDate}
        onChange={(e) =>
          setFormData({
            ...formData,
            dueDate: e.target.value,
          })
        }
      />

      <button
        className="btn btn-primary"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;