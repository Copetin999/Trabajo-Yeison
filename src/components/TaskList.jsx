import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="space-y-3">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
</ul>
);
}