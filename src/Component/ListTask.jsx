import React, { useContext } from "react";
import { Task } from "../contextAPI/ContextAPI";
const ListTask = () => {
  const { taskDetails, setTaskDetails } = useContext(Task);
  console.log("List of Task ", taskDetails);
  return (
    <>
      {taskDetails.map((item, index) => {
        return (
          <div key={index} className="taskList">
            <p> Task Name {item.taskName}</p>
            <p>priority of Task :{item.priority}</p>
            <p>dueDate :{item.dueDate}</p>
            <p>status:{item.status}</p>
          </div>
        );
      })}
    </>
  );
};
export default ListTask;
