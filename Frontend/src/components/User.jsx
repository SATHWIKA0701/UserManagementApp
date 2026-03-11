import { useLocation } from "react-router";

function User() {
  const { state } = useLocation();
  const user = state?.user;

  if (!user) {
    return (
      <p className="text-center text-red-500 text-lg sm:text-xl mt-10">
        No user data available
      </p>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-10">
      
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-md">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-6 text-center">
          User Details
        </h2>

        <div className="space-y-4 text-sm sm:text-base md:text-lg text-gray-600">

          <p className="border-b pb-2 break-all">
            <span className="font-semibold text-gray-800">Name:</span> {user.name}
          </p>

          <p className="border-b pb-2 break-all">
            <span className="font-semibold text-gray-800">Email:</span> {user.email}
          </p>

          <p className="border-b pb-2">
            <span className="font-semibold text-gray-800">Date of Birth:</span> {user.dateOfBirth}
          </p>

          <p>
            <span className="font-semibold text-gray-800">Mobile:</span> {user.mobileNumber}
          </p>

        </div>

      </div>

    </div>
  );
}

export default User;