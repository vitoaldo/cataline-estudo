var app = document.querySelector('div#app');

var link = document.createElement('a');
var textLink = document.createTextNode = 'Visitar Google!'

link.setAttribute('href', 'http://google.com.br');
link.appendChild(textLink);

app.appendChild(link);