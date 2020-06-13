$(document).ready(function(){
    const listgrp=document.getElementById("lstgrp");
    
    var faqs = (function() {
        var json = null;
        $.ajax({
          'async': false,
          'global': false,
          'url': "json/faq.json",
          'dataType': "json",
          'success': function(data) {
            json = data;
          }
        }); 
        return json;
      })();

    faqs =  faqs.faq;
    console.log(faqs);
    faqs.forEach(element => { 
    listgrp.innerHTML+=
    `<div class="list-group-item list-group-item-action flex-column align-items-start " style="padding-bottom: 20px;">
    <div class="d-flex w-100 justify-content-between">
      <h5><b>${element["s.no"]}. ${element.question}</b></h5>
    </div>
    <br>
    <p class="mb-1"> ${element.answer}</p>
    </div>`;
    });   
});