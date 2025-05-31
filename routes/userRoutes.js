// write user routes for user registration and login
import express from "express";
import registerController from "../controllers/user/registerController.js";
import loginController from "../controllers/user/loginController.js";
import {
  updateUserProfile,
  getUserProfile,
} from "../controllers/user/userController.js";
import { userAuthMiddleware } from "../middlewares/userAuthMiddleware.js";
// import { authenticateUser } from "../middlewares/authMiddleware.js";
// import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();
// User registration route
router.post("/register", registerController);
// User login route
router.post("/login", loginController);

// Get user profile by userId
router.get("/profile/:id", userAuthMiddleware, getUserProfile);

// Update user profile by userId
router.put("/profile/:id", updateUserProfile);

export default router;
