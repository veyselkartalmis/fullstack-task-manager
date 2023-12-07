"use client";

import Tasks from "../components/Tasks/Tasks";
import { useGlobalState } from "../context/globalProvider";

function page() {
  const { importantTasks } = useGlobalState();
  return (
    <Tasks
      title={`Important ${importantTasks.length > 1 ? "Tasks" : "Task"}`}
      tasks={importantTasks}
    />
  );
}

export default page;
