window.onload = function () {
  document.getElementById("pin").style.visibility = "hidden";
  document.getElementById("signinbutton").style.visibility = "hidden";
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
  render();
};
function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container"
  );
  recaptchaVerifier.render();
}

function phoneAuth() {
  var phoneNumber = document.getElementById("phno").value;
  if (phoneNumber[0] !== "+") {
    phoneNumber = "+91" + phoneNumber;
  }
  console.log(phoneNumber);
  firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
    .then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
      coderesult = confirmationResult;
      console.log(coderesult + "Message Sent");
      document.getElementById("pin").style.visibility = "visible";
      document.getElementById("signinbutton").style.visibility = "visible";
      document.getElementById("otp").style.display = "none";
      document.getElementById("recaptcha-container").style.visibility = "hidden";
    })
    .catch(function (error) {
      console.log(error.message);
    });
}

function codeVerify() {
  var code = document.getElementById("pin").value;
  coderesult
    .confirm(code)
    .then(function (result) {
      console.log("registered");
      var user = result.user;
      window.location = "index.html";
    })
    .catch(function (error) {
      console.log(error.message);
    });
}
