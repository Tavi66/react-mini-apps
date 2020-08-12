const mongoose = require('mongoose');
const { Double } = require('mongodb');

const payrollSchema = new mongoose.Schema({
    Invoice:Number,
    Date:Date,
    Parts:Double,
    Labor:Double,
})

payrollSchema.set('toJSON', {
    transform:  (document, returnedObj) => {
      returnedObj.id = returnedObj._id.toString();
      delete returnedObj.__v;
    }
  })

  
module.exports = mongoose.model('Data', payrollSchema);