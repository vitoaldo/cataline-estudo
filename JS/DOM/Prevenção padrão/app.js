var button = document.querySelector('#app button');
var input = document.querySelector('#app input#idade');
var link = document.querySelector('#app a');

button.addEventListener('click', function (event) {
    event.preventDefault(); // previne o reload da pagina quando um botão dentro de um form
    console.log(input.value);
});

link.addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento de quando uma ancora é selecionado, não adiciona tags a url
    // Uma ancora direciona para o conteudo que tenha o id informado
    console.log('clicado!');
});