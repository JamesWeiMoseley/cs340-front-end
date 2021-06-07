var table = document.getElementById('myTable');
let btn = document.getElementById("submit_button");
let del = document.getElementById("delete_button");
let edit = document.getElementById("edit_button");
let server = 'http://localhost:9022/select/orders';
let putServer = 'http://localhost:9022/orders';
let deleteServer = 'http://localhost:9022/delete/orders/';

// populate the table 
document.addEventListener('DOMContentLoaded', () => {
  console.log("client is loaded");
  axios.get(server)
  // .then(response => response.json())
  .then(data => loadHTMLTable(data['data']))
})

function loadHTMLTable(data) {
  let words = "";

  data.forEach( ({orderID, customerID, cashierID, cookID, itemID, date, orderLocation, orderType, totalPrice}) => {
    words += '<tr>';
    words += `<td>${orderID}</td>`;
    words += `<td>${customerID}</td>`;
    words += `<td>${cashierID}</td>`;
    words += `<td>${cookID}</td>`;
    words += `<td>${itemID}</td>`;
    words += `<td>${date}</td>`;
    words += `<td>${orderLocation}</td>`;
    words += `<td>${orderType}</td>`;
    words += `<td>${totalPrice}</td>`;
    words += `<td><a href="#edit-order-modal" id=${orderID} class="edit" data-toggle="modal">&#9999;</a>
    <a class="delete-row-btn" id=${orderID} data-toggle="tooltip" title="Delete">&#128465;</td>`;
    words += "</tr>"
  });

  // console.log(data[0].firstName);
  table.innerHTML = words;
}

// --------- add features ------------------
function addButton() {
  let customerID = document.getElementById('customerID').value;
  let cashierID = document.getElementById('employeeID').value;
  let cookID = document.getElementById('cookID').value;
  let itemID = document.getElementById('itemID').value;
  let date = document.getElementById('date').value;
  let orderLocation = document.getElementById('orderLocation').value;
  let orderType = document.getElementById('orderType').value;
  let totalPrice = document.getElementById('totalPrice').value;

  axios.post(putServer, {customerID: customerID, cashierID : cashierID, cookID : cookID, itemID : itemID,  date: date, orderLocation : orderLocation, orderType : orderType, totalPrice : totalPrice});

  location.reload();
}

btn.addEventListener("click", () => {
    addButton();
})


// --------- delete and edit features ------------------
document.querySelector('table tbody').addEventListener('click', function(e) {
  if(e.target.className === 'delete-row-btn') {
    let target_id = e.target.id;
    console.log(target_id);
    deleteRow(target_id);
  } else {
    let edit_id = e.target.id;
    console.log(edit_id);
    edit.addEventListener("click", () => {
      let customerID = document.getElementById('edit_customerID').value;
      let cashierID = document.getElementById('edit_employeeID').value;
      let cookID = document.getElementById('edit_cookID').value;
      let itemID = document.getElementById('edit_itemID').value;
      let date = document.getElementById('edit_date').value;
      let orderLocation = document.getElementById('edit_orderLocation').value;
      let orderType = document.getElementById('edit_orderType').value;
      let totalPrice = document.getElementById('edit_totalPrice').value;

      axios.put(putServer, ({ 
        orderID : edit_id, customerID:customerID, cashierID:cashierID, cookID:cookID, itemID:itemID, date:date, orderLocation:orderLocation, orderType:orderType, totalPrice:totalPrice 
      }));

    })
  }
})

function deleteRow (target_id) {
  axios.get(deleteServer + target_id);
  location.reload();
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

  