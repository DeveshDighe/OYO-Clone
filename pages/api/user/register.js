import connectDB from "@/db";
import userModel from "@/models/user.model";
import bcrpt from 'bcrypt'



export default async function handler(req, res) {
  if (req.method === 'POST') {
    connectDB()
    const { name, email, password } = req.body
    console.log(name, 'name', email, 'email', password, 'password');

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are mandatory", success: false })
    }

    const isEmailExist = await userModel.findOne({ email: email })

    if (isEmailExist) {
      return res.status(401).json({ msg: 'Email already exists', success: false })
    }

    const hashhedPass = await bcrpt.hash(password, 10);

    const createdUser = await userModel({
      name,
      email,
      password: hashhedPass
    })

    const result = await createdUser.save()

    return res.status(201).json({ msg: 'Registered Successfully' })

  }
}