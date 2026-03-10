import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  let navigate = useNavigate();

  //form submit
  const onUserCreate = async (newUser) => {
    setLoading(true);
    try {
      let res = await fetch("http://localhost:4000/user-api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (res.status === 201) {
        navigate("/users-list");
      } else {
        console.log(res);
        throw new Error("error occurred");
      }
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <p className="text-center text-orange-500 text-3xl mt-20 animate-pulse">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 text-3xl mt-20">
        {error.message}
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center px-4">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-gray-700 mb-8">
          Add New User
        </h1>

        {/* Create user form */}
        <form onSubmit={handleSubmit(onUserCreate)} className="space-y-5">

          <input
            type="text"
            {...register("name")}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Name"
          />

          <input
            type="email"
            {...register("email")}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Email"
          />

          <input
            type="date"
            {...register("dateOfBirth")}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <input
            type="number"
            {...register("mobileNumber")}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Mobile number"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Add User
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddUser;