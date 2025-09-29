import { useState } from "react";

export default function TaskItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleSave = () => {
    editTask(task.id, newTitle, newDescription);
    setIsEditing(false);
  };

  return (
    <li
      className={`p-4 rounded-lg shadow border transition ${
        task.completed ? "bg-purple-200/70 line-through" : "bg-white/90"
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-purple-700">{task.author}</span>
        <div className="flex gap-2">
          <button
            onClick={() => toggleTask(task.id)}
            className={`px-3 py-1 rounded text-white ${
              task.completed
                ? "bg-pink-500 hover:bg-pink-600"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {task.completed ? "Desmarcar" : "Completar"}
          </button>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-3 py-1 rounded bg-yellow-500 hover:bg-yellow-600 text-white"
          >
            ✏️
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            className="px-3 py-1 rounded bg-gray-500 hover:bg-gray-600 text-white"
          >
            🗑
          </button>
        </div>
      </div>

      {isEditing ? (
        <div className="flex flex-col gap-2">
          <input
            className="border rounded px-2 py-1"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            className="border rounded px-2 py-1 resize-none"
            rows="2"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            >
              💾 Guardar
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
            >
              ❌ Cancelar
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="font-semibold text-lg text-purple-800">{task.title}</h3>
          {task.description && (
            <p className="text-gray-700 mt-1">{task.description}</p>
          )}
        </>
      )}
    </li>
  );
}
