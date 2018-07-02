var userData = [];

// Update table data
var updateTable = function () {
var dataTable = document.getElementById('table1'),
tableHead = document.getElementById('table-head'),
tbody = document.createElement('tbody');

while (dataTable.firstChild) {
dataTable.removeChild(dataTable.firstChild);
}
dataTable.appendChild(tableHead);

for (var i = 0; i < userData.length; i++) {
var tr = document.createElement('tr'),
td0 = document.createElement('td'),
td1 = document.createElement('td'),
td2 = document.createElement('td'),
td3 = document.createElement('td'),
td4 = document.createElement('td'),
td5 = document.createElement('td'),
td6 = document.createElement('td'),
btnDelete = document.createElement('input'),
btnEdit = document.createElement('input');

btnDelete.setAttribute('type', 'button');
btnDelete.setAttribute('value', 'Delete');
btnDelete.setAttribute('class', 'btnDelete');
btnDelete.setAttribute('id', i);

btnEdit.setAttribute('type', 'button');
btnEdit.setAttribute('value', 'Edit');
btnEdit.setAttribute('data-toggle', 'modal');
btnEdit.setAttribute('data-target', '#editModal');

btnEdit.setAttribute('id', i);

tr.appendChild(td0);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
tr.appendChild(td5);
tr.appendChild(td6);

td0.innerHTML = i + 1;
td1.innerHTML = userData[i].name;
td2.innerHTML = userData[i].price;
td3.innerHTML = userData[i].produced;
td4.innerHTML = userData[i].termDate;
td5.appendChild(btnEdit);
td6.appendChild(btnDelete);


btnDelete.onclick = (function () {
return function () {
if (confirm("Are you sure you want to delete?")) {
var deleteId = this.getAttribute('id');
userData.splice(deleteId, 1);
updateTable();
refreshForm();
}
};
})();

btnEdit.addEventListener('click', function () {
var editId = this.getAttribute('id');
window.scrollTo({
top: 0,
left: 0,
behavior: 'smooth'
});
updateForm(editId);
}, false);

tbody.appendChild(tr);
}
dataTable.appendChild(tbody);
};

// Edit data
var updateForm = function (id) {
console.log(userData[id].name);
var nameField = document.getElementById('name'),
priceField = document.getElementById('price'),
producedField = document.getElementById('produced'),
termDateField = document.getElementById('termDate'),
saveButton = document.getElementById('btnSave');

nameField.value = userData[id].name;
priceField.value = userData[id].price;
producedField.value = userData[id].produced;
termDateField.value = userData[id].termDate;
};

// Save new data
var saveData = function () {
var newName = document.getElementById('name').value,
newPrice = document.getElementById('price').value,
newProduced = document.getElementById('produced').value,
newTermDate = document.getElementById('termDate').value,
datatoAdd = {
name: newName,
price: newPrice,
produced: newProduced,
termDate: newTermDate
};


userData.push(datatoAdd);
updateTable();
};


function showForm() {
var form = document.getElementById("form");
if (form.style.display === "block") {
form.style.display = "none";
} else {
form.style.display = "block"
}
}

// Reset the form
var refreshForm = function () {
var nameField = document.getElementById('name'),
priceField = document.getElementById('price'),
producedField = document.getElementById('produced'),
termDateField = document.getElementById('termDate'),
saveButton = document.getElementById('btnSave');

nameField.value = '';
priceField.value = '';
producedField.value = '';
termDateField.value = '';
saveButton.value = 'Save';
};

//Validaytion and Main function
var init = function () {
updateTable();

var btnSave = document.getElementById('btnSave');

btnSave.onclick = function () {
var Name=document.getElementById("name").value;
var Price=document.getElementById("price").value;
var produced =document.getElementById("produced").value;
var termdate=document.getElementById("termDate").value;
userData.Name=document.getElementById("name").value;
userData.Price=document.getElementById("price").value;
userData.produced =document.getElementById("produced").value;
userData.termdate=document.getElementById("termDate").value;

if(Name != "" || Price != "" || produced != "" || termdate != "" ){
var regprodN= /[^A-Za-z]/;

if (Name.match(regprodN)) {

alert("We have a this product");
return false;
} 
var regPrice = /^\d+$/;
if (!Price.match(regPrice)) {

alert("Price is only numbers");
return false;
}

var regProduced= new Date(produced);
var dayProduced = regProduced.getDate();
var monthProduced = regProduced.getMonth();
var yearProduced = regProduced.getFullYear();

var termdate = new Date(termdate);
var termday = termdate.getDate();
var termmonth = termdate.getMonth();
var termyear = termdate.getFullYear();

if ((termday - dayProduced > 3) || (termmonth - monthProduced >= 1) || (termyear!= yearProduced)) {
alert("The product is not term");
return false;
}
} else {
alert("Please fill all this fields");
return false;
}


if (btnSave.getAttribute('data-update')) {
updateData(btnSave.getAttribute('data-update'));
} else {
saveData();
}
refreshForm();
};
};

init();