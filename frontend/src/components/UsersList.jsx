import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://atpassignments.onrender.com/user-api/users",
      );
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data.payload);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (location.state?.refresh) {
      fetchUsers();
    }
  }, [location.state]);

  const gotoUser = (userObj) => {
    navigate("/user", { state: { user: userObj } });
  };

  if (loading)
    return <p className="text-center text-orange-400 text-3xl">Loading...</p>;
  if (error)
    return <p className="text-center text-red-400 text-3xl">{error.message}</p>;

  return (
    <div className="p-10">
      <h1 className="text-5xl text-gray-600 text-center mb-10">
        List of Users
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {users.map((user) => (
          <div
            key={user._id}
            className="p-6 shadow-2xl cursor-pointer rounded hover:bg-gray-100 transition h-40 flex flex-col justify-center items-center text-center"
            onClick={() => gotoUser(user)}
          >
            <p className="text-3xl font-semibold break-words">{user.name}</p>
            <p className="text-2xl truncate w-full">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersList;
