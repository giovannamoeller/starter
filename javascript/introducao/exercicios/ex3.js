function temHabilidade(skills) {
    var hasSkills = skills.indexOf('Javascript');
    if(hasSkills == -1) return false; // -1 significa que não achou no array
    return true;
}

var skills = ['Javascript', 'ReactJS', 'React Native'];
console.log(temHabilidade(skills))