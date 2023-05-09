import React, { useContext } from "react";
import { Task } from "../contextAPI/ContextAPI";
import Input from "../commom/Input";

export default function Form() {
  const { taskDetails, setTaskDetails } = useContext(Task);

  const handleAddTaskDetails = (e) => {
    const { name, value } = e.target;

    setTaskDetails((prevState) => {
      return prevState.map((item) => {
        const current = { ...item };
        console.log("Current State", current);

        if (current.taskName === name) {
          current.taskName = value;
        }
        return current;
      });
    });
  };

  const handleAddTask = () => {
    alert("Add");
  };
  return (
    <div>
      <Input
        name={taskDetails.taskName}
        type={"text"}
        placeholder={"Task Name"}
        onChange={handleAddTaskDetails}
      />

      <select name="priority" onChange={handleAddTaskDetails}>
        <option value="High">High</option>
        <option value="Low">Low</option>
      </select>

      <Input type="date" name="dueDate" />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}
