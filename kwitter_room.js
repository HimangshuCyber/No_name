var firebaseConfig = {
      apiKey: "AIzaSyAdHjR4Klx9luHLYH4NbZjkJJhU7Kvx_XA",
      authDomain: "kwitter-4b1a3.firebaseapp.com",
      databaseURL: "https://kwitter-4b1a3-default-rtdb.firebaseio.com",
      projectId: "kwitter-4b1a3",
      storageBucket: "kwitter-4b1a3.appspot.com",
      messagingSenderId: "122977740060",
      appId: "1:122977740060:web:26fe232a49b09a60dc46d9"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
