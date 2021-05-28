var table = document.getElementById('myTable');
let btn = document.getElementById("submit_button");
let del = document.getElementById("delete");

// document.addEventListener('DOMContentLoaded', () => {
//   fetch('http://flip3.engr.oregonstate.edu:9022/orders', 'cooks')
//   .then(response => response.json())
//   .then(data => loadHTMLTable(data['firstName, lastName, username, email']));
// })

function loadHTMLTable(data) {
  const table = document.querySelector('table tbody');

  let words = "";

  data.forEach( ({firstName, lastName, username, email}) => {
    words += '<tr>';
    words += `<td>${firstName}</td>`;
  });

  table.innerHTML = words;
}

function addButton() {
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
  cell6.innerHTML = `<a href="#edit-cook-modal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
  <a href="#deleteEmployeeModal" id='delete' class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>`;
}


btn.addEventListener("click", () => {
    addButton();
})

del.addEventListener("click", () => {
  console.log('hello');
})

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });