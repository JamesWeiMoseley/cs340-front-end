var table = document.getElementById('myTable');
let btn = document.getElementById("submit_button");


btn.addEventListener("click", () => {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
  
    cell2.innerHTML = firstName;
    cell3.innerHTML = lastName;
    cell4.innerHTML = username;
    cell5.innerHTML = email;
})

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });