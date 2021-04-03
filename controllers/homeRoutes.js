const router = require('express').Router();
const { Post, User } = require('../../models');
router.get("/", async (req, res) => {
const posts = Post.findAll({include:[User]}).map(post => post.get({plain:true}))
console.log(posts);
res.render("homepage",{posts})});

module.exports=router;