const {Exercise} = require('../exercise/models');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

function ExerciseService(){
    this.create = function(exerciseObj){
        return new Promise(async(resolve,reject)=>{
            try{
                let{
                    title,
                    creator,
                    start,
                    end
                } = exerciseObj;
                let newExercise = await Exercise
                .create({
                    title,
                    creator,
                    start,
                    end
                });
                resolve(newExercise);

            } catch(err) {
                console.log('Error');
                reject('Mongoose error');
            }
        });
    }
}

module.exports = new ExerciseService();