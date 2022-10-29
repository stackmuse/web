import User from "../../lib/User";

function Dashboard() {
  const user = new User();

  return (
    <>
      <h1>Dashboard</h1>
      <p>Hello, {user.data.username}</p>
    </>
  );
}

export default Dashboard;
