const array = [1, 2, 4, 6, 9];

const newArray = array.map(item => item * 2);

console.log(newArray); // [2, 4, 8, 12, 18]

const teste = () => 'teste';
// ou function teste() {}
const teste2 = () => ({ nome: 'Giovanna'}); // dá erro se retornar objeto sem ()


console.log(teste());
console.log(teste2());
