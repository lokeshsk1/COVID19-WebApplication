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
    console.log('init index');

    const logout=document.getElementById('logout');
  
    logout.addEventListener('click', e=>{
        //get details 
        const auth = firebase.auth().signOut();  
        window.location = "login.html";
        
    })
      
    firebase.auth().onAuthStateChanged (firebaseUser => {
        if (firebaseUser){
            console.log(firebaseUser.email);
        }
        else{
            console.log('not logged in');
        }

    });
  
  
  }());