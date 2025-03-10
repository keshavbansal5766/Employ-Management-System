import React, { useContext, useId, useState } from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import { AuthContext } from "../../context/AuthProvider";

function TaskList({ data }) {
  const [userData, setUserData] = useContext(AuthContext);
  const id = useId();

  return (
    <div
      id="tasklist"
      className="mt-10 flex overflow-x-auto items-center justify-start flex-nowrap gap-10 h-[55%] py-5 w-full"
    >
      {data &&
        userData.map((dataUser) => {
          return dataUser.firstName === data.firstName
            ? dataUser?.tasks.map((task) => {
                if (task.active) {
                  return (
                    <AcceptTask
                      key={id + Math.random()}
                      dataUser={data}
                      data={task}
                    />
                  );
                }
                if (task.newTask) {
                  return (
                    <NewTask
                      key={id + Math.random()}
                      dataUser={data}
                      data={task}
                    />
                  );
                }
                if (task.completed) {
                  return (
                    <CompleteTask
                      key={id + Math.random()}
                      dataUser={data}
                      data={task}
                    />
                  );
                }
                if (task.failed) {
                  return <FailedTask key={id + Math.random()} data={task} />;
                }
              })
            : null;
        })}
    </div>
  );
}

export default TaskList;
