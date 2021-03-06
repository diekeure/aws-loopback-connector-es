const loopbackConnectorEs = require('loopback-connector-es').ESConnector;
const util = require('util');

module.exports.initialize = function (dataSource, callback) {
    var settings = dataSource.settings || {};

    if(typeof settings.hosts !== 'string') {
      console.log('Warning: hosts is not a string:', settings.hosts);
      console.log('Using ' + settings.hosts[0].host + ' on port 80 for http or 443 for https');
      settings.hosts = settings.hosts[0].host
    }

    dataSource.connector = new AmazonLoopbackConnectorES(settings, dataSource);

    if (callback) {
        dataSource.connector.connect(callback);
    }
};

util.inherits(AmazonLoopbackConnectorES, loopbackConnectorEs);

function AmazonLoopbackConnectorES(settings, datasource) {
  loopbackConnectorEs.call(this, settings, datasource);
}

AmazonLoopbackConnectorES.prototype.getClientConfig = function(){
  var cfg = loopbackConnectorEs.prototype.getClientConfig.call(this);
  cfg.connectionClass = require('http-aws-es');
  cfg.amazonES = this.settings.amazonES;
  return cfg;
}

module.exports.name = AmazonLoopbackConnectorES.name;
module.exports.AmazonLoopbackConnectorES = AmazonLoopbackConnectorES;
