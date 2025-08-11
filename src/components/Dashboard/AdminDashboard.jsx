import React, { useState } from "react";
import Header from "../other/Header";
import AssignTask from "../AssignTask.jsx/AssignTask";
import CreateAdmin from "../../Create/CreateAdmin";

function AdminDashboard({ changeUser }) {
  return (
    <div className="h-screen p-10 w-full">
      <Header changeUser={changeUser} />
      <AssignTask />
      <CreateAdmin />
    </div>
  );
}

export default AdminDashboard;
