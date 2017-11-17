# Final Project Fulfilled Criteria

*Note*: While most of these criteria are good concepts for any project, some are subjective and others conditional (using a SPA with no server-side generated initial HTML is not always the best choice, for example, but sometimes it may well be the best choice).  

* Met = x
* Not met = -

## App Features
* [x] The app MUST allow multiple users
* [x] The app MUST be about a collection of various items
* [x] The app MUST allow modification of this collection
* [x] The app MUST have some status change for items

### App Features - User
* [x] The app MUST allow new users to register
* [x] The app MUST allow users to login 
* [x] The app MUST require a username and password to login
* [x] The app MUST allow users to logout
* [x] The app MUST handle common login expectations (e.g. username is not case-sensitive, password IS case-sensitive)
* [x] The app MUST show a user if they are logged in
* [x] The app MUST allow a user to set some personal information (e.g. Actual Name)
* [-] The app MUST load and display some saved personal information each visit by that user
* [-] The app MUST allow users to edit that saved personal information

### App Features - Listing
* [x] The app MUST have a page listing the items
* [x] The listing MUST show a summary of all items
* [x] The listing MUST include (directly or implied) the status field for each item
* [x] The listing MUST be able to filter the displayed items by some criteria
* [x] The listing MUST show if the listing is filtered and how
* [x] The listing MUST allow a user to change how and if it is filtered
* [-] The listing MUST be able to be sort the displayed items by some criteria
* [-] The listing MUST show how the listing is sorted
* [-] The listing MUST allow the user to change how it is sorted

### App Features - Item 
* [-] The app MUST allow the addition and editing of items (these can be different displays)
* [x] The app MUST provide informative validations on any required fields (minimum 1)
* [-] The app MUST provide informative validations on any fields that have restricted formats (minimum 1)
* [-] The user MUST be able to save the addition/change 
* [-] The user MUST be able to cancel the addition/change
* [-] The app MUST have the original information if a change is cancelled

### App Features - Item Status
* [x] The app MUST have some form of "status" field for each item
* [x] The app MUST display the item status in the listing
* [x] The app MUST update the status field based on a user action 
* [x] The app must NOT allow the editing of the status field directly
* [x] The app MUST have at least 3 status states
*     The app MAY have more than 3 status states
* [x] The app must NOT show or allow non-sensical status transitions
* [x] The app MUST have status states that have at least 1 non-sensical status transition (that is not shown or allowed)
*     The app MAY have status states that include more than 1 non-sensical status transition (that is not shown nor allowed)
*     The app MAY gather additional information to associate with a status change
* [x] The status change MUST be understandable as part of the purpose of the app

## Composition
* [x] The app MUST be a single page application from static html, js, and css files
* [x] The app MUST use React + React Dom
* [x] The app must NOT use a boilerplate/project template other than create-react-app
* [x] The app must NOT use any 3rd party state management library 
    * No Redux, No Flux, etc
* [x] The app must NOT use any 3rd party React components 
    * No Bootstrap, No Foundation, etc
* [x] The app must NOT use any other 3rd party JS library EXCEPT polyfills
    * No lodash, No underscore, No moment.js, etc
    * No Firebase, No oAuth, etc.
* [x] The app must NOT use any other 3rd party HTML library
* [x] The app must NOT use any 3rd party CSS libraries (Less and SASS are fine)
* [x] The app must NOT use any 3rd party service calls
    * No Firebase, No google APIs, etc
*     The app MAY use 3rd party icons and images
    * FontAwesome, etc okay IF you follow the other rules 
* [-] The app MUST have permission to use those icons/images (see Delivery - README.md)

## App Completeness and Quality
* [x] The app features MUST be discoverable (users should realize what they can do and how)
* [x] The app MUST be understandable as a complete single app
* [x] The app MUST handle service errors and inform the user in a useful way (what should the user do now?)
* [x] The app MUST have enough attention paid to appearance (pretty not required, painful is bad)
* [x] The app MUST follow common web application customs and common user expectations
* [x] The app MUST allow understandable navigation between the features
* [x] The app must NOT show warnings, errors, or messages in the browser console when run  (runtime issues MAY report to console)
* [x] The app must NOT leave a user confused - you MUST indicate some response to user actions 

