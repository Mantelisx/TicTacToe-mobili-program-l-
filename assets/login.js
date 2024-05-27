// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCq7K2nHNoxrfBHKk3Mhr6--YqCRy7NV7Q",
      authDomain: "tictactoe-d7349.firebaseapp.com",
      projectId: "tictactoe-d7349",
      storageBucket: "tictactoe-d7349.appspot.com",
      messagingSenderId: "491580739595",
      appId: "1:491580739595:web:809acf5958a6bb0aae770e"
    };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById("email2");
var password = document.getElementById("password2");
window.login= function(e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      alert("logined Successfully")
      var aaaa =  (success.user.uid);
      localStorage.setItem("uid",aaaa)
      console.log(aaaa)



      window.location.replace('UserPage.html')
     // localStorage.setItem(success,user,uid)

    })
    .catch(function (err) {
      alert("login error"+err);
    });

  console.log(obj);
}







































const dbRef = firebase.database().ref('user/mantas/Laimeta');
dbRef.once('value')
  .then(snapshot => {
    const currentValue = snapshot.val();
    // Now you have the current value of Laimeta
    // Proceed to increment and update it
  })
  .catch(error => {
    console.error('Error retrieving data:', error);
  });

  const updatedValue = firebase.database.ServerValue.increment(1);

  dbRef.set(updatedValue)
  .then(() => {
    console.log('Laimeta incremented and updated successfully!');
  })
  .catch(error => {
    console.error('Error updating data:', error);
  });