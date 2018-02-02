var config = {
  production: {
      port: process.env.port,
      db: 'mongodb://pedroquino-mongodb.cloudapp.net/taskcountdown'
  },
  development: {
    port: 3000,
    db: 'mongodb://192.168.1.11:27017/taskcountdown'
  }
};

if (process.env.port) {
  module.exports = config.production;
}
else {
  module.exports = config.development;
}
