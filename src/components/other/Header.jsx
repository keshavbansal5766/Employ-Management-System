import React from "react";

function Header({ data, changeUser }) {
  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">
          {!data ? "Admin" : data?.firstName} 👋
        </span>
      </h1>
      <button
        onClick={logOut}
        className="bg-red-600 text-lg font-medium px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;
