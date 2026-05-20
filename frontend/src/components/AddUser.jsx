import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onUserCreate = async (newUser) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://atpassignments.onrender.com/user-api/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        },
      );

      if (res.status === 201) {
        // Navigate to UsersList and trigger refresh
        navigate("/users-list", { state: { refresh: true } });
      } else {
        const errMsg = await res.text();
        throw new Error(errMsg || "Error adding user");
      }
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return <p className="text-center text-orange-400 text-3xl">Loading...</p>;
  if (error)
    return <p className="text-center text-red-400 text-3xl">{error.message}</p>;

  return (
    <div className="text-center">
      <h1 className="text-5xl text-gray-600">Add New User</h1>
      <form
        onSubmit={handleSubmit(onUserCreate)}
        className="max-w-96 mx-auto mt-10"
      >
        <input
          type="text"
          {...register("name", { required: true })}
          className="mb-5 border w-full text-2xl p-2"
          placeholder="Name"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          className="mb-5 border w-full text-2xl p-2"
          placeholder="Email"
        />
        <input
          type="date"
          {...register("dateOfBirth", { required: true })}
          className="mb-5 border w-full text-2xl p-2"
          placeholder="Date of Birth"
        />
        <input
          type="number"
          {...register("mobileNumber", { required: true })}
          className="mb-5 border w-full text-2xl p-2"
          placeholder="Mobile Number"
        />
        <button
          type="submit"
          className="text-2xl bg-lime-400 text-white px-8 py-4 rounded"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
