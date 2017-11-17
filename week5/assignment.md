# Servers, linting, and npm

In this directory is a server.js

1) run npm init
2) use npm to install eslint
3) use npm to install express
4) take your todo app and place it in the `public` directory here
5) Verify that `node server.js` lets you hit localhost:8000/todo.html and it works
6) Then modify your todo app to use a template SOMEWHERE (doesn't have to be everywhere, but it does have to involve at least one variable substitution)
7) Also wrap your JS inside an IIFE (Immediately Invoked Function Express)
8) And make your JS pass eslint (complaints about Handlebars are fine)

You can include the handlebars library in your HTML by having a script tag like:
``` <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.10/handlebars.min.js"></script> ```

to include a template on your page, have this in your HTML:
```
<script id="task-template" type="text/x-handlebars-template">
  <p> This is a sample template that will show the value of the foo property of the passed object: {{foo}}</p>
</script>
```  

to use the template, you need to get the the above element using getElementById (or any other way)
then copy the innerHTML as a string to a variable.
Running Handlebars.compile(NAME_OF_YOUR_VAR_CONTAINING_TEMPLATE_STRING) and saving the result.
This result is a function.  Calling it and passing an object will return the template with any references replaced with the matching property of the object.  E.g.
```javascript
var templateFunc = Handlebars.compile(myTemplateText);
var result = templateFunc({ foo: 'I was replaced' });
```
If you used the above example template, the `{{foo}}` would be replaced with `I was replaced`

