# Assignment Week 2 Day 4

## Theory:

1. ### What is Node JS?
    
     Node.js is a cross-platform environment and library for running JavaScript applications which is used to create networking and server-side applications. 
     
     - Node.js eliminates the waiting, and simply continues with the next request.
     - Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.
* `Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.`

**For Example** :
```js
var http = require('http');

// Create a server object:
http.createServer(function (req, res) {

	// Write a response to the client
	res.write('Wisflux Academy');

	// End the response
	res.end();

// The server object listens on port 8080
}).listen(8080);
```

2. ###  What is V8 Engine?

    V8 is Google's open-source high performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements     ECMAScript and WebAssembly and runs on Windows 7 or later, macOS 10.12+ and Linux systems that use x64, ARM or MIPS processors. V8 can run standalone and can also be embedded into other C++ applications.

       
    
3. ### What is Event Loop in NodeJS.
      Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks. The event loop allows Node.js to perform non-    blocking I/O operations despite the fact that JavaScript is single-threaded.    
     
     - The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
     - The event loop allows us to use callbacks and promises.
       
```js
 console.log("This is the first statement");
   
setTimeout(function(){
    console.log("This is the second statement");
}, 1000);
   
console.log("This is the third statement"); 
```
