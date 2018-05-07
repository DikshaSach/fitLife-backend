var mongoose = require('mongoose');

var exerciseSchema = mongoose.Schema({
    title: {type: String, required: true},
    time: {type: String, required: true},
    start:{type: Date, required: true},
    end:{type:Date, required:true},
    creator: {type: mongoose.Schema.ObjectId}},

    {
    collection: 'exercises'

});
exerciseSchema.methods.serialize = function(){
    return{
        title: this.name,
        time: this.time,
        creator: this.creator,
        start: this.start,
        end: this.end
    }
}
const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = {Exercise};