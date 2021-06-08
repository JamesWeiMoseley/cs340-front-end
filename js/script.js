var table = document.getElementById('myTable');
let btn = document.getElementById("submit_button");
let del = document.getElementById("delete_button");
let edit = document.getElementById("edit_button");
let server = 'http://flip3.engr.oregonstate.edu:9025/select/orders';
let putServer = 'http://flip3.engr.oregonstate.edu:9025/orders';
let deleteServer = 'http://flip3.engr.oregonstate.edu:9025/delete/orders/';
let customerServer = 'http://flip3.engr.oregonstate.edu:9025/select/customers';
let cashierServer = 'http://flip3.engr.oregonstate.edu:9025/select/cashiers';
let cookServer = 'http://flip3.engr.oregonstate.edu:9025/select/cooks';
let itemServer = 'http://flip3.engr.oregonstate.edu:9025/select/items';

// populate the table 
document.addEventListener('DOMContentLoaded', () => {
  console.log("client is loaded");
  axios.get(server)
  // .then(response => response.json())
  .then(data => loadHTMLTable(data['data']))
})

// ---- These functions populate the select options in the add area ----
function populateCustomer () {
  axios.get(customerServer).then((response) => {
    response.data.forEach(({customerID}) => {
      let option = document.createElement('option');
      let select = document.getElementById('selectCustomer');
      option.innerHTML = customerID;
      option.value = customerID;
      select.appendChild(option);
    })
  });
}

function populateCashier () {
  axios.get(cashierServer).then((response) => {
    response.data.forEach(({cashierID}) => {
      let option = document.createElement('option');
      let select = document.getElementById('selectCashier');
      option.innerHTML = cashierID;
      option.value = cashierID;
      select.appendChild(option);
    })
  });
}

function populateCooks () {
  axios.get(cookServer).then((response) => {
    response.data.forEach(({cookID}) => {
      let option = document.createElement('option');
      let select = document.getElementById('selectCook');
      option.innerHTML = cookID;
      option.value = cookID;
      select.appendChild(option);
    })
  });
}

function populateItems () {
  axios.get(itemServer).then((response) => {
    response.data.forEach(({itemID}) => {
      let option = document.createElement('option');
      let select = document.getElementById('selectItem');
      option.innerHTML = itemID;
      option.value = itemID;
      select.appendChild(option);
    })
  });
}

//this will populate the table 
function loadHTMLTable(add_data) {
  let words = ""; 
  populateCustomer(); 
  populateCashier();
  populateCooks();
  populateItems();
  //for each loop to go through 'data' which we got back from the get
  add_data.forEach( ({orderID, customerID, cashierID, cookID, itemID, date, orderLocation, orderType, totalPrice}) => {
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
  //inner html that we will append to table
  table.innerHTML = words;
}

// --------- add features ------------------
function addButton() {
  let customerID = document.getElementById('selectCustomer').value;
  let cashierID = document.getElementById('selectCashier').value;
  let cookID = document.getElementById('selectCook').value;
  let itemID = document.getElementById('selectItem').value;
  let date = document.getElementById('date').value;
  let orderLocation = document.getElementById('orderLocation').value;
  let orderType = document.getElementById('orderType').value;
  let totalPrice = document.getElementById('totalPrice').value;
  //post request to send to the backend 
  axios.post(putServer, {
    customerID: customerID, cashierID : cashierID, cookID : cookID, itemID : itemID,  date: date, orderLocation : orderLocation, orderType : orderType, totalPrice : totalPrice
  });
  //reload page so that we can see the newly populate table 
  location.reload();
}

// the event listener 
btn.addEventListener("click", () => {
    addButton();
})


// --------- delete and edit features ------------------
document.querySelector('table tbody').addEventListener('click', function(e) {
  //if the classname is delete row button we will execute delete function
  if(e.target.className === 'delete-row-btn') {
    let target_id = e.target.id;
    console.log(target_id);
    deleteRow(target_id);
  } else {
    //otherwise we know to do the edit 
    let edit_id = e.target.id;
    console.log(edit_id);
    // click is when the user clicks submit
    edit.addEventListener("click", () => {
      let customerID = document.getElementById('edit_customerID').value;
      let cashierID = document.getElementById('edit_employeeID').value;
      let cookID = document.getElementById('edit_cookID').value;
      let itemID = document.getElementById('edit_itemID').value;
      let date = document.getElementById('edit_date').value;
      let orderLocation = document.getElementById('edit_orderLocation').value;
      let orderType = document.getElementById('edit_orderType').value;
      let totalPrice = document.getElementById('edit_totalPrice').value;
      //sends the new data as a put request
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

  