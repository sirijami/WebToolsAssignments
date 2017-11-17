Word game!

* setup a server (using either the server.js from todo or the server.js from tictactoe - you just want something to serve up static file from.  You do NOT need to edit said server.js for the assignment).
* Make sure the server works (has a proper package.json that will npm install the correct dependencies, that your files are in the correct directory to be served up as static files)
* Write separate HTML, JS, and CSS files for the below.  

Write a function that will pick a random word from this list:

TREES
START
TASER
STARE
TIGER
RESET
CHUNK
CHANT
TEACH
REACH

Write a page that will:

Pick a random word (but not display it)
Let the user enter a 5 letter word (does not have to be from this list)
You will show how many letters their word has in common with the secret word
Until they guess the secret word, they can continue to enter words and see the count
Previous guesses and counts are shown in a growing list - not blanked out until a new game starts
Once they have the secret word, tell them and let them start a new game.

Do not use alert()
Do not write this server side
Do not use outside libraries (for JS or CSS)

_DO_ consider that the game logic may move to a service call - make it as painless as you can to be able to send guesses and get counts back to a service, even though you aren't doing that now.
Do run a linter over your code and include an eslintrc in your code
