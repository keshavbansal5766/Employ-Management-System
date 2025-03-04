import React from "react";

function TaskOverview({data}) {
  console.log(data);
  return (
    <div id="taskoverview" className="flex mt-10 overflow-x-auto justify-between gap-5 screen ">
      <div className="rounded-xl py-6 px-9 w-[45%] bg-red-400">
        <h2 className="text-2xl">0</h2>
        <h3 className="text-xl font-medium ">New Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-blue-400">
        <h2 className="text-2xl">0</h2>
        <h3 className="text-xl font-medium ">New Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-green-400">
        <h2 className="text-2xl">0</h2>
        <h3 className="text-xl font-medium ">New Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-yellow-400">
        <h2 className="text-2xl">0</h2>
        <h3 className="text-xl font-medium ">New Task</h3>
      </div>
    </div>
  );
}

export default TaskOverview;
