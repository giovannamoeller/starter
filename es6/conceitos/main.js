class List {
    constructor() { 
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }
}

class ToDoList extends List {
    constructor() {
        super(); // chamar o constructor da classe pai

        this.usuario = 'Giovanna';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

let MinhaLista = new ToDoList();

document.getElementById('novoToDo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

// método static - não enxerga o resto da classe (normalmente não usa com constructor)