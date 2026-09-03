import { addCat, findCatById, listAllCats, listCatsByUserId, modifyCat, removeCat } from "../models/cat-model.js";

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

const putCat = async (req, res) => {
  const modify = await modifyCat(req.body, req.params.id);
  if (modify) {
    res.json({ message: `Cat ${req.params.id} updated` });
  } else {
    res.sendStatus(404);
  }
};

const deleteCat = async (req, res) => {
  const del = await removeCat(req.params.id);
  if (del) {
    res.json({ message: `Cat ${req.params.id} deleted` });
  } else {
    res.sendStatus(404);
  }
};

export { getCat, getCatById, postCat, putCat, deleteCat, getCatsByUserId };
