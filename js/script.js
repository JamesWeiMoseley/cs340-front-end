var table = document.getElementById('myTable');
let btn = document.getElementById("submit_button");



btn.addEventListener("click", () => {
    let customerID = document.getElementById('customerID').value;
    let employeeID = document.getElementById('employeeID').value;
    let cookID = document.getElementById('cookID').value;
    let itemID = document.getElementById('itemID').value;
    let date = document.getElementById('date').value;
    let orderLocation = document.getElementById('orderLocation').value;
    let orderType = document.getElementById('orderType').value;
    let totalPrice = document.getElementById('totalPrice').value;

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    
    cell1.innerHTML = customerID;
    cell2.innerHTML = employeeID;
    cell3.innerHTML = cookID;
    cell4.innerHTML = itemID;
    cell5.innerHTML = date;
    cell6.innerHTML = orderLocation;
    cell7.innerHTML = orderType;
    cell8.innerHTML = totalPrice;
})

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });