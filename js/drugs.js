$(document).ready(function(){
    const listgrp=document.getElementById("lstgrp");
    
    var drugs = (function() {
        var json = null;
        $.ajax({
          'async': false,
          'global': false,
          'url': "json/donatedrugs.json",
          'dataType': "json",
          'success': function(data) {
            json = data;
          }
        }); 
        return json;
      })();

    drugs =  drugs.data;
    drugs.forEach(element => { 
    listgrp.innerHTML+=
    `<div class="list-group-item list-group-item-action flex-column align-items-start " style="padding-bottom: 20px;">
    <div class="d-flex w-100 justify-content-between" >
      <h5><b><span class="font-weight-normal">${element.code}. Warehouse Location:</span>  ${element.ware_house}</b></h5>
    </div>
    <br>
    <p class="mb-1"><i class="fas fa-phone-alt" style="margin-right: 15px;"> </i>   ${element.mobile}</p>
    </div>`;
    });   
});