console.log(process.memoryUsage());

for (let i = 0; i < 2000; ++i);

// heapTotal, heapUsed -> V8 engine memory usage
console.log(process.memoryUsage());
