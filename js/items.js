var table = document.getElementById('myTable');
let btn = document.getElementById("submit_button");


btn.addEventListener("click", () => {
    let name = document.getElementById('name').value;
    let itemCategory = document.getElementById('itemCategory').value;
    let quantity = document.getElementById('quantity').value;
    let unitPrice = document.getElementById('unitPrice').value;

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell2.innerHTML = name;
    cell3.innerHTML = itemCategory;
    cell4.innerHTML = quantity;
    cell5.innerHTML = unitPrice;
})

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });