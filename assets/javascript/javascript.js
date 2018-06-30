
// Initialize Firebase

var config = {
  apiKey: "AIzaSyD4BDw7ADNnLlBt8cIXer34_QjYaEEYMKs",
  authDomain: "traintimings-67897.firebaseapp.com",
  databaseURL: "https://traintimings-67897.firebaseio.com",
  projectId: "traintimings-67897",
  storageBucket: "traintimings-67897.appspot.com",
  messagingSenderId: "571998930742"
  };
  firebase.initializeApp(config);

  
  // create a variable to reference the database
  
  var database = firebase.database();
  
  $(".btn").on("click", function (event) {
    event.preventDefault();
  
    database.ref().set({
  
    });
  
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
  })
  
    // Output all of the new information into the relevant HTML sections
    $("#trainName-display").text(name);
    $("#destination-display").text(destination);
    $("#frequency-display").text(frequency);
    $("#firstTrainTime-display").text(firstTrainTime);
  
  
  });
  
  