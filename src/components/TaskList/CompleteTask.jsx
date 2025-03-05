import React from "react";

function CompleteTask() {
  return (
    <div className=" flex-shrink-0  h-full w-[300px] p-5 bg-green-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-2xl-sm px-3 py-1">High</h3>
        <h4 className="text-sm">4 feb 2025</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste delectus
        accusamus dolore facilis, numquam veritatis.
      </p>
      <div className="mt-6">
        <button className="w-full bg-green-600 rounded font-medium py-1 px-2 text-xs">
          Complete
        </button>
      </div>
    </div>
  );
}

export default CompleteTask;
