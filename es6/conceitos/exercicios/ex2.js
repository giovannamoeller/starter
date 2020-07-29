const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' }, 
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' }, 
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// map

const usuariosIdade = usuarios.map(usuario => usuario.idade);
console.log(usuariosIdade);

// filter

const filterUsuarios = usuarios.filter(usuario => {
    return usuario.empresa === 'Rocketseat' && usuario.idade >= 18;
});

console.log(filterUsuarios);

// find

const usuarioTrabalhaNaGoogle = usuarios.find(usuario => usuario.empresa === 'Google');
console.log(usuarioTrabalhaNaGoogle);

// map e filter

const filterUsuario = usuarios.map(users => ({...users, idade: users.idade * 2}))
.filter(user => user.idade <= 50);

console.log(filterUsuario);
