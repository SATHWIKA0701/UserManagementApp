import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="w-full bg-blue-100 shadow-md border-b border-blue-200 px-4 sm:px-6 md:px-10 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <img
          className="rounded-full w-16 h-16 sm:w-20 sm:h-20 object-cover border-4 border-white shadow-lg hover:scale-105 transition duration-300"
          src="https://tse1.mm.bing.net/th/id/OIP.YS_9wm4vNQMwa8JPVlFsrQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="logo"
        />

        <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-base sm:text-lg md:text-xl font-semibold">
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl transition duration-200 ${
                  isActive
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-200 hover:text-blue-700"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/add-user"
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl transition duration-200 ${
                  isActive
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-200 hover:text-blue-700"
                }`
              }
            >
              AddUser
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/users-list"
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl transition duration-200 ${
                  isActive
                   ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-200 hover:text-blue-700"
                }`
              }
            >
              UsersList
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;