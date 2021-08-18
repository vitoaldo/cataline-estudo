var person = {
    name: 'João',
    height: 70.5
}

Object.freeze(person);

person.name = 'Maria';

console.log(person);

var person2 = {
    name: 'João',
    height: 70.5
}

var any = {
    age: 25
}

var newObject = Object.assign(person, any);