/**
 * All streams are instances of EventEmitter
 */

process.stdin.resume();
process.stdin.pipe(process.stdout);
