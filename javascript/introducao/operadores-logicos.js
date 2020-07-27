var sexo = 'M', idade = 20, masculino;

if(sexo == 'M' && idade >= 18) {
    console.log('OK');
}

if(sexo !== 'F' || idade >= 18) {
    console.log('OK');
}

if(sexo == 'M') {
    masculino = true;
} else {
    masculino = false;
}

masculino = sexo === 'M'
console.log(masculino)
