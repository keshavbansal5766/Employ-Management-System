import React from "react";
import Input from "./Input";
import { useFormStatus } from "react-dom";

function CustomForm() {
  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <>
      <Input isRequired={true} type="email" placeholder="Enter your email" />
      <Input
        isRequired={true}
        type="password"
        placeholder="Enter your password"
      />
      <button
        disabled={pending}
        className="text-white  border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white"
      >
        {pending ? "Submitting..." : "Login"}
      </button>
    </>
  );
}

export default CustomForm;
