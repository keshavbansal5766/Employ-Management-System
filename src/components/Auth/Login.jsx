import React from "react";
import CustomForm from "../CustomForm";

const Login = () => {
  const formHandleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("form submitted");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          action={formHandleSubmit}
          className="flex flex-col items-center justify-center gap-4"
        >
          <CustomForm />
        </form>
      </div>
    </div>
  );
};

export default Login;
