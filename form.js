
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDulWxLZ2-2tWEZE_hTy3eF28kTF7XHc88",
    authDomain: "feed-the-hungry-f62d8.firebaseapp.com",
    projectId: "feed-the-hungry-f62d8",
    storageBucket: "feed-the-hungry-f62d8.appspot.com",
    messagingSenderId: "530579328691",
    appId: "1:530579328691:web:2a6f2c11927ba7bed9aac6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

  const auth = firebase.auth();

  function signUp() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");
  }

  function signIn(){
     var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed In " + email.value);

  }

  function signOut(){

     auth.signOut();
     alert("Signed Out");
  }

  auth.onAuthStateChanged(function(user){

    if(user){
      var email = user.email;
      alert("Active User" + email);


    }
    else{
      
      alert("No Active User");

    }

  });
