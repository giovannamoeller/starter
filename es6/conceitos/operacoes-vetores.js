const array = [1, 3, 4, 6, 7, 10];

const newArray = array.map(function(item, index) {
    return item + index; // return item * 2 ... entre outros
})

console.log(newArray);

const sum = array.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

// 1a vez = total = 0 e next = 1
// 2a vez = total = 1 e next = 3
// 3a vez = total = 3 e next = 4

const filter = array.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

const find = array.find(function(item) {
    return item === 4;
});

console.log(find)
