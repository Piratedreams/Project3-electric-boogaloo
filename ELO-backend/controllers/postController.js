const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.get('/', async (req, res, next) => {
    console.log(req.body);
    try {
        const posts = await Post.find();
        res.json({
            status: 200,
            data: posts
        });
    } catch (err)  {
        res.send(err)
    }
});

router.post('/', async (req, res) => {
    try{
        const createdPost = await Post.create(req.body);
        console.log('youre seeing this because there is a response in creating')
        res.json({
            status:200,
            data: createdPost
        });
    } catch (err) {
        res.send(err)
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const foundPost = await Post.findById(req.params.id);
        res.json({
            status: 200,
            data: foundPost
        });
    } catch (err) {
        res.send(err)
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({
            status: 200,
            data: updatedPost
        });

    }  catch (err) {
        res.send(err)
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const deletedPost = await Post.findByIdAndRemove(req.params.id);
        res.json({
            status: 200,
            data: deletedPost
        });
    } catch (err) {
        res.send(err)
    }
});


module.exports = router;