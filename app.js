import express from "express";
const hostname = "127.0.0.1";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/v1/cats", (req, res) => {
  const cat = {
    cat_id: 777,
    name: "Kitty",
    birthdate: "1/9/2020",
    weight: "4.2kg",
    owner: "Joshua",
    image:
      "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  res.json(cat);
});

app.use("/public", express.static("public"));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
