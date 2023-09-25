const { create, index, show, update, destroy } = require("./helpers/crud");

// test create post
create("test title", "test data");

update(1, "update title satu", "update data dua");
// test show all post
// test show detail post by id
// test update post by id
// test delete post by id
