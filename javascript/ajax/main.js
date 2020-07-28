var xhr = new XMLHttpRequest(); // dá acesso ao AJAX => consumir URL via AJAX

xhr.open('GET', 'https://api.github.com/users/giovannamoeller');
xhr.send()

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) { // resposta voltou
        console.log(JSON.parse(xhr.responseText))
    }
}

// Promises

var minhaPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/giovannamoeller');
        xhr.send();
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) { // resposta voltou
               if(xhr.status == 200) {
                   resolve(JSON.parse(xhr.responseText));
               } else {
                   reject('Erro na requisição');
               }
            }
        }
    })
}

minhaPromise()
    .then(response => { // resolve invoca o then
        console.log(response)
    })
    .catch(error => { // reject invoca o catch
        console.log(error)
    })
// console.log(resultado); // não espera esse resultado
