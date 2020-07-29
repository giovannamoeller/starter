// REST = o resto das propriedades

const usuario = {
    nome: 'Giovanna',
    idade: 19,
    status: 'Estudante'
}

const { nome, ...resto } = usuario;
console.log(nome, resto);

const array = [1, 2, 3, 4];
const [a, b, ...c ] = array;
console.log(a, b, c);

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 5, 6));

// SPREAD = faz o papel de propagar, repassar 

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, ...array2]; // copia cada uma das informações do array
console.log(array3);

const user1 = {
    nome: 'Giovanna',
    idade: 19,
    status: 'Estudante'
};

const user2 = { ...user1, nome: 'Gabriela' }; 
console.log(user2); // copia o user1, só troca o nome
