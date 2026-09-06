import { addCat, findCatById, listAllCats, listCatsByUserId, modifyCat, removeCat } from "../models/cat-model.js";

const getCat = async (req, res, next) => {
  const cats = await listAllCats();
  res.json(cats);
};

const getCatById = async (req, res, next) => {
  const cat = await findCatById(req.params.id);
  if (cat) {
    res.json(cat);
  } else {
    const error = new Error("Cat not found");
    error.status = 404;
    next(error);
  }
};

const getCatsByUserId = async (req, res, next) => {
  const cats = await listCatsByUserId(req.params.id);
  res.json(cats);
};

const postCat = async (req, res, next) => {
  req.body.filename = req.file.filename;

  const result = await addCat(req.body);

  console.log(req.body);
  console.log(req.file);

  if (result.cat_id) {
    res.status(201);
    res.json({ message: "New cat added.", result });
  } else {
    const error = new Error("Cat not created");
    error.status = 400;
    next(error);
  }
};

const putCat = async (req, res, next) => {
  const modify = await modifyCat(req.body, req.params.id, res.locals.user.user_id, res.locals.user.role);

  if (modify) {
    res.json({ message: `Cat ${req.params.id} updated` });
  } else {
    const error = new Error("Cat not found");
    error.status = 404;
    next(error);
  }
};

const deleteCat = async (req, res, next) => {
  const del = await removeCat(req.params.id, res.locals.user.user_id, res.locals.user.role);

  if (del) {
    res.json({ message: `Cat ${req.params.id} deleted` });
  } else {
    const error = new Error("Cat not found");
    error.status = 404;
    next(error);
  }
};

export { getCat, getCatById, postCat, putCat, deleteCat, getCatsByUserId };
