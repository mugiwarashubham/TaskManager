import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "../taskslice";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

function HomePage() {
  const dispatch = useDispatch();

  const { tasks, loading, error } = useSelector(
    (state) => state.task
  );

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filteredTasks = tasks
    ?.filter((task) => {
      if (filter === "active")
        return !task.completed;

      if (filter === "completed")
        return task.completed;

      return true;
    })
    .filter((task) =>
      task.title
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

  const activeCount =
    tasks?.filter((task) => !task.completed)
      .length || 0;

  const completedCount =
    tasks?.filter((task) => task.completed)
      .length || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="text-center mb-10">

          <h1 className="text-6xl font-extrabold text-indigo-600">
            Task Manager
          </h1>

          <p className="text-gray-500 text-lg mt-3">
            Organize your work and stay productive
          </p>

        </div>

        {/* Task Form */}

        <TaskForm />

        {/* Stats */}

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-white rounded-3xl p-6 shadow-xl border-l-4 border-yellow-500">

            <h3 className="text-gray-500 text-lg">
              Active Tasks
            </h3>

            <p className="text-5xl font-bold text-yellow-500 mt-3">
              {activeCount}
            </p>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl border-l-4 border-green-500">

            <h3 className="text-gray-500 text-lg">
              Completed Tasks
            </h3>

            <p className="text-5xl font-bold text-green-500 mt-3">
              {completedCount}
            </p>

          </div>

        </div>

        {/* Search */}

        <div className="mt-8">

          <input
            type="text"
            placeholder="🔍 Search tasks..."
            className="input input-bordered w-full bg-white shadow-md"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        {/* Filters */}

        <div className="flex flex-wrap gap-3 mt-5">

          <button
            className={`btn ${
              filter === "all"
                ? "btn-primary"
                : "btn-outline"
            }`}
            onClick={() =>
              setFilter("all")
            }
          >
            All
          </button>

          <button
            className={`btn ${
              filter === "active"
                ? "btn-warning"
                : "btn-outline"
            }`}
            onClick={() =>
              setFilter("active")
            }
          >
            Active
          </button>

          <button
            className={`btn ${
              filter === "completed"
                ? "btn-success"
                : "btn-outline"
            }`}
            onClick={() =>
              setFilter("completed")
            }
          >
            Completed
          </button>

        </div>

        {/* Loading */}

        {loading && (
          <div className="flex justify-center mt-10">

            <span className="loading loading-spinner loading-lg text-primary"></span>

          </div>
        )}

        {/* Error */}

        {error && (
          <div className="alert alert-error mt-8">
            <span>{error}</span>
          </div>
        )}

        {/* Task List */}

        <div className="grid gap-6 mt-8">

          {!loading &&
          filteredTasks?.length > 0 ? (
            filteredTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
              />
            ))
          ) : (
            !loading && (
              <div className="bg-white rounded-3xl shadow-xl p-12 text-center">

                <div className="text-7xl">
                  📋
                </div>

                <h2 className="text-3xl font-bold mt-4">
                  No Tasks Found
                </h2>

                <p className="text-gray-500 mt-2">
                  Create your first task to get started.
                </p>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}

export default HomePage;