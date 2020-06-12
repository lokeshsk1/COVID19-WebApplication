$(document).ready(function(){
    const listgrp=document.getElementById("lstgrp");
    
    var tollfree = (function() {
        var json = null;
        $.ajax({
          'async': false,
          'global': false,
          'url': "json/tollfree_numbers.json",
          'dataType': "json",
          'success': function(data) {
            json = data;
          }
        }); 
        return json;
      })();
    
    tollnums =  tollfree.tollnumbers
    tollnums.forEach(element => { 
    listgrp.innerHTML+=
    `<div class="list-group-item list-group-item-action flex-column align-items-start " style="padding-bottom: 20px;">
    <div class="d-flex w-100 justify-content-between">
      <h5><b>${element.district}</b></h5>
    </div>
    <br>
    <p class="mb-1"><i class="fas fa-phone-volume" style="margin-right: 15px;"> </i>    Emergency Number : ${element.emergency_number}</p>
    <p class="mb-1"><i class="fas fa-phone-alt" style="margin-right: 15px;"> </i>    LandLine Number : ${element.landline_number}</p>
    </div>`;
    });   
});