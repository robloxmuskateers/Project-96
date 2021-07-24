//YOUR FIREBASE LINKS
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDISsnCawztfpRMA79SYjWNuFGiLFt0Yfs",
      authDomain: "kwitter-1248a.firebaseapp.com",
      databaseURL: "https://kwitter-1248a-default-rtdb.firebaseio.com",
      projectId: "kwitter-1248a",
      storageBucket: "kwitter-1248a.appspot.com",
      messagingSenderId: "544080118126",
      appId: "1:544080118126:web:9e0b7389fdb1d805cf817f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }