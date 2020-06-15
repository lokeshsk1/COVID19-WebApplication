$(document).ready(function(){
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
            console.log(firebaseUser);
        }
        else{
            console.log('not logged in');
            window.location = "signinwithphno.html";
        }
    });
    var listgrp = document.getElementById("lstgrp");
    var dch_ref = firebase.database().ref().child("health_care").child("dch");
    dch_ref.on('value',snap => {
        console.log(snap.val());
        list_values = snap.val();
        list_values.forEach(element => {
            listgrp.innerHTML+=
    `<div class="list-group-item list-group-item-action flex-column align-items-start " style="padding-bottom: 20px;">
    <div class="d-flex w-100 justify-content-between">
      <h5><b>${element.hospital}</b></h5>
    </div>
    <br>
    <p class="mb-1"><i class="fas fa-map-marker-alt" style="margin-right: 15px;"> </i>   ${element.district}</p>
    <p class="mb-1"><i class="fas fa-hashtag" style="margin-right: 15px;"> </i>    ${element.type}</p>
    </div>`;    
        });
    });
});