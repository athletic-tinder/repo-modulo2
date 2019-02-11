const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
  },
  text:{
    type: String,
    max: 2000
  }
}, { timestamps: true });

const Message = mongoose.model('Message', schema);

module.exports = Message;