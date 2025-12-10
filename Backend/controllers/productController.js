import db from "../config/db.js"; // mysql connection

// ADD PRODUCT
export const addProduct = (req, res) => {
  const { title, price, description } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  const sql = "INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)";

  db.query(sql, [title, price, description, imageUrl], (err, result) => {
    if (err) return res.status(500).json({ error: "Failed to add product" });
    res.json({ message: "Product added successfully" });
  });
};

// GET ALL PRODUCTS
export const getProducts = (req, res) => {
  const sql = "SELECT * FROM products ORDER BY id DESC";

  db.query(sql, (err, rows) => {
    if (err) return res.status(500).json({ error: "Failed to fetch products" });
    res.json(rows);
  });
};

// UPDATE PRODUCT
export const updateProduct = (req, res) => {
  const id = req.params.id;
  const { title, price, description } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  let sql, params;

  if (imageUrl) {
    sql = "UPDATE products SET title=?, price=?, description=?, imageUrl=? WHERE id=?";
    params = [title, price, description, imageUrl, id];
  } else {
    sql = "UPDATE products SET title=?, price=?, description=? WHERE id=?";
    params = [title, price, description, id];
  }

  db.query(sql, params, (err) => {
    if (err) return res.status(500).json({ error: "Failed to update product" });
    res.json({ message: "Product updated successfully" });
  });
};

// DELETE PRODUCT
export const deleteProduct = (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM products WHERE id=?";

  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: "Failed to delete product" });

    res.json({ message: "Product deleted successfully" });
  });
};
