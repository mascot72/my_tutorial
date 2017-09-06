var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = Schema({
    title: String,
    author: String
});

module.exports = mongoose.model('book', bookSchema);
