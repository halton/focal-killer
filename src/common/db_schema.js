var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userTagSchema = new Schema({
	name: String
});

var repoTagSchema = new Schema({
	name: String
});

var userSchema = new Schema({
  name: String,
  email: String,
  email_alt: String,
  github_id: String,
  report_to: String,
  employer: String,
  photo: String,
  bio: String,
  tags: [userTagSchema],
});

var repoSchema = new Schema({
	name: String,
	url: String,
	online_viewer: String,
	tags: [repoTagSchema]
});

var cachedSchema = new Schema({
	github_sha1: String,
	repo_id: String,
	user_id: String,
	is_manually: Boolean,
	commit_time: Time,
	touched_files: Number,
	addition_lines: Number,
	deletion_lines, Number
})
