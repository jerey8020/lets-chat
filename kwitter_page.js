//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAiYJ6hVdoUVcusoAY_qKXt1ernDWDkCLE",
      authDomain: "kwitter-a3899.firebaseapp.com",
      databaseURL: "https://kwitter-a3899-default-rtdb.firebaseio.com",
      projectId: "kwitter-a3899",
      storageBucket: "kwitter-a3899.appspot.com",
      messagingSenderId: "1055408940158",
      appId: "1:1055408940158:web:d54fbc4f72bbe30be6242f"
    };
    user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");
    function send ()
     {
    msg=document.getElementById("message").value;
    firebase. database().ref(room_name).push({
    name: user_name, message: msg,like:0
    }) ;
    document. getElementById ("message").value = ''
}
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
