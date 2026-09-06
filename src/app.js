import express from "express";
import api from "./api/index.js";
import cors from "cors";
import { notFoundHandler, errorHandler } from "./middlewares/error-handler.js";

const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Parses incoming requests with JSON payloads
app.use(express.json());
// Parses URL-encoded form data (like HTML forms)
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", api);
app.use("/public", express.static("public"));
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
