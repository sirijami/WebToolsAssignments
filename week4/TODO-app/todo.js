
var inputValue = document.getElementById('to-add');
var addButton = document.getElementById('add');
var itemList = document.getElementById('list');

 // Adds the element to the list
addButton.addEventListener('click', function(){
  var item = document.createElement('li');
  console.log(item);

 //Toggle between done or not done
  item.addEventListener('click', function(){
    if(item.style.textDecoration === "line-through"){
      item.style.textDecoration = 'none';
    }else {
      item.style.textDecoration = 'line-through';
    }
  });

 //Not allowing the user to add blank item to enter
  if(inputValue.value === ""){
    document.getElementById('errMessage').style.display = 'block';
    return;
  } else {
    document.getElementById('errMessage').style.display = 'none';
    item.textContent = inputValue.value;
  }
  itemList.appendChild(item);

  // Resets the default placeholder value
  inputValue.value= "";

  // All, Done, Pending Events
  var pendingItems = document.getElementById('pending');
  var doneItems = document.getElementById('done');
  var allItems = document.getElementById('all');

  allItems.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('taskHeading').innerHTML = "All Tasks";
    item.style.display = 'block';

  });

  doneItems.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('taskHeading').innerHTML = "Done Tasks";
    var check1 = item.style.textDecoration ;
    if(check1 != "line-through"){
      item.style.display = 'none';
    }else {
      item.style.display = 'block';
    }
  });

  pendingItems.addEventListener('click', function(e){
    e.preventDefault();
    var check = item.style.textDecoration ;
    document.getElementById('taskHeading').innerHTML = "Pending Tasks";

      if (check === "line-through"){
        item.style.display = 'none';
      }else{
        item.style.display = 'block';
      }
  });
});

//Add items to list on enter
inputValue.addEventListener('keyup', function(event){
  event.preventDefault();
  if(event.keyCode == 13){
    addButton.click();
  }
});
