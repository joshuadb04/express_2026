import { addCat, findCatById, listAllCats, listCatsByUserId } from "../models/cat-model.js";

const getCat = async (req, res) => {
  const cats = await listAllCats();
  res.json(cats);
};

const getCatById = async (req, res) => {
  const cat = await findCatById(req.params.id);
  if (cat) {
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
};

const getCatsByUserId = async (req, res) => {
  const cats = await listCatsByUserId(req.params.id);
  res.json(cats);
};

const postCat = async (req, res) => {
  req.body.filename = req.file.filename;

  const result = await addCat(req.body);

  console.log(req.body);
  console.log(req.file);

  if (result.cat_id) {
    res.status(201);
    res.json({ message: "New cat added.", result });
  } else {
    res.sendStatus(400);
  }
};

const putCat = (req, res) => {
  res.json({ message: "Cat item updated" });
};

const deleteCat = (req, res) => {
  res.json({ message: "Cat item deleted" });
};

export { getCat, getCatById, postCat, putCat, deleteCat, getCatsByUserId };
