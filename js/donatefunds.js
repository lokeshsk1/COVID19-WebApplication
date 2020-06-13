
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
  firebase.initializeApp(firebaseConfig); 
  console.log("init");  

  firebase.auth().onAuthStateChanged (firebaseUser => {
    if (firebaseUser){
        console.log(firebaseUser.email);
    }
    else{
        console.log('not logged in');
        // window.location = "signinwithphno.html";
    }
});

function copy1(){
navigator.clipboard.writeText("https://ereceipt.tn.gov.in/");
} 

function copy2(){
  navigator.clipboard.writeText("tncmprf@iob");
}