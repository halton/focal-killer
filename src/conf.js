module.exports = {
  db: function () {
    return defaultDbConf;
  },
  www : function () {
    return defaultWwwConf;
  }
};

var defaultDbConf = {
  host: 'localhost',
  path: 'data/db',
  dbName: 'souceRanking',
  port: '27017'
};

var defaultWwwConf = {
  host: 'localhost',
  path: 'src/www',
  port: '1234'
};
