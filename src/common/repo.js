var mongoose = require('mongoose');

var repoSchema = new mongoose.Schema({
  name: String,
  url: String,
  online_viewer: String,
  branch: String,
  tags: [String]
});

var User = mongoose.model('Repo', repoSchema);

module.exports = {
  Repo: Repo
}
