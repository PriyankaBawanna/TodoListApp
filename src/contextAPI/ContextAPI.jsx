import React, { createContext, useState } from "react";
import Form from "../Component/Form";
import ListTask from "../Component/ListTask";
import Input from "../commom/Input";
export const Task = createContext();
export default function ContextAPI() {
  const [taskDetails, setTaskDetails] = useState([
    {
      taskName: "ABC ",
      priority: "LOW ",
      dueDate: "22-05-2023",
      status: "InCompleted",
    },
  ]);
  const [taskName, setTaskName] = useState("");

  const handleAddTaskDetails = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <>
      <Task.Provider value={{ taskDetails, setTaskDetails, taskName }}>
        <Form />
        <ListTask />
      </Task.Provider>
    </>
  );
}
