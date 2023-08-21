const displayNormal = () =>
    (document.getElementById("div1").style.color = "yellow");
  

  const displayDate = () =>
    (document.getElementById("div1").style.color = "green");

function doSomethingAsync(callback) {
  setTimeout(function() {
    console.log("Task is done!");
    callback(); // This is the callback function being called
  }, 1000);
 }

function afterTaskIsDone() {
  console.log("Callback function executed!");
 }

doSomethingAsync(afterTaskIsDone); // Pass the function as an argument
