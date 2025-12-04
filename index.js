import express from "express";
import cors from "cors";
import {
  getPosts,
  addPost,
  updateLikes,
  deletePost,
} from "./queries.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Like Me (Parte II) funcionando. Usa /posts 😎");
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error obteniendo posts" });
  }
});

app.post("/posts", async (req, res) => {
  try {
    const { titulo } = req.body;
    if (!titulo) {
      return res.status(400).json({ message: "Falta el título" });
    }
    const nuevo = await addPost(titulo);
    res.status(201).json(nuevo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error agregando post" });
  }
});

app.put("/posts/like/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const increment = req.query.inc ? Number(req.query.inc) : 1;

    if (Number.isNaN(increment)) {
      return res
        .status(400)
        .json({ message: "El parámetro 'inc' debe ser numérico" });
    }

    const updated = await updateLikes(id, increment);
    res.json(updated);
  } catch (error) {
    console.log(error);

    if (error.code === 404) {
      return res.status(404).json({ message: error.message });
    }
    if (error.code === "22P02") {
      return res
        .status(400)
        .json({ message: "El id debe ser un número válido" });
    }

    res
      .status(500)
      .json({ message: "Error al actualizar los likes del post" });
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deletePost(id);
    res.json({
      message: "Post eliminado con éxito",
      post: deleted,
    });
  } catch (error) {
    console.log(error);

    if (error.code === 404) {
      return res.status(404).json({ message: error.message });
    }
    if (error.code === "22P02") {
      return res
        .status(400)
        .json({ message: "El id debe ser un número válido" });
    }

    res.status(500).json({ message: "Error eliminando post" });
  }
});

app.listen(3000, () =>
  console.log("Servidor encendido en http://localhost:3000")
);
