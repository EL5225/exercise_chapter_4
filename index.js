const { create, index, show, update, destroy } = require("./helpers/crud");

async function main() {
  try {
    // test create post
    // let newPost = await create("test title 2", "test data 2");
    // console.log(newPost);
    // // test show all post
    // let posts = index();
    // console.log(posts);
    // // test show detail post by id
    // let post = await show(1);
    // console.log(post);
    // // test update post by id
    let updatedPost = await update(2, "updated title 2", "updated data 2");
    console.log(updatedPost);
    // // test delete post by id
    // let deletedPost = await destroy(1);
    // console.log(deletedPost);
  } catch (err) {
    console.log(err);
  }
}
main();
