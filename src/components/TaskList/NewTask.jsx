import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function NewTask({ data, dataUser }) {
  // console.log(dataUser);
  const [userData, setUserData] = useContext(AuthContext);
  const handleNewTask = () => {
    setUserData((prev) => {
      return prev.map((user) => {
        return user.firstName === dataUser.firstName
          ? {
              ...user,
              tasks: user.tasks.map((task) =>
                task.taskTitle === data.taskTitle
                  ? { ...task, active: true, newTask: false }
                  : task
              ),
              taskCounts: {
                ...user.taskCounts,
                active: user.taskCounts.active + 1,
              },
            }
          : user;
      });
    });
    // console.log(userData);
  };

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data?.category}
        </h3>
        <h4 className="text-sm">{data?.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data?.taskTitle}</h2>
      <p className="text-sm mt-2">{data?.taskDescription}</p>
      <div className="mt-6">
        <button
          onClick={handleNewTask}
          className="bg-blue-500 rounded font-medium py-1 px-2 text-xs"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
}

export default NewTask;
