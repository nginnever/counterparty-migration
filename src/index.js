'use strict'

var rpc = require('node-json-rpc')
 
var options = {
  // int port of rpc server, default 5080 for http or 5433 for https 
  port: 14000,
  // string domain name or ip of rpc server, default '127.0.0.1' 
  host: '159.203.107.244',
  // string with default path, default '/' 
  path: '/api/',
  // boolean false to turn rpc checks off, default true 
  strict: true
}

var client = new rpc.Client(options)
client.enableAuth('user', 'pass')

client.call(
  {
  	"jsonrpc": "2.0", 
  	"method": "get_sends", 
  	"params": {"order_by": "tx_hash",
             "order_dir": "asc",
             "start_block": 280537,
             "end_block": 280539},
  	"id": 0
  },
  function (err, res) {
    // Did it all work ? 
    if (err) { console.log(err) }
    else { console.log(res) }
  }
)