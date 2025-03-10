import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
function AcceptTask({ data, dataUser }) {
  const [userData, setUserData] = useContext(AuthContext);

  const handleComplete = () => {
    setUserData((prev) => {
      return prev.map((user) => {
        return user.firstName === dataUser.firstName
          ? {
              ...user,
              tasks: user.tasks.map((task) =>
                task.taskTitle === data.taskTitle
                  ? { ...task, active: false, completed: true }
                  : task
              ),
              taskCounts: {
                ...user.taskCounts,
                completed: user.taskCounts.completed + 1,
                active: user.taskCounts.active - 1,
                newTask: user.taskCounts.newTask - 1,
              },
            }
          : user;
      });
    });
  };

  const handleFailed = () => {
    setUserData((prev) => {
      return prev.map((user) => {
        return user.firstName === dataUser.firstName
          ? {
              ...user,
              tasks: user.tasks.map((task) =>
                task.taskTitle === data.taskTitle
                  ? { ...task, active: false, failed: true }
                  : task
              ),
              taskCounts: {
                ...user.taskCounts,
                failed: user.taskCounts.failed + 1,
                active: user.taskCounts.active - 1,
              },
            }
          : user;
      });
    });
  };

  return (
    <div className=" flex-shrink-0  h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-2xl-sm px-3 py-1">{data?.category}</h3>
        <h4 className="text-sm">{data?.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data?.taskTitle}</h2>
      <p className="text-sm mt-2">{data?.taskDescription}</p>
      <div className="flex justify-between mt-6 ">
        <button
          onClick={handleComplete}
          className="bg-green-500 rounded font-medium py-1 px-2 text-xs"
        >
          Mark as Completed
        </button>
        <button
          onClick={handleFailed}
          className="bg-red-500 rounded font-medium py-1 px-2 text-xs"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
}

export default AcceptTask;
