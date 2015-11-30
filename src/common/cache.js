var mongoose = require('mongoose');

var cacheSchema = new mongoose.Schema({
  github_sha1: String,
  repo_id: String,
  user_id: String,
  is_manually: Boolean,
  commit_time: Time,
  touched_files: Number,
  addition_lines: Number,
  deletion_lines: Number
})

var Cache = mongoose.model('Cache', cacheSchema);

module.exports = {
  Cache: Cache
}
