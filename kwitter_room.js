
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDJMsrG-2X776MEcGEHmNUvc8-Iloi3cKU",
    authDomain: "letschat-f56c6.firebaseapp.com",
    databaseURL: "https://letschat-f56c6-default-rtdb.firebaseio.com",
    projectId: "letschat-f56c6",
    storageBucket: "letschat-f56c6.appspot.com",
    messagingSenderId: "963406269452",
    appId: "1:963406269452:web:d6e6a98edc6e10a0ff7229"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom() {
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name = "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id);'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}