var table = document.getElementById('myTable');
let btn = document.getElementById("submit_button");
let del = document.getElementById("delete_button");
let edit = document.getElementById("edit_button");
let server = 'http://flip3.engr.oregonstate.edu:9025/select/cashiers';
let putServer = 'http://flip3.engr.oregonstate.edu:9025/cashiers';
let deleteServer = 'http://flip3.engr.oregonstate.edu:9025/delete/cashiers/';

// --------- populate the table ------------------
document.addEventListener('DOMContentLoaded', () => {
  console.log("client is loaded");
  axios.get(server)
  // .then(response => response.json())
  .then(data => loadHTMLTable(data['data']))
})

function loadHTMLTable(data) {
  let words = "";

  data.forEach( ({cashierID, firstName, lastName, username, email}) => {
    words += '<tr>';
    words += `<td>${cashierID}</td>`;
    words += `<td>${firstName}</td>`;
    words += `<td>${lastName}</td>`;
    words += `<td>${username}</td>`;
    words += `<td>${email}</td>`;
    words += `<td><a href="#edit-cashier-modal" id=${cashierID} class="edit" data-toggle="modal">&#9999;</a>
    <a class="delete-row-btn" id=${cashierID} data-toggle="tooltip" title="Delete">&#128465;</td>`;
    words += "</tr>"
  });

  table.innerHTML = words;
}

// --------- add features ------------------
function addButton() {
  let first = document.getElementById('firstName').value;
  let last = document.getElementById('lastName').value;
  let user = document.getElementById('username').value;
  let e = document.getElementById('email').value;
  console.log("adding");
  axios.post(putServer, {
    firstName: first, lastName : last, username : user, email : e 
  }).then(() => {
    location.reload();
  });

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
      // we need to prevent the default action because the flip server is too slow
      // therefore we need to use a async function rather than let the modal do its thing
      event.preventDefault();
    })
  }
})

function deleteRow (target_id) {
  axios.get(deleteServer + target_id);
  location.reload();
}

// edit row is async because we need to make sure the put is performed in time
async function editRow (edit_id, firstName, lastName, username, email) {
  axios.put(putServer, (
    {firstName: firstName, lastName: lastName, email: email, username: username, cashierID: edit_id}
    )).then(() => {
      location.reload();
    });
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

