var app = document.querySelector('div#app');

// .outerHtml - Todo o Html do elemento
// .innerHtml - Html interno
// .innerText - Todo o texto, sem tags

console.log(app);
console.log(app.innerHTML)
console.log(app.outerHTML)

var paragrafo = document.querySelector('p#paragrafo');

paragrafo.innerText = 'teste';