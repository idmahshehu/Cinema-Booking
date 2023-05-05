import { db } from "../db.js";

export const user = (req,res)=>{
    const username = req.body.username;

  db.query(
    "SELECT * FROM users WHERE username = ? ",
    [username],
    (err, data) => {
      if (err) {
        res.sent({ err: err });
      }
      if (data.length > 0) {
        res.send(data);  
      }
      else {
        res.send({ message: "no user" });
      }
    }
  );
}