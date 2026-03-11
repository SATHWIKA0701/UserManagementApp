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
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user-api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (res.status === 201) {
        navigate("/users-list");
      } else {
        throw new Error("Error occurred while adding user");
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <p className="text-center text-orange-500 text-xl sm:text-2xl md:text-3xl mt-16 sm:mt-20 animate-pulse">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 text-lg sm:text-2xl md:text-3xl mt-16 sm:mt-20 px-4">
        {error.message}
      </p>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-10">
      <div className="bg-white shadow-xl rounded-2xl p-5 sm:p-6 md:p-8 w-full max-w-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-700 mb-6 sm:mb-8">
          Add New User
        </h1>

        <form onSubmit={handleSubmit(onUserCreate)} className="space-y-4 sm:space-y-5">
          <input
            type="text"
            {...register("name")}
            className="w-full p-3 text-sm sm:text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Name"
          />

          <input
            type="email"
            {...register("email")}
            className="w-full p-3 text-sm sm:text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Email"
          />

          <input
            type="date"
            {...register("dateOfBirth")}
            className="w-full p-3 text-sm sm:text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <input
            type="number"
            {...register("mobileNumber")}
            className="w-full p-3 text-sm sm:text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Mobile number"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base md:text-lg font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;