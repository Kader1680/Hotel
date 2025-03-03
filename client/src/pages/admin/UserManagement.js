import { useState } from "react";

export default function UserManagement() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");


  const addUser = () => {
    if (!name || !email || !role) return;
    setUsers([...users, { id: users.length + 1, name, email, role }]);
    setName("");
    setEmail("");
    setRole("");
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };




  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>

      {/* User Form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <select
            className="border p-2 rounded w-full"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="Housekeeper">Housekeeper</option>
            <option value="Receptionist">Receptionist</option>
            <option value="restaurate">Restaurate</option>
            <option value="Fitness">Fitness Center Manager</option>
            <option value="Parking">Parking</option>
          </select>

          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


        </div>
        <button
          onClick={addUser}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      {/* User Table */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No users added yet.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="text-center">
                  <td className="border p-2">{user.id}</td>
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2">{user.role}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
