var conf = require('../conf');
var mongoose = require('mongoose');
var User = require('../common/user.js').User;

module.exports = {
  start : function() {
    url = 'mongodb://' + conf.db().host + '/' + conf.db().dbName;
    mongoose.connect(url);
    var db = mongoose.connection;

    db.on('error', function (err) {
      console.log('connection error', err);
    });
    db.once('open', function () {
      console.log('connected.');
    });

    console.log('WWW server started at port: ' + conf.www().port);
    addTestUser();
  }
}

var addTestUser = function () {
  var halton = new User({
    name: 'Halton Huo',
    emails: ['halton.huo@intel.com'],
    github_id: 'halton',
    report_to: 'sdfds',
    employer: 'intel',
    photo: 'sdfasdf',
    bio: 'resret',
    tags: ['Intel']
  });

  halton.save(function (err, data) {
    if (err) console.log(err);
    else console.log('Saved ', data );
  });
}
