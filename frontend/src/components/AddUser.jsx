import { useState } from "react";

function AddUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    mobileNumber: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:4000/user-api/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    alert("User Added Successfully");
  };

  return (
    <div className="flex justify-center mt-20">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-10 shadow-xl rounded-xl w-[350px]"
      >
        <h1 className="text-2xl text-center text-lime-600">Add User</h1>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border p-2"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="date"
          name="dateOfBirth"
          onChange={handleChange}
          className="border p-2"
        />

        <input
          name="mobileNumber"
          placeholder="Mobile Number"
          onChange={handleChange}
          className="border p-2"
        />

        <button className="bg-lime-500 text-white p-2 rounded">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;