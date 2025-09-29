import { useState } from "react";
import { useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import EmptyState from "./components/EmptyState";
import Loading from "./components/Loading";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const { user, logout } = useAuth();
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // si no hay usuario -> mostrar login
  if (!user) return <Login />;

  const addTask = (title, description) => {
    setLoading(true);
    setTimeout(() => {
      const newTask = {
        id: Date.now(),
        author: user.username, // 👈 aquí se guarda el usuario logueado
        title,
        description,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setLoading(false);
    }, 1000);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filtered = tasks.filter(
    (t) =>
      t.author.toLowerCase().includes(search.toLowerCase()) ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 text-gray-100 font-sans p-10">
      <div className="w-full max-w-3xl mx-auto bg-purple-950/80 backdrop-blur-md rounded-xl shadow-xl p-6 border border-purple-700 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-purple-300 flex items-center gap-2">
            🧙‍♀ Team To-Do
          </h1>
          <button
            onClick={logout}
            className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-lg shadow"
          >
            🔙 Salir
          </button>
        </div>

        <SearchBar search={search} setSearch={setSearch} />
        <TaskForm addTask={addTask} />

        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <TaskList
            tasks={filtered}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        )}
      </div>
    </div>
  );
}
