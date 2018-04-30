'use strict';

const router = require('express').Router();
const jsonParser = require('body-parser').json();
const mongoose = require('mongoose');
const {Exercise} = require('../exercise/models.js');
const ExerciseService = require('../services/exerciseService');
const passport = require('passport');

router.post('/add/exercise', jsonParser, async (req,res)=> {
    try{
      let Exercise = await ExerciseService.create(req.body);
      res.status(201).json({message: 'Exercise has been created'});
    } catch (err){
      res.status(500).json({message: 'There was a problem creating the exercise'});
    }
  });

router.route('/').get(function(req, res){
    Exercise.find(function(err, exer){
        if(err){
            console.log(err);
        }
        else {
            res.json(exer);
        }
    });
});

router.route('/:id').get(function(req,res){
    var id = req.params.id;
   Exercise.findById(id, function(err, exercise){
       res.json(exercise);
   });
});

router.route('/edit/:id').get(function(req,res){
    var id = req.params.id;
    Exercise.findById(id, function(err, exercise){
        res.json(exercise);
    });
});
router.route('/update/:id').post(function(req, res){
    Exercise.findById(req.params.id, function(err, exercise){
        if(!exercise)
        return next(new Error('Could not load exercise'));
        else{
            exercise.exercise = req.body.exercise;
            exercise.save().then(exercise => {
                res.json('update complete');
            })
            .catch(err =>{
                res.status(400).send('unable to update');
            });
        }
    });
});

router.route('/delete/:id').get(function(req,res){
    Exercise.findByIdAndRemove({id: req.params.id},
    function(err, item){
        if(err) res.json(err);
        else res.json('successfully removed');
    });
});

module.exports = router;