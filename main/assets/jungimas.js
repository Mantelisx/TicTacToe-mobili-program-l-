//// <script type="module">
//        // Import the functions you need from the SDKs you need
//     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
//     import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
//
//// Your web app's Firebase configuration
//    const firebaseConfig = {
//        apiKey: "AIzaSyCq7K2nHNoxrfBHKk3Mhr6--YqCRy7NV7Q",
//        authDomain: "tictactoe-d7349.firebaseapp.com",
//        projectId: "tictactoe-d7349",
//        storageBucket: "tictactoe-d7349.appspot.com",
//        messagingSenderId: "491580739595",
//        appId: "1:491580739595:web:809acf5958a6bb0aae770e"
//    };
//
//// Initialize Firebase
//     const app = initializeApp(firebaseConfig);
//
////get ref to database services
//      const db = getDatabase(app);
//
//      document.getElementById("submit").addEventListener('click', function(e){
//       e.preventDefault();
//       set(ref(db, 'user/' + document.getElementById("username").value),
//       {
//
//         username: document.getElementById("username").value,
//         email: document.getElementById("email").value,
//         PhoneNumber: document.getElementById("phone").value,
//         total_games: 0
//
//       }
//
//       );
//        document.getElementById('login-successful').textContent = 'zjbs!';
//        // alert("Login Sucessfull  !");
//      })
//
//
//var incrementButton = document.getElementById('incrementButton');
//incrementButton.addEventListener('click', incrementCounter);
//
//function incrementCounter() {
//      var username = document.getElementById('username').value
//      var email = document.getElementById('email').value
//      var total_games = document.getElementById('phone').value
//
//      var user_ref = database.ref('user/' + username)
//      user_ref.on('value', function(snapshot) {
//        var data = snapshot.val()
//
//        alert(data.email)
//
//
//      var updates = {
//          total_games : total_games,
//        }
//
//        database.ref('user/' + username).update(updates)
//
//      })
////    </script>
//
//
//
//
//
//
////<!--login-->
////    <script type="module">
//        // Import the functions you need from the SDKs you need
////        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
////        import { getDatabase, ref, set, get, child, getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
//
//        // Your web app's Firebase configuration
////        const firebaseConfig = {
////            apiKey: "AIzaSyCq7K2nHNoxrfBHKk3Mhr6--YqCRy7NV7Q",
////            authDomain: "tictactoe-d7349.firebaseapp.com",
////            projectId: "tictactoe-d7349",
////            storageBucket: "tictactoe-d7349.appspot.com",
////            messagingSenderId: "491580739595",
////            appId: "1:491580739595:web:809acf5958a6bb0aae770e"
////        };
//
//        // Initialize Firebase
////        const app = initializeApp(firebaseConfig);
//
//        // Get a reference to the auth service
////        const auth = getAuth(app);
//
//        document.getElementById("submit2").addEventListener('click', (event) => {
//            event.preventDefault();
//            const email = document.getElementById("email").value;
//            const phoneNumber = document.getElementById("phone").value;
//            signInWithEmailAndPassword(auth, email, phoneNumber)
//                .then((userCredential) => {
//                    // Signed in
//                    const user = userCredential.user;
//                    document.getElementById('login-successful').textContent = 'User logged in successfully!';
//                   // alert('User logged in successfully!');
//                })
//                .catch((error) => {
//                document.getElementById('login-successful').textContent = 'pizdu';
//                    const errorCode = error.code;
//                    const errorMessage = error.message;
//                    console.error('Error logging in user:', errorCode, errorMessage);
//                });
//        });
////    </script>





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
//sessionStorage.clear()
  var email = document.getElementById('email').value
//  sessionStorage.setItem("emailas", email)
//  var useris = sessionStorage.getItem("emailas");

  var password = document.getElementById('password').value

  var username = document.getElementById('username').value
//  sessionStorage.setItem("usernameas", username)
//  var pastas = sessionStorage.getItem("emailas");

  var say_something = document.getElementById('say_something').value

  var favourite_food = document.getElementById('favourite_food').value

      sessionStorage.setItem("laimejimai", 0)
      var laimejimai = sessionStorage.getItem("laimejimai");



  database.ref('users/' + username).set({
    email : email,
    password : password,
    username : username,
    say_something : say_something,
    favourite_food : favourite_food,
    total_games:Number(laimejimai),
    visualisation:0


  })

//  alert('Saved')
}



//function login() {
//
//  }


function update_total_games() {
  var username = document.getElementById('username').value

  var user_ref = database.ref('users/' + username)
  user_ref.once('value', function(snapshot) {
    var data = snapshot.val()

    //alert(data.email)
    var naujas = parseInt(data.total_games)+1;


      var updates = {
        total_games : naujas
      }

      database.ref('users/' + username).update(updates)


  })

}

function get() {
  var username = document.getElementById('username').value

  var user_ref = database.ref('users/' + username)
  user_ref.on('value', function(snapshot) {
    var data = snapshot.val()

    //alert(data.email)
    document.getElementById('login-successful').textContent = data.total_games;

  })

}


function toggleTheme1(stylesheet) {
             const theme = document.getElementById('theme');
             theme.setAttribute('href', stylesheet);
}

function get_visual() {
  var username = document.getElementById('username').value

  var user_ref = database.ref('users/' + username)
  user_ref.on('value', function(snapshot) {
    var data = snapshot.val()

    //alert(data.email)
    if(parseInt(data.visualisation)===1){

        toggleTheme1('login_styles.css');

    }

  })

}


function update_visual() {
  var username = document.getElementById('username').value

  var updates = {
    visualisation : 0,
  }

  database.ref('users/' + username).update(updates)

}

function update_visual2() {
  var username = document.getElementById('username').value

  var updates = {
    visualisation : 1,
  }

  database.ref('users/' + username).update(updates)

}




function getusername() {
  var username = document.getElementById('username').value

  var user_ref = database.ref('users/' + username)
  user_ref.on('value', function(snapshot) {
    var data = snapshot.val()

    //alert(data.email)
    document.getElementById('naudotojas').textContent = data.username;

  })

}

function getnumberofgames() {
  var username = document.getElementById('username').value

  var user_ref = database.ref('users/' + username)
  user_ref.on('value', function(snapshot) {
    var data = snapshot.val()

   var totalgames_string = data.total_games
   if (data.total_games === undefined){
        totalgames_string ="0"
   }
    //alert(data.email)
    document.getElementById('kiek-suzaista').textContent = 'Iš viso sužaidėte: '+ totalgames_string.toString() + ' kartų (-us).';

  })

}

function update() {
  var username = document.getElementById('username').value
  var email_new = document.getElementById('email_new').value
  var password_new = document.getElementById('password_new').value

  var updates = {
    email : email_new,
    password : password_new
  }

  database.ref('users/' + username).update(updates)

//  alert('updated')
document.getElementById('sekmingas-redagavimas').textContent = 'Redagavimas sėkmingas';
setTimeout(function() {
    document.getElementById('sekmingas-redagavimas').textContent = '';
}, 5000);

}

function remove() {
  var username = document.getElementById('username').value

  database.ref('users/' + username).remove()

//  alert('deleted')
//document.getElementById('login-successful').textContent = data.total_games;
}












