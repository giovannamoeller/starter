const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Ok');
    }, 2000);
});

minhaPromise()
    .then(response => {
        console.log(response)
    }).catch(reject => {
        console.log(reject)
    });

async function executaPromise() {
    const response = await minhaPromise();
    console.log(response);
}   

executaPromise();