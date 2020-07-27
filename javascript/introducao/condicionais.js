function retornaSexo(sexo) { 
    // M, F
    if(sexo === 'M') { 
        return 'Masculino'
    } else if(sexo === 'F') {
        return 'Feminino'
    } else {
        return 'Outro'
    }
    // sexo === 'M' ? 'Masculino' : 'Feminino'
}

function retornaSexoSwitch(sexo) {
    switch(sexo) {
        case 'M': 
            return 'Masculino';
        case 'F': 
            return 'Feminino';
        default: 
            return 'Outro'
    }
}

var resultado = retornaSexo('M');
var resultado2 = retornaSexoSwitch('F');
console.log(resultado, resultado2);