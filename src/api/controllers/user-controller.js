import { addUser, findUserById, listAllUsers } from "../models/user-model.js";

const getUser = async (req, res) => {
  const users = await listAllUsers();
  res.json(users);
};

const getUserById = async (req, res) => {
  const user = await findUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const postUser = async (req, res) => {
  const result = await addUser(req.body);
  if (result.user_id) {
    res.status(201);
    res.json({ message: "New user added.", result });
  } else {
    res.sendStatus(400);
  }
};

const putUser = (req, res) => {
  res.json({ message: "User item updated" });
};

const deleteUser = (req, res) => {
  res.json({ message: "User item deleted" });
};

export { getUser, getUserById, postUser, putUser, deleteUser };
