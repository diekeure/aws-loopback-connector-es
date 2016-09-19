const loopbackConnectorEs = require('loopback-connector-es').ESConnector;
const util = require('util');

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

module.exports = AmazonLoopbackConnectorES;
