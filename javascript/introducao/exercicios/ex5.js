var usuarios = [
    {
        nome: 'Giovanna',
        habilidades: ['HTML', 'CSS', 'JS', 'React', 'Node']
    },
    {
        nome: 'Guilherme',
        habilidades: ['Python', 'HTML', 'JS']
    }
]

for(usuario of usuarios) {
    console.log(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(', ')}`)
}