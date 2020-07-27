var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDo = []

function renderToDo() {
    listElement.innerHTML = '';
    for(todo of toDo) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        
        var pos = toDo.indexOf(todo);
        linkElement.setAttribute('onclick', `deleteToDo(${pos})`);
        var linkText = document.createTextNode('X');
        
        linkElement.appendChild(linkText);
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement);
    }
}

function addToDo() {
    var toDoValue = inputElement.value;
    toDo.push(toDoValue);
    inputElement.value = '';
    renderToDo();
}

buttonElement.onclick = addToDo;

function deleteToDo(pos) {
    toDo.splice(pos, 1); // remove da posição, 1 elemento
    renderToDo();
}