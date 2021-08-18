var button = document.querySelector('#app button');
var input = document.querySelector('#app input#idade');

// function () == função anonima
// function doSomething() == função nomeada

function showAge() {
    alert('Sua idade é ' + input.value );
}

button.addEventListener('click', showAge);