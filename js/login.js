// <!-- The core Firebase JS SDK is always required and must be listed first --> 
(function() {
  // Your web app's Firebase configuration
  var firebaseConfig= (function() {
    var json = null;
    $.ajax({
      'async': false,
      'global': false,
      'url': "json/fb_config.json",
      'dataType': "json",
      'success': function(data) {
        json = data;
      }
    }); 
    return json;
  })();
  
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