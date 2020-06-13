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
//   var storage = firebase.storage();

//   var img = storage.ref().child('images/COVID-19-Pamphlet-Tamil-final_002.png');

//   console.log(img);

//   img.getDownloadURL().then(function(url) {
//     console.log(url);
//     //test 
//     document.getElementById("jsonfile").src = url;
//   }).catch(function(error) {
//     console.log(error.message);
//   });

//auth work
  