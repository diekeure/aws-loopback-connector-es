# loopback-connector-elastic-search for Amazon ES

Elasticsearch datasource connector for [Loopback](http://strongloop.com/node-js/loopback/) on Amazon ES.

This connector extends [loopback-connector-elastic-search](https://github.com/strongloop-community/loopback-connector-elastic-search), by
adding the necesary config for Amazon ES, and including [http-aws-es](https://github.com/TheDeveloper/http-aws-es), to make signed requests.

Add this to the config block in your datasources.json file
```
    'name': 'elasticsearch',
    'connector': 'aws-loopback-connector-es',
    'amazonES': {
      'region': 'eu-west-1',
      'accessKey': 'YOUR ACCESS KEY',
      'secretKey': 'YOUR SECRET KEY'
    },
    'hosts': 'YOUR_ENDPOINT.eu-west-1.es.amazonaws.com',
```

For the rest of the options, please see [loopback-connector-elastic-search](https://github.com/strongloop-community/loopback-connector-elastic-search) and [http-aws-es](https://github.com/TheDeveloper/http-aws-es)