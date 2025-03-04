import React, { useActionState } from "react";
import Input from "../Input";

const Login = () => {
  const handleSubmit = async (previousData, formData) => {
    await new Promise((res) => setTimeout(res, 3000));
    let name = formData.get("email");
    let password = formData.get("password");
    return { name, password };
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined);
  

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          action={action}
          className="flex flex-col items-center justify-center gap-4"
        >
          <Input
            isRequired={true}
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <Input
            isRequired={true}
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          <button
            disabled={pending}
            className="text-white  border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white"
          >
            {pending ? "Submitting" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
