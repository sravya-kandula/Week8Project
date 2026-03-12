import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-lime-200 shadow-md">
      <img
        className="rounded-full"
        width="70"
        src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png"
        alt="logo"
      />

      <ul className="flex gap-6 text-xl font-semibold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-lime-500 text-white px-3 py-1 rounded-lg"
                : "hover:text-lime-600"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add-user"
            className={({ isActive }) =>
              isActive
                ? "bg-lime-500 text-white px-3 py-1 rounded-lg"
                : "hover:text-lime-600"
            }
          >
            Add User
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/users-list"
            className={({ isActive }) =>
              isActive
                ? "bg-lime-500 text-white px-3 py-1 rounded-lg"
                : "hover:text-lime-600"
            }
          >
            Users List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;