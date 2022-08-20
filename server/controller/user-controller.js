import { request, response } from "express";
import User from "../schema/user-schema.js";

export const addUser = async (request, response) => {
  const user = request.body;
  const validatedUser = new User(user);

  try {
    await validatedUser.save();
    response.status(201).json(validatedUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getUsers = async (request, response) => {
  try {
    const users = await User.find({});

    response.status(201).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getUser = async (request, response) => {
  try {
    const user = await User.findOne({ _id: request.params.id });
    response.status(201).json(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const editUser = async (request, response) => {
  let user = request.body;
  const editUser = new User(user);
  try {
    await User.updateOne({ _id: request.params.id }, editUser);
    response.status(201).json(editUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: "user deleted succesfully" });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
