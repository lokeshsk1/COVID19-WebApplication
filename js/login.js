// <!-- The core Firebase JS SDK is always required and must be listed first --> 
(function() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyArgoFv3v9GinDsuZqlqKs19KBDdQqnvNQ",
    authDomain: "test-71c2f.firebaseapp.com",
    databaseURL: "https://test-71c2f.firebaseio.com",
    projectId: "test-71c2f",
    storageBucket: "test-71c2f.appspot.com",
    messagingSenderId: "957572362298",
    appId: "1:957572362298:web:4a9932b169841ef879c503",
    measurementId: "G-ZYFXJ6RZV4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //get elements 
  console.log('init login');

  const txtemail= document.getElementById('email');
  const txtpass= document.getElementById('pass');
  const login=document.getElementById('login');

  login.addEventListener('click', e=>{
      //get details 
      const email = txtemail.value;
      const pass = txtpass.value;
      const auth = firebase.auth();

      const promise=auth.signInWithEmailAndPassword(email,pass);   
      promise.catch(e=> console.log(e.message));
  })
    
  firebase.auth().onAuthStateChanged (firebaseUser => {
    if (firebaseUser){
        console.log(firebaseUser.email);
        window.location = "index.html";
    }
    else{
        console.log('not logged in');
    }

}); 


}());