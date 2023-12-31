const fs = require("fs");
const posts = require("../database/posts");
const pool = require("../database/postgres");

function create(title, body) {
  return new Promise(async (resolve, reject) => {
    try {
      const create = await pool.query(
        "INSERT INTO posts (title, body) values ($1, $2) RETURNING *;",
        [title, body]
      );
      resolve(create.rows[0]);
    } catch (err) {
      return reject(err);
    }
  });
}

function index() {
  return new Promise(async (resolve, reject) => {
    try {
      let index = await pool.query(
      "SELECT *FROM posts;",
    );
    resolve(index)
    } catch (err) {
      return reject(err);
    }
  });
}

function show(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await pool.query('SELECT * FROM posts where id = $1', [id]);
      resolve(result.rows[0]);
    } catch (error) {
      return reject(error);
    }
  });
}

function update(id, title, body) {
  return new Promise(async (resolve, reject) => {
    const update = await pool.query(
      "UPDATE posts SET title = $1, body = $2 WHERE id = $3 RETURNING *;",
      [title, body, id]
    );

    if (!update.rows[0]) return reject(`update with id ${id} doesn't exist!`);

    resolve(result.rows[0]);
  });
}

function destroy(id) {
  return new Promise((resolve, reject) => {
    let postIndex = posts.data.findIndex((post) => post.id === id);

    if (postIndex < 0) return reject(`post with id ${id} is doesn't exist!`);

    posts.data.splice(postIndex, 1);

    fs.writeFileSync("./database/posts.json", JSON.stringify(posts, null, 4));
    resolve(`post with id ${id} is deleted!`);
  });
}

module.exports = { create, index, show, update, destroy };
