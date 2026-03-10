import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function UsersList() {
  let [users, setUsers] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      try {
        let res = await fetch("http://localhost:4000/user-api/users", {
          method: "GET",
        });

        if (res.status === 200) {
          let resObj = await res.json();
          setUsers(resObj.payload);
        } else {
        }
      } catch (err) {
      }
    }

    getUsers();
  }, []);

  const gotoUser = (userObj) => {
    navigate("/user", { state: { user: userObj } });
  };

  return (
    <div className="px-4 py-10 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 text-center mb-10">
          List of Users
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {users?.map((userObj) => (
            <div
              key={userObj.email}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer border border-gray-100"
              onClick={() => gotoUser(userObj)}
            >
              <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 break-all">
                {userObj.name}
              </p>
              <p className="text-sm sm:text-base text-gray-500 break-all">
                {userObj.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UsersList;