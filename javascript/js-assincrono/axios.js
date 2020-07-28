axios.get('https://api.github.com/users/giovannamoeller')
    .then(response => {
        console.log(response) 
    }).catch(error => {
        console.log(error)
    })