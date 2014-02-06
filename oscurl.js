#!/usr/bin/env node
// Generated by CoffeeScript 1.7.1
(function() {
  var address, buf, host, hostport, hostportSplit, opts, osc, port, udp, val, _ref, _ref1;

  opts = (require('minimist'))(process.argv.slice(2));

  _ref = opts._, hostport = _ref[0], address = _ref[1], val = _ref[2];

  hostportSplit = hostport != null ? typeof hostport.split === "function" ? hostport.split(':') : void 0 : void 0;

  _ref1 = hostportSplit != null ? hostportSplit : [], host = _ref1[0], port = _ref1[1];

  if (!((host != null) && (port != null) && hostportSplit.length === 2 && (address != null) && (val != null))) {
    console.error('usage: oscurl [host]:[udp port] [osc address] [osc value]');
    process.exit(1);
  }

  udp = (require('dgram')).createSocket('udp4');

  osc = require('osc-min');

  buf = osc.toBuffer({
    address: address,
    args: [val]
  });

  udp.send(buf, 0, buf.length, +port, host, function(err, bytes) {
    return udp.close();
  });

}).call(this);
