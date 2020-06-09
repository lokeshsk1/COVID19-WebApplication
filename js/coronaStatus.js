$(document).ready(function ()
{
  $.ajax({
    type: "GET",
    url: "https://api.covid19india.org/state_district_wise.json",
    success: function (returnedData)
    {
      const district_data=returnedData["Tamil Nadu"].districtData;
      populateData(district_data);
    }
  });
});

function populateData(district_data){
var table = document.getElementById('statusTable')
for (data in district_data){
    var tr = document.createElement('tr');   

    var th = document.createElement('th');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var text1 = document.createTextNode(data);
    var text2 = document.createTextNode(district_data[data].active);
    var text3 = document.createTextNode(district_data[data].confirmed);
    var text4 = document.createTextNode(district_data[data].recovered);

    th.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    tr.appendChild(th);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table.appendChild(tr);

  }
}