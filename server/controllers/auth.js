import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import users from "../models/auth.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });

    if (existinguser){
      return res.status(404).json({ message: "User already Exist" })
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await users.create({name,email,password: hashedPassword});
    const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", { expiresIn: "1h",});
    res.status(200).json({ result: newUser, token });

  } catch (error) {
    res.status(500).json(`Somethig went wrong..1==$`);
  }
};



export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existinguser = await users.findOne({email});
    if (!existinguser) {
      return res.status(404).json({ message: "User don't Exist." });
    }

    const isPasswordCrt = await bcrypt.compare(password, existinguser.password);
        if(existinguser&&isPasswordCrt){
         console.log("user is succuessfull login");
           res.status(222).json([existinguser])
}else{
console.log("use is not login successfully");
}
    if (!isPasswordCrt) {
      return res.status(400).json({ message: "Invalid credentials password is wrong" });
    }
      
    const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", { expiresIn: "1h",});

    
  } catch (error) {
    res.status(500).json("Somethig went wrong..in sign in 2");
  }
};
