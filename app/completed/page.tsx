"use client";

import Tasks from "../components/Tasks/Tasks";
import { useGlobalState } from "../context/globalProvider";

function page() {
  const { completedTasks } = useGlobalState();
  return (
    <Tasks
      title={`Completed ${completedTasks.length > 1 ? "Tasks" : "Task"}`}
      tasks={completedTasks}
    />
  );
}

export default page;
