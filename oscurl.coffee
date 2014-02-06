opts = (require 'minimist') process.argv[2...]
[hostport, address, val] = opts._
hostportSplit = hostport?.split?(':')
[host, port] = hostportSplit ? []

unless host? and port? and hostportSplit.length is 2 and address? and val?
  console.error 'usage: oscurl [host]:[udp port] [osc address] [osc value]'
  process.exit 1

udp = (require 'dgram').createSocket 'udp4'
osc = require 'osc-min'
buf = osc.toBuffer {address, args: [val]}
udp.send buf, 0, buf.length, +port, host, (err, bytes) ->
  udp.close()
