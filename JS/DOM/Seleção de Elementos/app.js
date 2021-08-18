console.log(window.document);
console.log(window.document.body);

var input = document.getElementById('idade'); 
console.log(input);

var inputClass = document.getElementsByClassName('idade');
console.log(inputClass);

var inputName = document.getElementsByName('idade');
console.log(inputName);

var inputQuery = document.querySelector('input#idade');
// # id ID NÃO SE REPETE
// [name="idade"] por atributo, sendo qualquer um como name, input, placeholder, etc
// . por class

var inputQueryAll = document.querySelectorAll('input');

console.log(inputQuery.parentElement); // Mostra o elemento pai
console.log(inputQuery.children); // Retorna os elementos filhos em forma de array

console.log(inputQuery.previousElementSibling); // Mostra o elemento anterior
console.log(inputQuery.nextElementSibling); // Próximo elemento