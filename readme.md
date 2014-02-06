# `oscurl`

a simple command line utility for sending osc messages, much like curl.

## installing it

1. get [`node.js`](http://nodejs.org/)
2. run `npm install oscurl -g` from the command line

## using it

    oscurl localhost:8000 /hello 4

will send the number 4 to the `/hello` osc address to the osc server running on localhost on udp port 8000.

## license

[boost software license 1.0](http://www.boost.org/LICENSE_1_0.txt)
