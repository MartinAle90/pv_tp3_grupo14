import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </ul>
  );
}
