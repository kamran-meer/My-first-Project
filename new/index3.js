var age = 19; // Assign your age to the variable
alert("Your age is: " + age);

var time = 14;
alert("You have visited this site is: " + time);
// Check if this is the first visit
if (visitCount === null) {
    visitCount = 1;
    alert("Welcome! This is your first visit to this site.");
} else if (visitCount == 1) {
    visitCount = parseInt(visitCount) + 1;
    alert("Welcome back! This is your second visit to this site.");
} else if (visitCount > 1) {
    visitCount = parseInt(visitCount) + 1;
    alert("Welcome back! You have visited this site " + visitCount + " times.");
}
  // Declare a variable called birthYear and assign your birth year to it
  var birthYear = 1990;

  // Display the message in the browser
  document.write("My birth year is " + birthYear + ".");

  var dataType= "data type of my declared vaariable is number";

  document.write("dataType");
