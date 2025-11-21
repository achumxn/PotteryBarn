// Add user 
app.post("/users", (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).json({ message: "Name, email, and password are required" });
    } else {
        const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        db.query(sql, [name, email, password], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: "Database Error" });
            } else {
                res.status(200).json({ message: "User added successfully" });
            }
        });
    }
});

// Get all users (do not return password)
app.get("/users", (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: "Database Error" });
        } else {
            if (result.length > 0) {
                res.status(200).json(result);
            } else {
                res.status(200).json({ message: "No users found" });
            }
        }
    });
});

// Get user by ID
app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    const sql = "SELECT id, name, email FROM users WHERE id = ?";
    db.query(sql, [userId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: "Database Error" });
        } else {
            if (result.length > 0) {
                res.status(200).json(result[0]);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        }
    });
});

// Update user (with password)
app.put("/users/:id", (req, res) => {
    const userId = req.params.id;
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).json({ message: "Name, email, and password are required" });
    } else {
        const sql = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";
        db.query(sql, [name, email, password, userId], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: "Database Error" });
            } else {
                if (result.affectedRows > 0) {
                    res.status(200).json({ message: "User updated successfully" });
                } else {
                    res.status(404).json({ message: "User not found" });
                }
            }
        });
    }
});

// Delete user
app.delete("/users/:id", (req, res) => {
    const userId = req.params.id;
    const sql = "DELETE FROM users WHERE id = ?";
    db.query(sql, [userId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: "Database Error" });
        } else {
            if (result.affectedRows > 0) {
                res.status(200).json({ message: "User deleted successfully" });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        }
    });
});

// ------------------ User Login ------------------
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database Error" });
        }

        if (result.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const user = result[0];

        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // SUCCESS
        return res.status(200).json({
            message: "Login successful",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    });
});
