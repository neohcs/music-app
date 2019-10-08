const mongoose = require('mongoose')

const Note = mongoose.model('Note', {
  title: String,
  content: String,
  tag: String,
  recording: String,
  hasRecording: Boolean
})

module.exports = Note
