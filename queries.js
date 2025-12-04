import { pool } from "./db.js";

const getPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts ORDER BY id ASC");
  return rows;
};

const addPost = async (titulo) => {
  const text =
    "INSERT INTO posts (titulo, likes) VALUES ($1, 0) RETURNING *";
  const values = [titulo];
  const { rows } = await pool.query(text, values);
  return rows[0];
};

const updateLikes = async (id, increment = 1) => {
  const text =
    "UPDATE posts SET likes = likes + $1 WHERE id = $2 RETURNING *";
  const values = [increment, id];

  const { rows, rowCount } = await pool.query(text, values);

  if (rowCount === 0) {
    throw { code: 404, message: "Post no encontrado" };
  }

  return rows[0];
};

const deletePost = async (id) => {
  const text = "DELETE FROM posts WHERE id = $1 RETURNING *";
  const values = [id];

  const { rows, rowCount } = await pool.query(text, values);

  if (rowCount === 0) {
    throw { code: 404, message: "Post no encontrado" };
  }

  return rows[0];
};

export { getPosts, addPost, updateLikes, deletePost };
