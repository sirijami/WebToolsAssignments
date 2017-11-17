You will recall from last class that we talked about service calls, and using the fetch API to do them.

Here is a simple fetch API call:

fetch('/relative/path')
.then( (response) => response.json())
.then( (results) => {
  console.log({results});
})
.catch( (err) => console.warn(err) );

Notice:

* No semicolons above.  That's not because I'm revoking my draconian stance against missing semicolon - quite the opposite.  The above is one long line, just wrapped for easier reading.
* fetch returns a promise

Promises: 

As previously discussed, a Promise is an object that tracks its resolved/rejected state, and calls the appropriate callback once it is resolved or rejected.
The .then() method registers a callback for if/when the promise is resolved.
The .catch() method (no relation to try/catch) registers a callback for if/when the promise is rejected.
In the case of fetch, the promise should only be rejected when there are networking errors.   Reaching the url and having it give you an error message that you receive is considered a "successful" delivery of that request/response by fetch.

.then() and.catch() both return a promise themselves, after registering (but not yet calling!) the callback.  This is how we can chain them like the above example.

The registered callbacks will be called when two things are true:
* The necessary condition (reject/resolve) has occured
* You have no code running, the system is just waiting for an event to react to.

When you have a chain of promises, (as with the then() chain above), each subsequent one requires the one before it to resolve/reject so it can resolve/reject.  When a promise is resolved/rejected, it may do so with a value.  If it does, that value is passed to the appropriate callback.

In the above example, the "response" that the first then() gets is the value that the fetch promise was resolved with (the systen does that in this case, but we can manually make and resolve promises if we want to).  For chaining, the return value of a callback is what the next promise is resolved with.  So response.json() IS results in the above example.  The first then() callback recieved the response, and returned response.json().   The second then() callback receives that response.json() output, and itself returns nothing (undefined), and so if there was another then() in the chain, it's callback would be called with no arguments, but would still be called.

Promise and async can be a little weird, but they are very powerful.

Fetch() has more options.  You'll recall that there are HTTP verbs, and that params can be sent in the URL (usually GET), or in the body (usually POST, PUT, and PATCH).  Here is how that is done with fetch (this is the basic and common usage, there are more complex options).

fetch() takes two arguments - the first, a string that is the desired url - this can be an absolute domain or a relative link.  (but is subject to Same Origin Policy and CORS).   The second argument is optional, and it's an object of options.   The ones we care about are 'body', which can be a string of data, and 'method', which is the http verb.

A string?  So an object won't work.  :(   But there is hope!   JSON, you'll recall, is a string.   Calling JSON.stringify(myVariable) will the JSON for that.   (no serializing functions)  Calling JSON.parse( aJsonString ) will give you an object/string/array/whatever the JSON represents.   In fact, that's what response.json() is doing - if the service call returns json, response.json() will convert it to an object (or whatever), and if there is a parsing problem, it would cause that promise to reject which would then be caught by the catch();   A service call doesn't have to return JSON - it can be just about anything as long as it could be serialized to text to send over HTTP.   JSON is, however, very common, which is why there is a convenience method for it.

So lets use this:

A GET request:

fetch('http://jsonplaceholder.typicode.com/posts/1') // could have query params in the URL if we wanted
.then( (response) => response.json() )
.then( ( post ) => {
  console.log('this is the post object', post);
})
.catch( (err) => console.warn(err) );

Same thing:

fetch('http://jsonplaceholder.typicode.com/posts/1', { method: 'GET' })
.then( (response) => response.json() )
.then( ( post ) => {
  console.log('this is the post object', post);
})
.catch( (err) => console.warn(err) );

a POST request:   (usually this means you are sending data, but not always)

fetch('http://jsonplaceholder.typicode.com/posts', { method: 'POST', body: JSON.stringify({ thisis: 'a sample object'}) })
.then( (response) => response.json() ) 
.then( (result) => console.log({result}) )
.catch( (err) => console.warn(err) );

Well great, but it seems most services are inaccessible because of CORS unless we have an API key or some form of access.   What fun is that?

Your task is to write the _client_ of an online tic-tac-toe game.  The services and server are already written.   You just need to fill in any HTML, JS, and CSS.

About the server:    
run `npm install` in this directory to load any dependencies from the package.json (make sure you have node_modules/ in your .gitignore!)
run `npm start` in this directory to start the server (will run until you kill it or it crashes).

Go to http://localhost:8000/ and see the page!

Edit public/index.html to put in your game.   
Here is the API you will need to use:

GET from http://localhost:8000/newGame  (or just /newGame) will return you an object representing a new tic-tac-toe board.   You could get away without this, but don't - you want the practice calling services and dealing with their data.

The response is a JSON file representing an object with the following params:

* board: a 2 dimensional array (that is, an array of arrays) that represent the pieces.  Valid values are ' ', 'X', and 'O', and the board is 3x3, with the upper left being 0,0 and the lower right being 2,2
* currentPlayer:  Either X or O, it says whose turn it is.   So if you get it and it says 'X', the X player needs to go.   After they do, to send the data back, make sure you then send it with 'currentPlayer: 'O'.
* progress:  A string that represents the game status.   While playing it will be 'In Progress'.  If someone has won, it will be 'Won' AND currentPlayer will show who won.  In the likely case of a draw, it will say 'Draw'.   

You should take this data and populate the board, then let the human player take a turn.

Send their turn as follows:

POST to http://localhost:8000/takeTurn (or just /takeTurn).   Send the data as JSON in the body of the POST.  Send the same object (or similar object) that you got from newGame, but fill in the player's turn in the board, and update currentPlayer;

Tinker with this until you have it working.   You can drop fetch commands in the console on the browser - that may be easier to test some things than changing the file and reloading repeatedly. 

General advice and requirements
* If it stops working altogether, check to make sure the server hasn't crashed - it may not be very tolerant.
* Outside of that though, you don't need to restart the server to see changes in your files, just refresh the browser.
* The computer player can take a few seconds to make that first move
* Make sure you handle all the win/lose/draw conditions
* Don't store data in the DOM (positional info is okay - you're not using that as the source of the data)
* Make sure people can't click fast and send in two turns before the computer can respond !
* Worry about game appearances last - make it work first
* Don't use other libraries - no jquery, no lodash, etc.   This include css libraries - no bootstrap, no foundation.
* Don't just make it work, make sure the code is clean.
* Use your linter!
* For bonus points, you can add ` difficulty: 'Hard' ` to /takeTurn, and the computer player will get much harder.  Can you make this optional for the player?
* Let the player restart the game without reloading the page.
* Make sure your pull request is clean - no unneeded files
* Make sure to use separate files for your HTML, JS, and CSS


