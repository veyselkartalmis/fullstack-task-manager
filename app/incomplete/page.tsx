"use client";

import Tasks from "../components/Tasks/Tasks";
import { useGlobalState } from "../context/globalProvider";

function page() {
  const { incompleteTasks } = useGlobalState();

  return (
    <Tasks
      title={`Incomplete ${incompleteTasks.length > 1 ? "Tasks" : "Task"}`}
      tasks={incompleteTasks}
    />
  );
}

export default page;
