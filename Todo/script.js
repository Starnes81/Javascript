var completed = document.querySelector('ul');
completed.addEventListener('click',function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function addItem() {
  var newLi = document.createElement("li");
  var inputValue = document.getElementById("tdInput").value;
  var addNew = document.createTextNode(inputValue);

  newLi.appendChild(addNew);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("tdList").appendChild(newLi);
  }
  document.getElementById("tdInput").value = "";


}
