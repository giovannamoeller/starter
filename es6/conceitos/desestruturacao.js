const usuario = {
    nome: 'Giovanna',
    idade: 19,
    endereco: {
        cidade: 'Bauru',
        estado: 'SP'
    }
};

console.log(usuario)
const { nome, idade, endereco: {cidade, estado} } = usuario;

console.log(nome, idade, cidade, estado);