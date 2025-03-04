import React from "react";
import Header from "../other/Header";
import TaskOverview from "../other/TaskOverview";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard({ data }) {
  console.log(data);
  return (
    <div className="p-10 text-white bg-[#1C1C1C] h-screen">
      <Header data={data} />
      <TaskOverview data={data} />
      <TaskList data={data} />
    </div>
  );
}

export default EmployeeDashboard;
