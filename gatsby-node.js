const path = require("path");
const posts = require("./src/data/posts.json");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  for (const post of posts) {
    createPage({
      path: `/posts/${post.id}`,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        post
      }
    });
  }
};
