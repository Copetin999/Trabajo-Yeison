export default function TaskItem({ task, toggleTask, deleteTask }) {
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
            onClick={() => deleteTask(task.id)}
            className="px-3 py-1 rounded bg-gray-500 hover:bg-gray-600 text-white"
          >
            🗑
          </button>
        </div>
      </div>
      <h3 className="font-semibold text-lg text-purple-800">{task.title}</h3>
      {task.description && (
        <p className="text-gray-700 mt-1">{task.description}</p>
      )}
</li>
);
}