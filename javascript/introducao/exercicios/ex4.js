function experiencia(anos) {
    if(anosEstudo >= 0 && anosEstudo <= 1) return 'Iniciante';
    if(anosEstudo > 1 && anosEstudo <= 3) return 'Intermediário';
    if(anosEstudo > 3 && anosEstudo <= 6) return 'Avançado';
    if(anosEstudo > 7) return 'Jedi Master';
    return 'Idade inválida'
}
  
var anosEstudo = -1; 
console.log(experiencia(anosEstudo));
  // De 0-1 ano: Iniciante
  // De 1-3 anos: Intermediário // De 3-6 anos: Avançado
  // De 7 acima: Jedi Master