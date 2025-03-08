import React, { use, useActionState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Input from "../Input";

function CreateTask() {
  const [userData, setUserData] = useContext(AuthContext);
  const handleSubmit = async (previousData, formData) => {
    console.log("New task is creating...");

    await new Promise((res) => setTimeout(res, 3000));
    let taskTitle = formData.get(" taskTitle");
    let taskDate = formData.get("taskDate");
    let assignTo = formData.get("assignTo");
    let category = formData.get("category");
    let taskDescription = formData.get("taskDescription");
    let obj = {
      taskTitle,
      taskDate,
      category,
      taskDescription,
      active: false,
      completed: false,
      failed: false,
      newTask: true,
    };

    setUserData((prev) =>
      prev.map((element) =>
        element.firstName === assignTo
          ? {
              ...element,
              tasks: [...element.tasks, obj],
              taskCounts: {
                ...element.taskCounts,
                newTask: (element.taskCounts.newTask =
                  element.taskCounts.newTask + 1),
              },
            }
          : element
      )
    );
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined);

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form
        action={action}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <Input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
              name=" taskTitle"
              isRequired={true}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <Input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
              name="taskDate"
              isRequired={true}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <select
              id="select"
              name="assignTo"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            >
              <option value="">Select Employee</option>
              {userData &&
                userData?.map((data) => (
                  <option key={Math.random()} value={data.firstName}>
                    {data.firstName}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <Input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc"
              name="category"
              isRequired={true}
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name="taskDescription"
            id=""
            required
          ></textarea>
          <button
            disabled={pending}
            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"
          >
            {pending ? "Creating..." : "Create Task"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
