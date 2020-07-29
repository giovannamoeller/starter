const a = 1;
//a = 3;

const usuario = {
    nome: 'Diego'
};

usuario.nome = 'Giovanna'; // não possui erro = isso é mutação (mesmo formato do objeto, mas altera valor)
console.log(usuario)

function teste(x) {
    let y = 2;

    if(x > 5) {
        console.log(x, y);
    }
}

teste(10);
// teste(y); -> não está definido
