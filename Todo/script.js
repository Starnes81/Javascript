
// add a check mark when click "done item"
var completed = document.querySelector('ul');
completed.addEventListener('click',function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// add a new item
function addItem() {
  var newLi = document.createElement("li");
  var inputValue = document.getElementById("tdInput").value;
  var addNew = document.createTextNode(inputValue);
  var span = document.createElement("SPAN");
  var xClose = document.createTextNode("\u00d7");

  newLi.appendChild(addNew);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("tdList").appendChild(newLi);
    var tdClose = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < tdClose.length; i++) {
      var span = document.createElement("SPAN");
      var xClose = document.createTextNode("\u00d7");
      span.className = "close";
      span.appendChild(xClose);
      tdClose[i].appendChild(span);
    }
    var closed = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < closed.length; i++) {
      closed[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  document.getElementById("tdInput").value = "";

}
