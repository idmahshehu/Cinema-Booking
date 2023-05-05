import { db } from "../db.js";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";

export const register = (req, res) => {
  const q = "SELECT * FROM users Where username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    // the method of hashing the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO users(`username`,`email`,`password`,`firstname`,`lastname`) VALUES (?)";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.firstname,
      req.body.lastname,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });

  });
};

export const login = (req, res) => {
  const username = req.body.username;
  res.json("hii");
  // const password = req.body.password;

  // db.query(
  //   "SELECT * FROM users WHERE username = ? AND password=? ",
  //   [username, password],
  //   (err, data) => {
  //     if (err) {
  //       res.sent({ err: err });
  //     }
  //     if (data.length > 0) {
  //       res.send(data);  
  //     }
  //     else {
  //       res.send({ message: "Wrong username or password" });
  //     }
  //   }
  // );

    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [username], (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      
      if(data.length > 0){
        res.send(data);

        const checkPassword = bcrypt.compareSync(req.body.password,data[0].password);
          
          // if (!checkPassword){
          //   return res.status(400).json("Wrong password or username!");
          // } 
          const token = jwt.sign({idusers:data[0].idusers}, "jwtkey");
          const {password, ...other} = data[0];
          
          res.cookie("access_token", token, {
            httpOnly: true
          }).status(200).json(data[0]);
          
          res.status(200).json(other);
        }
          
        if (data.length === 0){
          return res.status(404).json("User not found!");
        } 
    });
};

export const logout = (req, res) => {};
