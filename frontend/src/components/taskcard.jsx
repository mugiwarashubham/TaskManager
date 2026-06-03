import { useDispatch } from "react-redux";

import {
  updateTask,
  deleteTask,
  fetchTasks,
} from "../taskslice";

function TaskCard({ task }) {
  const dispatch = useDispatch();

  const handleToggle = async () => {
    await dispatch(
      updateTask({
        id: task._id,
        taskData: {
          completed: !task.completed,
        },
      })
    );

    dispatch(fetchTasks());
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    await dispatch(deleteTask(task._id));

    dispatch(fetchTasks());
  };

  const handleEdit = async () => {
    const newTitle = prompt(
      "Enter Task Title",
      task.title
    );

    if (!newTitle) return;

    const newDescription = prompt(
      "Enter Description",
      task.description || ""
    );

    const newDueDate = prompt(
      "Enter Due Date (YYYY-MM-DD)",
      task.dueDate
        ? task.dueDate.split("T")[0]
        : ""
    );

    await dispatch(
      updateTask({
        id: task._id,
        taskData: {
          title: newTitle,
          description: newDescription,
          dueDate: newDueDate,
        },
      })
    );

    dispatch(fetchTasks());
  };

  const isOverdue =
    task.dueDate &&
    !task.completed &&
    new Date(task.dueDate) < new Date();

  return (
    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">

      <div className="p-6">

        {/* Header */}

        <div className="flex justify-between items-start gap-4">

          <div>

            <h2 className="text-2xl font-bold text-slate-800">
              {task.title}
            </h2>

            <p className="text-gray-500 mt-2">
              {task.description ||
                "No Description"}
            </p>

          </div>

          <div
            className={`badge badge-lg ${
              task.completed
                ? "badge-success"
                : "badge-warning"
            }`}
          >
            {task.completed
              ? "Completed"
              : "Active"}
          </div>

        </div>

        {/* Due Date */}

        <div className="flex justify-between items-center mt-6">

          <div className="text-gray-600 font-medium">

            {task.dueDate ? (
              <>
                📅 Due:{" "}
                {new Date(
                  task.dueDate
                ).toLocaleDateString()}
              </>
            ) : (
              <>📅 No Due Date</>
            )}

          </div>

          {isOverdue && (
            <div className="badge badge-error badge-lg">
              ⚠ Overdue
            </div>
          )}

        </div>

        {/* Action Buttons */}

        <div className="flex flex-wrap justify-end gap-3 mt-8">

          <button
            className={`btn ${
              task.completed
                ? "btn-warning"
                : "btn-success"
            }`}
            onClick={handleToggle}
          >
            {task.completed
              ? "↩ Mark Active"
              : "✓ Complete"}
          </button>

          <button
            className="btn btn-info"
            onClick={handleEdit}
          >
            ✏ Edit
          </button>

          <button
            className="btn btn-error"
            onClick={handleDelete}
          >
            🗑 Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default TaskCard;