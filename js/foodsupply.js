$(document).ready(function () {
    document.getElementById("inputform").style.display = "none"; 
  var firebaseConfig = (function () {
    var json = null;
    $.ajax({
      async: false,
      global: false,
      url: "json/fb_config.json",
      dataType: "json",
      success: function (data) {
        json = data;
      },
    });
    return json;
  })();
  firebase.initializeApp(firebaseConfig);
  console.log("init");

  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log(firebaseUser.email);
    } else {
      console.log("not logged in");
      window.location = "signinwithphno.html";
    }
  });
   
  var listgrp = document.getElementById("lstgrp");
  var fb_ref = firebase.database().ref().child("Persons");
  fb_ref.on("child_added", (snap) => {
    // console.log(snap.val());
    element= snap.val();
      if (element.type == "Free Food") {
        listgrp.innerHTML += `<div class="list-group-item flex-column align-items-start "
        style="padding-bottom: 20px;">
        <div class="d-flex w-100 justify-content-between">
            <h5><b>${element.name}</b></h5>
        </div>
        <br>
        <p class="mb-1"><i class="fas fa-tag" style="margin-right: 15px;"> </i> ${element.desc}</p>
        <p class="mb-1"><i class="fas fa-map-marker-alt" style="margin-right: 15px;"> </i>${element.address}</p>
        <p class="mb-1"><i class="fas fa-phone-alt" style="margin-right: 15px;"> </i>${element.phone_number}</p>
        <p class="mb-1"><i class="far fa-envelope" style="margin-right: 15px;"> </i> ${element.email_id}</p>
    </div>`;
      }
  });
});

function formAppear(){
    document.getElementById("inputform").style.display = "block";
    document.getElementById("togglebutton").style.visibility = "hidden";

  }

  function closeform(){
    document.getElementById("inputform").style.display = "none";
    document.getElementById("togglebutton").style.visibility = "visible";
  }

  function submit_donate(){
    console.log("donate");  
    var data_model = {};
    var newPostRef = firebase.database().ref().child("Persons").push();
    data_model.name=document.getElementById("firstname").value+" "+document.getElementById("lastname").value;
    data_model.email_id = document.getElementById("email").value;
    data_model.phone_number = document.getElementById("phnumber").value; 
    data_model.address = document.getElementById("address").value;
    data_model.city = document.getElementById("city").value;
    data_model.state = document.getElementById("state").value;
    data_model.type = document.getElementById("donate_category").value
    data_model.email_id = document.getElementById("email").value;
    data_model.desc = document.getElementById("desc").value;
    console.log(data_model);
    newPostRef.set(data_model);
    document.getElementById("inputform").style.display = "none";
    document.getElementById("togglebutton").style.visibility = "visible";
  }