## Code Quality and Standards
* [x] The js/jsx files MUST pass linting using the built in linting rules without errors or warnings
* [x] The code MUST be consistent and avoid bad practices

### Code Quality and Standards - Security
* [x] The app must NOT store the user's password anywhere on the client-side - send it to login and don't save it past that
* [x] The app must NOT expose the user password to other users 
* [x] The app must NOT allow users to modify or see other users' personal data other than username, email, and name (if you have those)
*     EXCEPTION: Security concerns over using HTTP instead of HTTPS are NOT a problem for the project
*     EXCEPTION: We are NOT concerned about users reading/modifying the JS in the browser

### Code Quality and Standards - JSX
* [x] All React components MUST be in .jsx files 
* [x] All React components MUST be one to a file
* [x] All React components MUST have names that match the filenames
* [x] All React component names (and filesnames) MUST be in CapitalCase.
* [x] Code must NOT alter the DOM directly beyond React
* [x] Code must NOT use dangerouslySetHtml with any user-provided text, and should try to avoid using it at all

### Code Quality and Standards - Architecture
* [x] React code MUST reasonably minimize coupling between components
* [x] React code MUST handle application state in a maintainable way
* [x] The filesystem structure (directories, naming conventions) MUST make maintenance easier
* [x] Different content (HTML, JSX, CSS, JS) MUST be in separate files (JSX may have inline styles if you desire)

### Code Quality and Standards - JS 
* [x] Code MUST use const and let as described in class
* [x] Code MUST have consistent indentation
* [-] Code MUST use promises (particularly from fetch) sensibly
* [x] Code MUST strive to be clear, understandable, skimmable, and maintainable
* [x] Code MUST strive to be reasonably DRY
* [x] Code must NOT use var
* [x] Code must NOT use alert
* [x] Functions must NOT do too much nor be too large
* [x] Files must NOT do too much nor be too large

### Code Quality and Standards - Service calls
* [x] Code MUST make service calls in a (mostly) RESTful manner
* [x] Code MUST call webservices via fetch()
* [x] Code MUST call the provided services for the appropriate reasons and in the appropriate way

## Delivery
* [x] The app code MUST be submitted in your class final-project github repo as a pull request (PR)
* [x] The app code MUST include a package.json

### Delivery - Pull Request
* [x] The PR MUST be received by the project deadline (but a late project is better than no project)
* [x] The PR MUST be from the branch "final-project", named EXACTLY that. (I suggest developing in a different branch first)
* [x] The PR MUST have an appropriate .gitignore file
* [x] The PR MUST contain a useful and appropriate README.md (A high-level overview of what the app does)
* [x] The PR MUST contain source code to recreate and modify the built version
* [x] The PR must NOT have node_modules within it
* [-] The PR must NOT have files that are NOT part of the project in it

### Delivery - package.json
* [x] The package.json MUST list the author and include an email address
* [x] The package.json MUST contain the all the necessary dependency information

### Delivery - README.md
* [x] The README.md file MUST be in the github markdown format (like this file)
* [x] The README.md file MUST tell me what your status states are
* [x] The README.md file MUST give me enough information that I can tell which status state transitions are/are not allowed
* [x] The README.md file MUST list any 3rd party icons/images used, listing the url and the license

### Delivery - Code
* [x] I MUST be able to run "npm install; npm start" to get a dev version of the app running after cloning your repo
* [-] There MUST be a build/ directory that houses a usable application (HTML + files) without the rest of the package
* [x] There MUST be an "appkey" file, which can be .js or .json
* [x] The appkey file must NOT have more in it than the appkey value and any required lines to get it into the app (if any)
* [-] I MUST be able to put a new appkey value in the appkey file and use the app with a clean storage

### Extra credit 
* [x] Item Search

Submission 1:
* Met: 47
* Not Met: 54

Submission 2:
* Met: 64 
* Not Met: 38

Submission 3:
* Met: 79
* Not Met: 23

Submission 4: 
* Met: 85
* Not Met: 17

Final Submission:
* Met: 87
* Not Met: 15

Final Submission Notes:
* You did a very thorough job of finding every small point to earn - that is not a criticism, attention to detail is good.
* While you did add reading a dynamic inventory, you never write to it.  The core functionality of the app is just not there.
* I'm glad to see the user help on login/register errors, but your error handling is still piecemeal and brittle.  

Current Project Grade: B 
