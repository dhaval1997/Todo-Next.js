'use client'
import { useCompletedTasks } from "@/store/CompletedTasksContext";

const CompletedTasks = () => {
  const { completedTasks } = useCompletedTasks();

  return (
    <div>
      <h1>Completed Tasks</h1>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasks;
