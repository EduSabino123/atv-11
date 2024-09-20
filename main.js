console.log('Olá mundo!');

// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

// Seleciona o elemento HTML que vamos usar para imprimir a mensagem
const mensagemElement = document.getElementById("mensagem");

// Cria a mensagem que vamos imprimir
const mensagem = "Olá, mundo! Este é um exemplo de JavaScript!";

// Imprime a mensagem na tela
mensagemElement.innerText = mensagem;