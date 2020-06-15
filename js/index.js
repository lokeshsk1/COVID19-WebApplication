// <!-- The core Firebase JS SDK is always required and must be listed first --> 
(function() {

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
    console.log('init index');

    const logout=document.getElementById('logout');
  
    logout.addEventListener('click', e=>{
        //get details 
        const auth = firebase.auth().signOut();  
        window.location = "signinwithphno.html";
        
    })
      
    firebase.auth().onAuthStateChanged (firebaseUser => {
        if (firebaseUser){
            console.log(firebaseUser);
        }
        else{
            console.log('not logged in');
            window.location = "signinwithphno.html";
        }

    });
  
  
  }());