import { addUser, findUserById, listAllUsers, modifyUser, removeUser } from "../models/user-model.js";
import bcrypt from "bcrypt";

const getUser = async (req, res, next) => {
  const users = await listAllUsers();
  res.json(users);
};

const getUserById = async (req, res, next) => {
  const user = await findUserById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    const error = new Error("User not found");
    error.status = 404;
    next(error);
  }
};

const postUser = async (req, res, next) => {
  console.log(req.body);
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  const result = await addUser(req.body);

  if (result.user_id) {
    res.status(201);
    res.json({ message: "New user added.", result });
  } else {
    const error = new Error("User not created");
    error.status = 400;
    next(error);
  }
};

const putUser = async (req, res, next) => {
  if (req.params.id != res.locals.user.user_id && res.locals.user.role != "admin") {
    const error = new Error("Forbidden");
    error.status = 403;
    next(error);
    return;
  }

  const modify = await modifyUser(req.body, req.params.id);

  if (modify) {
    res.json({ message: `User ${req.params.id} updated` });
  } else {
    const error = new Error("User not found");
    error.status = 404;
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  if (req.params.id != res.locals.user.user_id && res.locals.user.role != "admin") {
    const error = new Error("Forbidden");
    error.status = 403;
    next(error);
    return;
  }

  const del = await removeUser(req.params.id);

  if (del) {
    res.json({ message: `User ${req.params.id} deleted` });
  } else {
    const error = new Error("User not found");
    error.status = 404;
    next(error);
  }
};

export { getUser, getUserById, postUser, putUser, deleteUser };
