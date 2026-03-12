import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function UsersList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch("http://localhost:4000/user-api/users");

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
    <div>
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-700">
        List of Users
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {users?.map((userObj) => (
          <div
            key={userObj.email}
            onClick={() => gotoUser(userObj)}
            className="p-6 bg-white shadow-xl rounded-xl cursor-pointer hover:scale-105 transition"
          >
            <p className="text-2xl font-semibold text-gray-700">
              {userObj.name}
            </p>

            <p className="text-gray-500">{userObj.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersList;