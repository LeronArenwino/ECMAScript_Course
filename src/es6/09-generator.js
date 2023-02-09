function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(['Léron', 'Francisco', 'Ana', 'Ulises', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);