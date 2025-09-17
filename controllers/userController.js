import { createUser } from "../services/userService.js";
import bcrypt from "bcrypt";

export const addUser = async (req, res) => {
  try {
    console.log(req.body);

    const {
      first_name,
      last_name,
      email,
      corporate_id,
      roleId,
      profile_image, // from request body
      password,
    } = req.body;

    if (!first_name || !last_name || !email || !corporate_id || !roleId || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser({
      first_name,
      last_name,
      email: email,  
      password: hashedPassword,
      corporate_id,
      roleId,
      profile_picture: profile_image || null, 
    });

    res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
