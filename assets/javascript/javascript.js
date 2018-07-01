
// Initialize Firebase

var config = {
  apiKey: "AIzaSyBhcrwYy3bh1YWnpjxHzswqmavH-NnIjso",
  authDomain: "traintiming-d5ee9.firebaseapp.com",
  databaseURL: "https://traintiming-d5ee9.firebaseio.com",
  projectId: "traintiming-d5ee9",
  storageBucket: "traintiming-d5ee9.appspot.com",
  messagingSenderId: "983817595739"
};
  firebase.initializeApp(config);

  
  // create a variable to reference the database
  
  var database = firebase.database();

  
  
  $("#submitBtn").on("click", function (event) {
    event.preventDefault();
  
    // database.ref().set({
    //   test: 1
    // });
  
  // Capture User Inputs and store them into variables
  var trainName = $("#trainName-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var frequency = $("#frequency-input").val().trim();
  var firstTrain = $("#firstTrainTime-input").val().trim();
  
  
  // Console log each of the user inputs to confirm we are receiving them
  console.log(trainName);
  console.log(destination);
  console.log(frequency);
  console.log(firstTrain);
  
  
  database.ref().push({
    trainName: trainName,
    destination: destination,
    frequency: frequency,
    firstTrain: firstTrain,
  });
  
    // Output all of the new information into the relevant HTML sections
    $("#trainName-display").text(name);
    $("#destination-display").text(destination);
    $("#frequency-display").text(frequency);
    $("#firstTrainTime-display").text(firstTrainTime);
  
  
  });
  
  