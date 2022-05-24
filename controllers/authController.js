import User from "../models/user.js";
import { StatusCodes } from "http-status-codes";

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new Error("please provide all values");
  }

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login");
};

const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
