import connectDB from "@/db";
import userModel from "@/models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDB();

    const { email, password } = req.body;
    try {
      console.log(email, password); // Log email and password

      if (!email || !password) {
        return res.status(400).json({ msg: "Email and password required !" });
      }

      console.log('1');
      const emailExists = await userModel.findOne({ email });
      if (!emailExists) {
        return res.status(400).json({ msg: "Please Register first !" });
      }
      console.log('2');
      
      const passwordMatched = await bcrypt.compare(
        password,
        emailExists.password
      );
      console.log('3');
      if (passwordMatched) {
        const token = jwt.sign({ token: emailExists._id }, process.env.JWT_SECRET, {
          expiresIn: "30d",
        });
        console.log('4');
        return res.status(200).json({ msg: "Logged in successfully !", token , success : true});
      }

      if (!passwordMatched) {
        return res.status(400).json({ msg: "Invalid password. Please try again!",success : false });
      }
    } catch (error) {
      console.log('Error is ', error); // Log the error
      return res.status(400).json({ msg: "Invalid Credentials !" , error:error});
    }
  }
}
