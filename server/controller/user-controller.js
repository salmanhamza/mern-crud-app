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

export const getUser = async (request, response) => {
  try {
    const users = await User.find({});

    response.status(201).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
