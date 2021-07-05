var firebaseConfig = {
      apiKey: "AIzaSyA1-0iwZ5VuyyWggt3My8CLWKLMuYejvVo",
      authDomain: "kwitter-4ae71.firebaseapp.com",
      databaseURL: "https://kwitter-4ae71-default-rtdb.firebaseio.com",
      projectId: "kwitter-4ae71",
      storageBucket: "kwitter-4ae71.appspot.com",
      messagingSenderId: "136585865926",
      appId: "1:136585865926:web:ed4604cc506f75690d45c7"
    };
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
