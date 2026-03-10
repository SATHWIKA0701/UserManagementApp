import { useLocation } from "react-router";

function User() {
  let { state } = useLocation();

  console.log(state.user);

  return (
    <div className="flex items-center justify-center px-4">
      
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          User Details
        </h2>

        <div className="space-y-4 text-lg text-gray-600">

          <p className="border-b pb-2">
            <span className="font-semibold text-gray-800">Name:</span> {state?.user?.name}
          </p>

          <p className="border-b pb-2">
            <span className="font-semibold text-gray-800">Email:</span> {state?.user?.email}
          </p>

          <p className="border-b pb-2">
            <span className="font-semibold text-gray-800">Date of Birth:</span> {state?.user?.dateOfBirth}
          </p>

          <p>
            <span className="font-semibold text-gray-800">Mobile:</span> {state?.user?.mobileNumber}
          </p>

        </div>

      </div>

    </div>
  );
}

export default User;