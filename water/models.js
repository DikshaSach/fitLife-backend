var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var waterSchema = mongoose.Schema({
    waterIntake:{type:String},
   waterDate: {type:String, required:true},
   id:{type: String},
    creator: {type: mongoose.Schema.ObjectId}},
  
  

    {
    collection: 'water'

});
waterSchema.methods.serialize = function(){
    return{
        waterIntake: this.waterIntake,
        creator: this.creater,
        waterDate: this.waterDate,
        id:this.id
        
    }
}
const Water = mongoose.model('Water', waterSchema);
module.exports = {Water};
