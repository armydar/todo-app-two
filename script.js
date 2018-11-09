"use strict";
var editSmall = document.querySelector("small");
var textInput = document.querySelector("input");
var span = document.querySelectorAll("span");
var input = document.querySelector("input[type='text']");
var ul = document.querySelector("ul");


ul.addEventListener("click", deleteItem);
editSmall.addEventListener("click", test);



function disapear() {
  textInput.style.display = "none";
}

function test(e) {
  if (e.target.classList.contains("test")) {
    textInput.style.display = 'block';
    textInput.style.cursor = 'pointer';
  }
}

function deleteItem(e) {
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;
    ul.removeChild(li);
  }
}

input.onkeypress = function(evt) {
  if (evt.which == 13) {
    var todo = document.createElement("LI");
    var todoText = document.createTextNode(this.value);
    todo.appendChild(todoText);

    var btn = document.createElement("button");
    btn.innerHTML = "X";
    btn.className = "delete";
    todo.appendChild(btn);

    document.getElementById("todoList").appendChild(todo);
  }
};

