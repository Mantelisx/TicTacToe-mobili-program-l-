// Your web app's Firebase configuration
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

// Set database variable
var database = firebase.database()

function save() {
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var username = document.getElementById('username').value
  var say_something = document.getElementById('say_something').value
  var favourite_food = document.getElementById('favourite_food').value

  database.ref('users/' + username).set({
    email : email,
    password : password,
    username : username,
    say_something : say_something,
    favourite_food : favourite_food
  })

  alert('Saved')
}

function get() {
  var username = document.getElementById('username').value

  var user_ref = database.ref('users/' + username)
  user_ref.on('value', function(snapshot) {
    var data = snapshot.val()

    alert(data.email)

  })

}

function update() {
  var username = document.getElementById('username').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  var updates = {
    email : email,
    password : password
  }

  database.ref('users/' + username).update(updates)

  alert('updated')
}

function remove() {
  var username = document.getElementById('username').value

  database.ref('users/' + username).remove()

  alert('deleted')
}