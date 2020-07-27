var xhr = new XMLHttpRequest(); // dá acesso ao AJAX => consumir URL via AJAX

xhr.open('GET', 'https://api.github.com/users/giovannamoeller');
xhr.send()

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) { // resposta voltou
        console.log(JSON.parse(xhr.responseText))
    }
}