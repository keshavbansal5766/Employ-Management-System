import React from "react";
import Header from "../other/Header";
import TaskOverview from "../other/TaskOverview";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard() {
  return (
    <div className="p-10 text-white bg-[#1C1C1C] h-screen">
      <Header />
      <TaskOverview />
      <TaskList />
    </div>
  );
}

export default EmployeeDashboard;
