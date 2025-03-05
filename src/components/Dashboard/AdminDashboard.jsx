import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

function AdminDashboard({ changeUser }) {
  return (
    <div className="h-screen p-10 w-full">
      <Header changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;
