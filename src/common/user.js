var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  emails: [String],
  github_id: String,
  report_to: String,
  employer: String,
  photo: String,
  bio: String,
  tags: [String]
});

var User = mongoose.model('User', userSchema);

module.exports = {
	User: User
}
