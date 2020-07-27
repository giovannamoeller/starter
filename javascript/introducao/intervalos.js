function exibeAlgo() {
    console.log('Hello World');
}

function nome() {
    console.log('Giovanna')
}

setInterval(exibeAlgo, 1000); // a cada 1 segundo, a função vai executar
/* se passasse exibeAlgo(), ele estaria chamando a função, e não passando ela como parâmetro
executaria ela 1 vez só */

setTimeout(nome, 5000); // depois de 5 segundos, ela vai executar 1 vez só