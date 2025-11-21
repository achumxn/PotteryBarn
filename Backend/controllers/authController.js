import db from "../config/db.js";

export const loginUser = ((req,res) => {
    const {name,pass} = req.body;
    const values = [name,pass];
    console.log("credentials", values);
    
    const sql = "SELECT * FROM users WHERE name = ? AND pass = ?";

    db.query(sql,values,(error,result) => {
        if (error) {
            console.log(error);
            return(res.status(500).json("server Error"));
        }

        if (result.length > 0) {
            return(res.status(200).json({
                message:"login success",
                user: result[0]
            }));
        }

        else {
            return(res.status(401).json("Invalid Credentials"));
        }
    });
});