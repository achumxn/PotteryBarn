import db from "../config/db.js";

export const getUsers = ((req,res) => {
    const sql = "SELECT * FROM users";

    db.query(sql,(err,result)=> {
        if (err) {
            console.log(err);
            return res.status(500).json("Serverside Error");
        }

        if (result.length > 0) {
            return res.status(200).json(result);
        }
        else {
            return res.status(200).json("no user found");
        }
    })
});

export const updateUser = ((req, res) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
       return res.status(400).json({ message: "Name, email, and password are required" });
    } else {
        const sql = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";
        db.query(sql, [name, email, password, id], (err, result) => {
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

export const delUser = ((req, res) => {
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

//Add User

export const addUser = ((req, res) => {
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