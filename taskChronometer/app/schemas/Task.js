var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var taskSchema = new Schema({
  title: String,
  description: String,
  estimatedTime: Number,
  realizedTime: Number,
  status: {
    type: String,
    enum: ['new', 'doing', 'done']
  },
  priority: {
    mustHave: Boolean,
    exciting: Boolean
  },
  archived: Boolean
});

module.exports = mongoose.model('Task', taskSchema);
