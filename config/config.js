// write config file exporting all the configuration variables and environment variables
import dotenv from "dotenv";
dotenv.config();
const config = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase",
  JWT_SECRET: process.env.JWT_SECRET || "your_jwt_secret",
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
};
export default config;