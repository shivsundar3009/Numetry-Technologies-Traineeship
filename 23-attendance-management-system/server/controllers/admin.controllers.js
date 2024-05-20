// controllers/adminController.js
import Admin from '../models/admin.model.js';

// Update Admin by ID
const updateAdminById = async (req, res) => {
  try {
    const { id } = req.params; // Extract admin ID from URL params
    const { userName, fullName, email, password} = req.body; // Extract updated admin details from request body

    // Find admin by ID and update
    const updatedAdmin = await Admin.findByIdAndUpdate(id, { userName, fullName, email, password}, { new: true });

    if (!updatedAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "Admin updated successfully", admin: updatedAdmin });
  } catch (error) {
    console.error("Error updating admin:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { updateAdminById };
