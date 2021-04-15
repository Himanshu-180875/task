const express = require('express');
const router = express.Router();

const Task = require('../models/taskmodel');
const auth=require('../middlewares/auth'); 

router.get('/',(req,res)=>{
    Task.find()
    .sort({date: -1})
    .then(tasks=>res.json(tasks))
});
router.post('/',auth,(req,res)=>{
    const newTask= new Task({
        name: req.body.name
    });
    newTask.save().then(task=> res.json(task));
});
router.delete('/:id',auth,(req,res)=>{
    Task.findById(req.params.id)
    .then(task=>task.remove().then(()=> res.json({
        success: true
    })))
    .catch(err=> res.status(404).json({success:false}));
});


module.exports = router;