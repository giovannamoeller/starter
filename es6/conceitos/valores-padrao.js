function soma(a = 2, b = 3) {
    return a + b;
}

console.log(soma(5));
console.log(soma()); // como não passa nada, serão utilizados os valores padrões


const soma2 = (a = 3, b = 6) => a + b;

console.log(soma2());