import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/adminpage.css"; // import CSS file

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", password: ""});
  const [editingId, setEditingId] = useState(null);
  const url = import.meta.env.VITE_API_URL;

  // Fetch users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${url}/user/getUsers`);
      if (response.data.message) setUsers([]);
      else setUsers(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch users");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Form input
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Add or update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = form;
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      if (editingId) {
        await axios.put(`${url}/user/updateUser/${editingId}`, form);
        alert("User updated successfully");
      } else {
        await axios.post(`${url}/user/addUser`, form);
        alert("User added successfully");
      }
      setForm({ name: "", email: "", password: "" });
      setEditingId(null);
      fetchUsers();
    } catch (err) {
      console.error(err);
      alert("Operation failed");
    }
  };

  // Edit user
  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, password: user.password });
    setEditingId(user.id);
  };

  // Delete user
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`${url}/user/delUser/${id}`);
        fetchUsers();
        alert("User deleted successfully");
      } catch (err) {
        console.error(err);
        alert("Delete failed");
      }
    }
  };

  if (loading) return <p className="loading">Loading users...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="admin-container">
      <h1>Admin Panel - Users</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="user-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">{editingId ? "Update User" : "Add User"}</button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm({ name: "", email: "", password: "" });
            }}
            className="cancel-btn"
          >
            Cancel
          </button>
        )}
      </form>

      {/* Users Table */}
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button onClick={() => handleEdit(user)} className="edit-btn">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(user.id)} className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPage;
