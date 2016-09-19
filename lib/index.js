const loopbackConnectorEs = require('loopback-connector-es').ESConnector;
const util = require('util');

module.exports.initialize = function (dataSource, callback) {
    var settings = dataSource.settings || {};

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
  cfg.amazonES = this.setting.amazonES;
  return cfg;
}

module.exports.name = AmazonLoopbackConnectorES.name;
module.exports.AmazonLoopbackConnectorES = AmazonLoopbackConnectorES;
