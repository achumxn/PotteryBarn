import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/adminpage.css";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("users"); // NEW
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [productForm, setProductForm] = useState({
    title: "",
    price: "",
    description: "",
    image: null,
  });

  const [editingId, setEditingId] = useState(null);
  const [editingProductId, setEditingProductId] = useState(null);

  const url = import.meta.env.VITE_API_URL;

  // ====================================
  // FETCH USERS
  // ====================================
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${url}/user/getUsers`);
      setUsers(res.data.message ? [] : res.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch users");
    }
  };

  // ====================================
  // FETCH PRODUCTS
  // ====================================
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${url}/product/getProducts`);
      setProducts(res.data);      
    } catch (err) {
      console.log(err);
    };
  };

  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, []);

  //====================================
  // USER FORM LOGIC
  //====================================
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = form;

    if (!name || !email || !password) return alert("All fields required");

    try {
      if (editingId) {
        await axios.put(`${url}/user/updateUser/${editingId}`, form);
        alert("User updated");
      } else {
        await axios.post(`${url}/user/addUser`, form);
        alert("User added");
      }

      setForm({ name: "", email: "", password: "" });
      setEditingId(null);
      fetchUsers();
    } catch {
      alert("Operation failed");
    };
  };

  const handleEdit = (u) => {
    setForm({ name: u.name, email: u.email, password: u.password });
    setEditingId(u.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete user?")) return;
    await axios.delete(`${url}/user/delUser/${id}`);
    fetchUsers();
  };

  //====================================
  // PRODUCT FORM LOGIC
  //====================================
  const handleProductChange = (e) => {
    if (e.target.name === "image") {
      setProductForm({ ...productForm, image: e.target.files[0] });
    } else {
      setProductForm({ ...productForm, [e.target.name]: e.target.value });
    };
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", productForm.title);
    formData.append("price", productForm.price);
    formData.append("description", productForm.description);
    formData.append("image", productForm.image);

    try {
      if (editingProductId) {
        await axios.put(`${url}/product/update/${editingProductId}`, formData);
        alert("Product updated");
      } else {
        await axios.post(`${url}/product/add`, formData);
        alert("Product added");
      }

      setEditingProductId(null);
      setProductForm({ title: "", price: "", description: "", image: null });
      fetchProducts();
    } catch (err) {
      console.log(err);
      alert("Failed to save product");
    }
  };

  const handleProductEdit = (p) => {
    setProductForm({
      title: p.title,
      price: p.price,
      description: p.description,
      image: null,
    });
    setEditingProductId(p.id);
  };

  const handleProductDelete = async (id) => {
    if (!window.confirm("Delete product?")) return;
    await axios.delete(`${url}/product/delete/${id}`);
    fetchProducts();
  };

  //====================================
  return (
    <div className="admin-container">

      <h1>Admin Dashboard</h1>

      {/* TAB BUTTONS */}
      <div className="tabs">
        <button
          className={activeTab === "users" ? "active" : ""}
          onClick={() => setActiveTab("users")}
        >
          Manage Users
        </button>
        <button
          className={activeTab === "products" ? "active" : ""}
          onClick={() => setActiveTab("products")}
        >
          Manage Products
        </button>
      </div>

      {/* USERS SECTION */}
      {activeTab === "users" && (
        <>
          <h2>User Management</h2>

          <form onSubmit={handleSubmit} className="user-form">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
            <input name="password" value={form.password} onChange={handleChange} placeholder="Password" />
            <button type="submit">{editingId ? "Update" : "Add User"}</button>
          </form>

          <table className="users-table">
            <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Password</th><th>Actions</th></tr></thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.password}</td>
                  <td>
                    <button onClick={() => handleEdit(u)} className="edit-btn">Edit</button>
                    <button onClick={() => handleDelete(u.id)} className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* PRODUCTS SECTION */}
      {activeTab === "products" && (
        <>
          <h2>Product Management</h2>

          <form onSubmit={handleProductSubmit} className="user-form" encType="multipart/form-data">
            <input type="text" name="title" placeholder="Product Title" value={productForm.title} onChange={handleProductChange} />
            <input type="number" name="price" placeholder="Price" value={productForm.price} onChange={handleProductChange} />
            <input type="text" name="description" placeholder="Description" value={productForm.description} onChange={handleProductChange} />
            <input type="file" name="image" accept="image/*" onChange={handleProductChange} />
            <button type="submit">{editingProductId ? "Update Product" : "Add Product"}</button>
          </form>

          <table className="users-table">
            <thead><tr><th>Image</th><th>Title</th><th>Price</th><th>Description</th><th>Actions</th></tr></thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td><img src={`${url}/uploads/${p.imageUrl}`}  width="60" /></td>
                  <td>{p.title}</td>
                  <td>₹{p.price}</td>
                  <td>{p.description}</td>
                  <td>
                    <button onClick={() => handleProductEdit(p)} className="edit-btn">Edit</button>
                    <button onClick={() => handleProductDelete(p.id)} className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default AdminPage;
