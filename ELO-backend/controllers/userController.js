const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req,res,next) => {
    console.log(req.body);
    try {

        const summonerProfile = await User.find();

        res.json({
            status: 200,
            data: summonerProfile
        });
    } catch (err)  {
        res.send(err)
    }
});

router.post('/', async (req, res) => {
    try{
        const createdUser = await User.create(req.body);
        console.log('youre seeing this because there is a response in creating')
        res.json({
            status:200,
            data: createdUser
        });
    } catch (err) {
        res.send(err)
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const foundUser = await User.findById(req.params.id);
        res.json({
            status: 200,
            data: foundUser
        });
    } catch (err) {
        res.send(err)
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({
            status: 200,
            data: updatedUser
        });

    }  catch (err) {
        res.send(err)
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const deletedUser = await User.findByIdAndRemove(req.params.id);
        res.json({
            status: 200,
            data: deletedUser
        });
    } catch (err) {
        res.send(err)
    }
});


module.exports = router;