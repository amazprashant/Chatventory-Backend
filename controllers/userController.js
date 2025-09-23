const bcrypt = require("bcrypt");
const { createUser } = require("../services/userService.js");

const addUser = async (req, res) => {
  try {
    const { first_name, last_name, email, password, corporate_id, roleId, profile_picture } = req.body;

    if (!first_name || !last_name || !email || !password || !corporate_id || !roleId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await createUser({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      corporate_id,
      roleId,
      profile_picture: profile_picture || null,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err.message });
  }
};

module.exports = { addUser };
