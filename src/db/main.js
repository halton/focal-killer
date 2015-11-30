var childProcess = require('child_process')
var conf = require('../conf');
var path = require('path');
var mkdirp = require('mkdirp')

module.exports = {
  start : function() {
    dbPath = path.join(__dirname, '../../', conf.db().path);

    mkdirp(dbPath, function (err) {
      if (err) console.error(err)
      else startDb(dbPath, conf.db().port)
    });
  }
}

var startDb = function (path, port) {
  console.log('DB server started at path: ' + path);
  console.log('DB server started at port: ' + port);

  childProcess.exec('mongod --dbpath=' + path +' --port=' + port,
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
  });
}
