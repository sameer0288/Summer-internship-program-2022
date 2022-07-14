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


4. ### What is the use of tsconfig.json file?

      The tsconfig. json file specifies the root files and the compiler options required to compile the project. 
      JavaScript projects can use a `jsconfig.json` file instead, which acts almost the same but has some JavaScript-related compiler flags enabled by default.
      
 ```js
  {
    "compilerOptions": {
        "target": "es5",
        "module": "system",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false
    },
    "exclude": [
        "node_modules"
    ]
}
```



5. ### What are the modules provided by the `fs` module?
  
      js fs module provides two different functions for writing files: writeFile and writeFileSync . Both functions take a file path and data as arguments, and write the data to the specified file.
   js file system module helps us store, access, and manage data on our operating system.

      - fs.access(): check if the file exists and Node.js can access it with its permissions
      - fs.appendFile(): append data to a file. If the file does not exist, it's created
      - fs.chmod(): change the permissions of a file specified by the filename passed. Related: fs.lchmod(), fs.fchmod()
      - fs.chown(): change the owner and group of a file specified by the filename passed. Related: fs.fchown(), fs.lchown()
      - fs.close(): close a file descriptor
      - fs.copyFile(): copies a file
      - fs.createReadStream(): create a readable file stream
      - fs.createWriteStream(): create a writable file stream
      - fs.link(): create a new hard link to a file
      - fs.mkdir(): create a new folder
      
    ```js
   import * as fs from "node:fs/promises";
   ```
   
   
6. ### What is API?

     API stands for Application Programming Interface. API is a software intermediary that allows two applications to talk to each other. It can be thought of as a           contract of service between two applications. This contract defines how the two communicate with each other using requests and responses.
	
      -  A developer extensively uses API’s in his software to implement various features by using an API call without writing the complex codes for the same. We can    create an API for an operating system, database systems, hardware system, for a JavaScript file or similar object oriented files. Also, an API is similar to a GUI(Graphical User Interface) with one major difference. 
       
      
7. ### What is JSON format?

     JSON stands for JavaScript Object Notation.
     - JSON is a lightweight format for storing and transporting data.
     - It is often used when data is sent from a server to a web page.
     - It is "self-describing" and easy to understand. For Example

```javascript
{
"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
}
```      


 8. ### Why we use JSON format for API?

     JSON allowed APIs to represent structured data in a way that simply was a better fit for the conceptual universe that most developers live in.
	
       - JSON API inspects entity type and bundle to provide URLs to access each one of them using the standard HTTP methods, GET, POST, PATCH, and DELETE (we will               discuss more on HTTP methods while talking about Document Structure).
       -  This meant that JSON was a much more natural fit for developers to exchange structured data. It did not require the rather inconvenient “data binding” and             “data serialization” steps that were notoriously difficult when using XML-based APIs.


 9. ###  What is a Framework?
    
       Frameworks are typically associated with a specific programming language and are suited to different types of tasks.
   Other advantages include:

    * More secure code
     * Simpler testing and debugging
     * Avoiding duplicate code
    *  Clean and easily adaptable code
    
    Advantages of using a software framework:
  - Assists in establishing better programming practices and fitting use of design patterns
  - Code is more secure
  - Duplicate and redundant code can be avoided
  - Helps consistent developing code with fewer bugs
  - Makes it easier to work on sophisticated technologies



10. ### How an HTTP Communication works ?

      Through the HTTP protocol, resources are exchanged between client devices and servers over the internet. Client devices send requests to servers for the                 resources needed to load a web page; the servers send responses back to the client to fulfill the requests.
     
 In addition to the web page files it can serve, a `web server` contains an HTTP `daemon`, a program that waits for HTTP requests and handles them when they arrive. A web browser is an HTTP client that sends requests to servers. When the browser user enters file requests by either "opening" a web file by typing in a URL or clicking on a hypertext link, the browser builds an HTTP request and sends it to the Internet Protocol address `(IP address)` indicated by the URL. The HTTP daemon in the destination server receives the request and sends back the requested file or files associated with the request.

![image](https://cdn.ttgtmedia.com/rms/onlineimages/whatis-how_http_works.png)

      
11. ### What is Middleware in ExpressJS.

      Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next function in the application's             request-response cycle.
      
      - The function(req,res,next){ } is a middleware in Express. js.

       Middleware functions can perform the following tasks:

    - Execute any code.
    - Make changes to the request and the response objects.
    - End the request-response cycle.
    - Call the next middleware function in the stack.
