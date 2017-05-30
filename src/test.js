'use strict'

// var counterparty = require('bitcoin')

// var client = new counterparty.Client({
//   host: 'http://public.coindaddy.io',
//   port: 4000,
//   user: 'rpc',
//   pass: '1234',
//   timeout: 30000
// })

// client.getSupply(function(err, res) {
//   if (err) return console.log(err);
//   console.log('Balance:', balance);
// })

// var rpc = require('json-rpc2');

// var client = rpc.Client.$create(4000, 'http://public.coindaddy.io', 'rpc', '1234');

// // Call add function on the server

// client.call('get_running_info',
//             {}, function(err, result) {
//     console.log(result)
//     console.log(err)
// });


//curl -X POST http://159.203.107.244:14000/api/ --user rpc:pass -H 'Content-Type: application/json; charset=UTF-8' -H 'Accept: application/json, text/javascript' --data-binary '{ "jsonrpc": "2.0", "id": 0, "method": "get_running_info" }'

// var Curl = require( 'node-libcurl' ).Curl;

// var curl = new Curl();

// curl.setOpt( 'URL', 'http://public.coindaddy.io' );
// curl.setOpt( 'FOLLOWLOCATION', true );
// curl.setOpt( 'PORT', 4000)
// curl.setOpt( 'USER', 'rpc')
// curl.setOpt( 'PASS', '1234')
// curl.setOpt( 'METHOD', 'get_running_info')

// curl.on( 'end', function( statusCode, body, headers ) {

//     console.info( statusCode );
//     console.info( '---' );
//     console.info( body.length );
//     console.info( '---' );
//     console.info( this.getInfo( 'TOTAL_TIME' ) );

//     this.close();
// });

// curl.on( 'error', curl.close.bind( curl ) );
// curl.perform();

var http = require('http');
var curl = require('curl-cmd');
 
var options = {
  hostname: 'http://public.coindaddy.io',
  port: 4000,
  path: '/api/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Accept': 'application/json, text/javascript'
  },
  auth: 'rpc:1234',
  body: { "jsonrpc": "2.0", "id": 0, "method": "get_running_info" }
};
 
console.log('=> %s', curl.cmd(options));
 
http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).end();

curl.cmd({host: 'daveeddy.com', port: 8080, method: 'PUT', path: '/data/something', headers: { 'User-Agent': 'Internet Explorer'}, auth: 'dave:secret' }, {ssl: true, verbose: true})
