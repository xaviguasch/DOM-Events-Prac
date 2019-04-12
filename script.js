var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");


function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var div = document.createElement("div");
    li.appendChild(document.createTextNode(input.value));
    addToggleFunctionality([li]);
    div.appendChild(li);
    ul.appendChild(div);
    addDeleteFunctionality([li]);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function toggleToDo() {
    this.classList.toggle("done");
}

function addToggleFunctionality(list) {
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", toggleToDo);
    }
}

function addDeleteFunctionality(list) {
    for (let i = 0; i < list.length; i++) {
        var button = document.createElement("button");
        button.appendChild(document.createTextNode("Delete"));
        button.addEventListener("click", deleteToDo);
        list[i].parentElement.appendChild(button);
    }
}

function deleteToDo() {
    ul.removeChild(this.parentElement);
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

addToggleFunctionality(li);
addDeleteFunctionality(li);