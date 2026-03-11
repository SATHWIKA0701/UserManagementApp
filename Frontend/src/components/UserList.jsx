import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function UsersList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch("http://localhost:4000/user-api/users", {
          method: "GET",
        });

        if (res.status === 200) {
          const resObj = await res.json();
          setUsers(resObj.payload);
        }
      } catch (err) {
        console.log(err);
      }
    }

    getUsers();
  }, []);

  const gotoUser = (userObj) => {
    navigate("/user", { state: { user: userObj } });
  };

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 sm:py-10 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-8 sm:mb-10">
          List of Users
        </h1>

        {users.length === 0 ? (
          <p className="text-center text-base sm:text-lg text-gray-500 mt-10">
            No users available
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {users.map((userObj) => (
              <div
                key={userObj.email}
                onClick={() => gotoUser(userObj)}
                className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer border border-gray-100"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg sm:text-xl font-bold">
                    {userObj.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <p className="text-lg sm:text-xl font-semibold text-gray-800 break-all">
                      {userObj.name}
                    </p>
                    <p className="text-sm sm:text-base text-gray-500 break-all mt-1">
                      {userObj.email}
                    </p>
                  </div>

                  <button className="mt-2 w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UsersList;