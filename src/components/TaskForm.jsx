import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={submit}
      className="flex flex-col gap-3 mb-6 bg-purple-100/70 p-4 rounded-lg shadow"
    >
      <input
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        placeholder="Título de la tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
        placeholder="Breve descripción..."
        rows="2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 self-end">
        ✨ Agregar tarea
      </button>
    </form>
  );
}
