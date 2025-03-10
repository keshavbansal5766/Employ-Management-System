import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function TaskOverview({ data }) {
  const [userData, setUserData] = useContext(AuthContext);

  // console.log(data);
  return (
    <>
      {userData.map((dataUser) => {
        return dataUser.firstName === data.firstName ? (
          <div
            key={Math.random()}
            id="taskoverview"
            className="flex mt-10 overflow-x-auto justify-between gap-5 screen "
          >
            <div className="rounded-xl py-6 px-9 w-[45%] bg-red-400">
              <h2 className="text-2xl">{dataUser?.taskCounts.failed}</h2>
              <h3 className="text-xl font-medium ">Failed Task</h3>
            </div>
            <div className="rounded-xl py-6 px-9 w-[45%] bg-blue-400">
              <h2 className="text-2xl">{dataUser?.taskCounts.newTask}</h2>
              <h3 className="text-xl font-medium ">New Task</h3>
            </div>
            <div className="rounded-xl py-6 px-9 w-[45%] bg-green-400">
              <h2 className="text-2xl">{dataUser?.taskCounts.completed}</h2>
              <h3 className="text-xl font-medium ">Completed Task</h3>
            </div>
            <div className="rounded-xl py-6 px-9 w-[45%] bg-yellow-400">
              <h2 className="text-2xl">{dataUser?.taskCounts.active}</h2>
              <h3 className="text-xl font-medium ">Active Task</h3>
            </div>
          </div>
        ) : null;
      })}
    </>
  );
}

export default TaskOverview;
