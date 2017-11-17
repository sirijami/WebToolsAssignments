Create a todo list app (use the in-class version as a basis) that has the following things:

* Separate HTML, JS, and CSS files
* Ability to add items to the list
* Add occurs on clicking 'Add' or hitting Enter
* Add only occurs if there is text in the input field
* Adding clears the input field
* Clicking an item will toggle if it is "done"
* "done" is shown via css strike-through ( text-decoration: line-through )
* Below the list three options are shown: Done, Pending, and All
* One of those three is active.  Clicking on one of them makes it the active one.
* The active one is text.  The inactive ones are links.  (Watch out for default actions on links!  e.preventDefault() will stop that, where 'e' is the the click event passed to the listener)
* Whichever is active decides what tasks are shown: Only done tasks, only not done tasks (pending), or all tasks (both done and pending)

Save the files in this directory, and submit a "pull request" as described from the main page of this repo.  (the README.md)

**Don't forget to submit the pull request on the github website to merge to master branch!**  See the README.md in the root directory of this repo for tips.
