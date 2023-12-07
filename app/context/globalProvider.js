"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import themes from "./theme";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const { user } = useUser();

  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[selectedTheme];

  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  const allTask = async () => {
    setIsLoading(true);

    try {
      const res = await axios.get("/api/tasks");
      setTasks(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const deleteTask = async (id) => {
    setIsLoading(true);

    try {
      const res = await axios.delete(`api/tasks/${id}`);
      toast.success("Task Deleted");
      setIsLoading(false);
      allTask();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const completedTasks = tasks.filter((task) => task.isCompleted === true);
  const importantTasks = tasks.filter((task) => task.isImportant === true);
  const incompleteTasks = tasks.filter((task) => task.isCompleted === false);

  useEffect(() => {
    if (user) allTask();
  }, [user]);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        tasks,
        deleteTask,
        isLoading,
        completedTasks,
        importantTasks,
        incompleteTasks,
      }}
    >
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
