// similarly write register controller for user registration
import User from "../../models/userModel.js";
import { StatusCodes } from "http-status-codes";

const registerController = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Validate input
    if (!name || !email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Name, email, and password are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(StatusCodes.CONFLICT).json({
        message: "User with this email already exists",
      });
    }

    // Create new user
    const user = new User({
      name,
      email,
      password,
      role: role || "user", // Default to 'user' if no role is provided
    });

    await user.save();
    res.status(StatusCodes.CREATED).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Server error",
    });
  }
};

export default registerController;
