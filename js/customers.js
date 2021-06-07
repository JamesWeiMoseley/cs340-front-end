var table = document.getElementById('myTable');
let btn = document.getElementById("submit_button");
let del = document.getElementById("delete_button");
let edit = document.getElementById("edit_button");
let server = 'http://localhost:9022/select/customers';
let putServer = 'http://localhost:9022/customers';
let deleteServer = 'http://localhost:9022/delete/customers/';

// populate the table 
document.addEventListener('DOMContentLoaded', () => {
  console.log("client is loaded");
  axios.get(server)
  // .then(response => response.json())
  .then(data => loadHTMLTable(data['data']))
})

function loadHTMLTable(data) {
  let words = "";

  data.forEach( ({customerID, firstName, lastName, username, email}) => {
    words += '<tr>';
    words += `<td>${customerID}</td>`;
    words += `<td>${firstName}</td>`;
    words += `<td>${lastName}</td>`;
    words += `<td>${username}</td>`;
    words += `<td>${email}</td>`;
    words += `<td><a href="#edit-customer-modal" id=${customerID} class="edit" data-toggle="modal">&#9999;</a>
    <a class="delete-row-btn" id=${customerID} data-toggle="tooltip" title="Delete">&#128465;</td>`;
    words += "</tr>"
  });

  // console.log(data[0].firstName);
  table.innerHTML = words;
}

// --------- add features ------------------
function addButton() {
  let first = document.getElementById('firstName').value;
  let last = document.getElementById('lastName').value;
  let user = document.getElementById('username').value;
  let e = document.getElementById('email').value;

  axios.post(putServer, {firstName: first, lastName : last, username : user, email : e });

  location.reload();
}

btn.addEventListener("click", () => {
    addButton();
})

// --------- delete and edit features ------------------
document.querySelector('table tbody').addEventListener('click', function(e) {
  if(e.target.className === 'delete-row-btn') {
    let target_id = e.target.id;
    deleteRow(target_id);
  } else {
    let edit_id = e.target.id;
    console.log(edit_id);
    edit.addEventListener("click", () => {
      let edit_first = document.getElementById("edit_first").value;
      let edit_last = document.getElementById("edit_last").value;
      let edit_email = document.getElementById("edit_email").value;
      let edit_username = document.getElementById("edit_username").value;
      console.log(edit_first);

      editRow(edit_id, edit_first, edit_last, edit_email, edit_username);
      // event.preventDefault();
    })
  }
})

function deleteRow (target_id) {
  axios.get(deleteServer + target_id);
  location.reload();
}

function editRow (edit_id, firstName, lastName, username, email) {
  axios.put(putServer, ({firstName: firstName, lastName: lastName, email: email, username: username, customerID: edit_id}));
}

// jquery for search 
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// jquery for tooltip
$(function () {
$('[data-toggle="tooltip"]').tooltip()
})
