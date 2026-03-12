import { useLocation } from "react-router";

function User() {
  const { state } = useLocation();
  const user = state?.user;

  if (!user) {
    return <h2 className="text-center mt-20 text-2xl">No User Selected</h2>;
  }

  return (
    <div className="flex justify-center mt-20">
      <div className="p-10 shadow-xl rounded-xl text-center">
        <h1 className="text-3xl mb-4 text-lime-600">User Details</h1>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.dateOfBirth}</p>
        <p>{user.mobileNumber}</p>
      </div>
    </div>
  );
}

export default User;