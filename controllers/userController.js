const bcrypt = require("bcrypt");
const { createUser, fetchUser, fetchUserById,updateUser } = require("../services/userService.js");

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
const fetchAllUser = async (req, res) => {
    try {
        const fetchAll = await fetchUser();

        res.status(200).json({
            data: fetchAll
        })
    } catch (err) {
        res.status(500).json({ message: "Error fetching user", error: err.message })
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: "ID parameter is required" });
    }
    const user = await fetchUserById(id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ data: user });
}

const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const { first_name, last_name, email, corporate_id, profile_picture, roleId } = req.body;
        if (!id) {
            return res.status(400).json({ message: "ID parameter is required" });
        }

         const updateData = {
            first_name,
            last_name,
            email,
            corporate_id,
            roleId,
            profile_picture,
        };

        const user = await updateUser(id, updateData);

        if (!updateUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", data: updateData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { addUser, fetchAllUser, getUserById, updateUserById };
