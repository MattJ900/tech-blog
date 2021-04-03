const router = require('express').Router();
const { Post, User } = require('../models');
router.get("/", async (req, res) => {
    const data = await Post.findAll({ include: [User] })
    const posts = data.map(post => post.get({ plain: true }))
    console.log(posts);
    res.render("homepage", { posts })
});

module.exports = router;