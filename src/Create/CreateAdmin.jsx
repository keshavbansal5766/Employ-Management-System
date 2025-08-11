import React from "react";
import Input from "../components/Input";

function CreateAdmin() {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form
        action=""
        className="flex flex-wrap w-full items-start justify-between"
      >
        {" "}
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Please Enter Name</h3>
          <Input
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="text"
            placeholder="Username"
            name=" taskTitle"
            isRequired={true}
          />
        </div>
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Please Enter Email</h3>
          <Input
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="email"
            placeholder="Email"
            name=" taskTitle"
            isRequired={true}
          />
        </div>
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">
            Please Enter Password
          </h3>
          <Input
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="password"
            placeholder="Password"
            name=" taskTitle"
            isRequired={true}
          />
        </div>
      </form>
    </div>
  );
}

export default CreateAdmin;
