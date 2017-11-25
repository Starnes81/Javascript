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
