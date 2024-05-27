// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";






    // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCq7K2nHNoxrfBHKk3Mhr6--YqCRy7NV7Q",
    authDomain: "tictactoe-d7349.firebaseapp.com",
    projectId: "tictactoe-d7349",
    storageBucket: "tictactoe-d7349.appspot.com",
    messagingSenderId: "491580739595",
    appId: "1:491580739595:web:809acf5958a6bb0aae770e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);
// Initialize variables
//const auth = firebase.auth()
const auth = getAuth(app);

//const database = firebase.database()
const database = getDatabase(app);


// Get references to the email and password inputs, and the sign in and sign up buttons
var email = document.getElementById("email");
var password = document.getElementById("password");
var signInButton = document.getElementById("signInButton");
var signUpButton = document.getElementById("signUpButton");

// Add event listeners to the sign in and sign up buttons
signInButton.addEventListener("click", function() {
  // Sign in the user using Firebase's signInWithEmailAndPassword method
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(function() {
      // Redirect the user to the protected resources page
      window.location.href = "/game.html";
    })
    .catch(function(error) {
      // Show an error message
      alert(error.message);
    });
});

signUpButton.addEventListener("click", function() {
  // Sign up the user using Firebase's createUserWithEmailAndPassword method
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(function() {
      // Redirect the user to the protected resources page
      window.location.href = "/protected-resources.html";
    })
    .catch(function(error) {
      // Show an error message
      alert(error.message);
    });
});





//// Set up our register function
//function register () {
//  // Get all our input fields
//  email = document.getElementById('email').value
//  password = document.getElementById('password').value
//  full_name = document.getElementById('full_name').value
//  favourite_song = document.getElementById('favourite_song').value
//  milk_before_cereal = document.getElementById('milk_before_cereal').value
//
//  // Validate input fields
//  if (validate_email(email) == false || validate_password(password) == false) {
////    alert('Email or Password is Outta Line!!')
//    return
//    // Don't continue running the code
//  }
//  if (validate_field(full_name) == false || validate_field(favourite_song) == false || validate_field(milk_before_cereal) == false) {
////    alert('One or More Extra Fields is Outta Line!!')
//    return
//  }
//
//  // Move on with Auth
//  auth.createUserWithEmailAndPassword(email, password)
//  .then(function() {
//    // Declare user variable
//    var user = auth.currentUser
//
//    // Add this user to Firebase Database
//    var database_ref = database.ref()
//
//    // Create User data
//    var user_data = {
//      email : email,
//      full_name : full_name,
////      favourite_song : favourite_song,
////      winnings : 0,
////      milk_before_cereal : milk_before_cereal,
////      last_login : Date.now()
//    }
//
//    // Push to Firebase Database
//    database_ref.child('users/' + user.uid).set(user_data)
//
//    // DOne
////    alert('User Created!!')
//  })
//  .catch(function(error) {
//    // Firebase will use this to alert of its errors
//    var error_code = error.code
//    var error_message = error.message
//
////    alert(error_message)
//  })
//}
//
//// Set up our login function
//function login () {
//  // Get all our input fields
//  email = document.getElementById('email').value
//  password = document.getElementById('password').value
//
//  // Validate input fields
//  if (validate_email(email) == false || validate_password(password) == false) {
////    alert('Email or Password is Outta Line!!')
//    return
//    // Don't continue running the code
//  }
//
//  auth.signInWithEmailAndPassword(email, password)
//  .then(function() {
//    // Declare user variable
//    var user = auth.currentUser
//
//    // Add this user to Firebase Database
//    var database_ref = database.ref()
//
//    // Create User data
//    var user_data = {
//      last_login : Date.now()
//    }
//
//    // Push to Firebase Database
//    database_ref.child('users/' + user.uid).update(user_data)
//
//    // DOne
////    alert('User Logged In!!')
//
//  })
//  .catch(function(error) {
//    // Firebase will use this to alert of its errors
//    var error_code = error.code
//    var error_message = error.message
//
////    alert(error_message)
//  })
//}
//
//
//
//
//// Validate Functions
//function validate_email(email) {
//  expression = /^[^@]+@\w+(\.\w+)+\w$/
//  if (expression.test(email) == true) {
//    // Email is good
//    return true
//  } else {
//    // Email is not good
//    return false
//  }
//}
//
//function validate_password(password) {
//  // Firebase only accepts lengths greater than 6
//  if (password < 6) {
//    return false
//  } else {
//    return true
//  }
//}
//
//function validate_field(field) {
//  if (field == null) {
//    return false
//  }
//
//  if (field.length <= 0) {
//    return false
//  } else {
//    return true
//  }
//}