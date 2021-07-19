
var firebaseConfig = {
      apiKey: "AIzaSyDHWDcSB8PDqHFlEcQyme2NsmFYiupV8KM",
      authDomain: "kwitter-a7cb1.firebaseapp.com",
      databaseURL: "https://kwitter-a7cb1-default-rtdb.firebaseio.com",
      projectId: "kwitter-a7cb1",
      storageBucket: "kwitter-a7cb1.appspot.com",
      messagingSenderId: "922787735124",
      appId: "1:922787735124:web:8f19edf41cd6393653efc1",
      measurementId: "G-B7X0P3QG66"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
