// 3.1

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(item => item + 10);
console.log(newArr);

// 3.2

const usuario = { nome: 'Giovanna', idade: 19 };

const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario));

// 3.3

const nome = 'Giovanna';
const idade = 19;

const mostraUsuario = (nome = 'Giovanna', idade = 20) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4

const promise = () => new Promise((resolve, reject) => resolve());