
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAiYJ6hVdoUVcusoAY_qKXt1ernDWDkCLE",
      authDomain: "kwitter-a3899.firebaseapp.com",
      databaseURL: "https://kwitter-a3899-default-rtdb.firebaseio.com",
      projectId: "kwitter-a3899",
      storageBucket: "kwitter-a3899.appspot.com",
      messagingSenderId: "1055408940158",
      appId: "1:1055408940158:web:d54fbc4f72bbe30be6242f"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var username=localStorage.getItem("username")
document.getElementById("username").innerHTML="welcome "+username+"!1";
function addRoom()
{
room_name = document. getElementById ("room_name"). value;
firebase. database(). ref("/").child (room_name) .update({
purpose: "adding room name"
});
localStorage. setItem ("room_name", room_name) ;
window. location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console. log ("Room Name - " + Room_names) ;
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div>//<hr>";
       document.getElementById("output"). innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName (name)
{
console. log (name);
localStorage. setItem("room_name", name);
window. location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem ("user_name");
       localStorage.removeItem ("room_name");
      window.location = "index.html";}