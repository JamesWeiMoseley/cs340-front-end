var table = document.getElementById('myTable');
let btn = document.getElementById("submit_button");
let del = document.getElementById("delete_button");
let edit = document.getElementById("edit_button");
let server = 'http://flip3.engr.oregonstate.edu:9025/select/items';
let putServer = 'http://flip3.engr.oregonstate.edu:9025/items';
let deleteServer = 'http://flip3.engr.oregonstate.edu:9025/delete/items/';

// populate the table 
document.addEventListener('DOMContentLoaded', () => {
  console.log("client is loaded");
  axios.get(server)
  // .then(response => response.json())
  .then(data => loadHTMLTable(data['data']))
})

function loadHTMLTable(data) {
  let words = "";

  data.forEach( ({itemID, name, quantity, unitPrice, itemCategory}) => {
    words += '<tr>';
    words += `<td>${itemID}</td>`;
    words += `<td>${name}</td>`;
    words += `<td>${itemCategory}</td>`;
    words += `<td>${quantity}</td>`;
    words += `<td>${unitPrice}</td>`;
    words += `<td><a href="#edit-item-modal" id=${itemID} class="edit" data-toggle="modal">&#9999;</a>
    <a class="delete-row-btn" id=${itemID} data-toggle="tooltip" title="Delete">&#128465;</td>`;
    words += "</tr>"
  });

  table.innerHTML = words;
}

// --------- add features ------------------
function addButton() {
  let name = document.getElementById('name').value;
  let quantity = document.getElementById('quantity').value;
  let unitPrice = document.getElementById('unitPrice').value;
  let itemCategory = document.getElementById('itemCategory').value;

  axios.post(putServer, {name: name, quantity : quantity, unitPrice : unitPrice, itemCategory : itemCategory });

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
      let edit_name = document.getElementById("edit_name").value;
      let edit_quantity = document.getElementById("edit_quantity").value;
      let edit_unitPrice = document.getElementById("edit_unitPrice").value;
      let edit_itemCategory = document.getElementById("edit_itemCategory").value;

      editRow(edit_id, edit_name, edit_quantity, edit_unitPrice, edit_itemCategory);
      // event.preventDefault();
    })
  }
})

function deleteRow (target_id) {
  axios.get(deleteServer + target_id);
  location.reload();
}

function editRow (edit_id, name, quantity, unitPrice, itemCategory) {
  axios.put(putServer, ({name: name, quantity: quantity, unitPrice: unitPrice, itemCategory: itemCategory, itemID: edit_id}));
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

  