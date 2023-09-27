const fs = require("fs");
const posts = require("../database/posts");
const PostModel = require("../models/post");

function create(title, body) {
  let newPost = new PostModel(posts.id++, title, body);
  posts.data.push(newPost);

  fs.writeFileSync("./database/posts.json", JSON.stringify(posts, null, 4));
}

function index() {
  console.log(posts.data);
}

function show(id) {
  const post = posts.data.find((post) => post.id === id);
  console.log(post);
}

function update(id, title, body) {
  let updatePost = posts?.data?.find((post) => post?.id === id);
  updatePost.title = title;
  updatePost.body = body;

  fs.writeFileSync("./database/posts.json", JSON.stringify(posts, null, 4));
}

function destroy(id) {
  const deleteid = posts.data.findIndex((post) => post.id === id);

  if (deleteid !== -1) {
    posts.data.splice(deleteid, 1);

    fs.writeFileSync("./database/posts.json", JSON.stringify(posts, null, 4));

    console.log("id berhasil dihapus");
  } else {
    console.log("id gagal dihapus");
  }
}

module.exports = { create, index, show, update, destroy };
