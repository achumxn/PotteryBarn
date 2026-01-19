import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/adminpage.css";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("users");

  // USERS
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [editingId, setEditingId] = useState(null);

  // PRODUCTS
  const [products, setProducts] = useState([]);
  const [productForm, setProductForm] = useState({
    title: "",
    price: "",
    description: "",
    image: null,
  });
  const [editingProductId, setEditingProductId] = useState(null);

  const url = import.meta.env.VITE_API_URL;

  // ================= FETCH USERS =================
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${url}/user/getUsers`);
      setUsers(res.data.message ? [] : res.data);
    } catch (err) {
      alert("Failed to fetch users");
    }
  };

  // ================= FETCH PRODUCTS =================
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${url}/product/getProducts`);
      setProducts(res.data);
    } catch (err) {
      alert("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, []);

  // ================= USER FORM =================
  const handleUserChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleUserSubmit = async (e) => {
    e.preventDefault();
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
    } catch (err) {
      alert("Operation failed");
    }
  };

  const handleUserEdit = (user) => {
    setForm({ name: user.name, email: user.email, password: user.password });
    setEditingId(user.uid);
  };

  const handleUserDelete = async (uid) => {
    if (!window.confirm("Delete user?")) return;
    try {
      await axios.delete(`${url}/user/delUser/${uid}`);
      fetchUsers();
    } catch {
      alert("Failed to delete user");
    }
  };

  // ================= PRODUCT FORM =================
  const handleProductChange = (e) => {
    if (e.target.name === "image") {
      setProductForm({ ...productForm, image: e.target.files[0] });
    } else {
      setProductForm({ ...productForm, [e.target.name]: e.target.value });
    }
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", productForm.title);
    formData.append("price", productForm.price);
    formData.append("description", productForm.description);
    if (productForm.image) formData.append("image", productForm.image);

    try {
      if (editingProductId) {
        await axios.put(
          `${url}/product/update/${editingProductId}`,
          formData
        );
        alert("Product updated");
      } else {
        await axios.post(`${url}/product/add`, formData);
        alert("Product added");
      }
      setEditingProductId(null);
      setProductForm({ title: "", price: "", description: "", image: null });
      fetchProducts();
    } catch (err) {
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
    setEditingProductId(p.pid);
  };

  const handleProductDelete = async (pid) => {
    if (!window.confirm("Delete product?")) return;
    try {
      await axios.delete(`${url}/product/delete/${pid}`);
      fetchProducts();
    } catch {
      alert("Failed to delete product");
    }
  };

  // ================= UI =================
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Admin</h2>
        <button
          onClick={() => setActiveTab("users")}
          className={activeTab === "users" ? "active" : ""}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab("products")}
          className={activeTab === "products" ? "active" : ""}
        >
          Products
        </button>
      </aside>

      {/* Main */}
      <main className="main">
        <div className="topbar">
          <h1>{activeTab === "users" ? "User Management" : "Product Management"}</h1>
          <span>Admin Panel</span>
        </div>

        {/* USERS */}
        {activeTab === "users" && (
          <>
            <div className="card">
              <h3>{editingId ? "Update User" : "Add User"}</h3>
              <form onSubmit={handleUserSubmit} className="grid-form">
                <input
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleUserChange}
                  required
                />
                <input
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleUserChange}
                  required
                />
                <input
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleUserChange}
                  required
                />
                <button>{editingId ? "Update" : "Save"}</button>
              </form>
            </div>

            <div className="card">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.uid}>
                      <td>{u.uid}</td>
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                      <td>
                        <button
                          className="edit"
                          onClick={() => handleUserEdit(u)}
                        >
                          Edit
                        </button>
                        <button
                          className="del"
                          onClick={() => handleUserDelete(u.uid)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* PRODUCTS */}
        {activeTab === "products" && (
          <>
            <div className="card">
              <h3>{editingProductId ? "Update Product" : "Add Product"}</h3>
              <form
                onSubmit={handleProductSubmit}
                className="grid-form"
                encType="multipart/form-data"
              >
                <input
                  name="title"
                  placeholder="Title"
                  value={productForm.title}
                  onChange={handleProductChange}
                  required
                />
                <input
                  name="price"
                  placeholder="Price"
                  value={productForm.price}
                  onChange={handleProductChange}
                  required
                />
                <input
                  name="description"
                  placeholder="Description"
                  value={productForm.description}
                  onChange={handleProductChange}
                  required
                />
                <input
                  type="file"
                  name="image"
                  onChange={handleProductChange}
                  accept="image/*"
                  required={!editingProductId}
                />
                <button>{editingProductId ? "Update" : "Save"}</button>
              </form>
            </div>

            <div className="card grid-products">
              {products.map((p) => (
                <div className="product-card" key={p.pid}>
                  <img src={`${url}/uploads/${p.imageUrl}`} alt={p.title} />
                  <h4>{p.title}</h4>
                  <p>₹{p.price}</p>
                  <div>
                    <button className="edit" onClick={() => handleProductEdit(p)}>
                      Edit
                    </button>
                    <button
                      className="del"
                      onClick={() => handleProductDelete(p.pid)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default AdminPage;
