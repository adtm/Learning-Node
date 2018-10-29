// REPL - read-eval-print-loop

// REPL can be used to try out native modules 
// or see how objects look behind the scene
node 
> qs = require('querystring')
> val = qs.parse("file=main&file=second&test=one").file
// [ 'main', 'second' ]

// You can save the REPL session with .save
> .save ./save.js

// other commands:
> .exit
> .load
> .clear