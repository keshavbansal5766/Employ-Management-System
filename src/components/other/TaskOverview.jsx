import React from "react";

function TaskOverview({ data }) {
  console.log(data);
  return (
    <div
      id="taskoverview"
      className="flex mt-10 overflow-x-auto justify-between gap-5 screen "
    >
      <div className="rounded-xl py-6 px-9 w-[45%] bg-red-400">
        <h2 className="text-2xl">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium ">Failed Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-blue-400">
        <h2 className="text-2xl">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium ">New Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-green-400">
        <h2 className="text-2xl">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium ">Completed Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-yellow-400">
        <h2 className="text-2xl">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium ">Active Task</h3>
      </div>
    </div>
  );
}

export default TaskOverview;
