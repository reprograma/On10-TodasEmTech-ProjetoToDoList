// selecionando para depois manipular
const inputado = document.querySelector('#todoInput');
const botao = document.querySelector('#todoSubmit');
const listaTarefas = document.querySelector('#todoLista');

console.log(botao);
// criar evento botão
botao.addEventListener('click' , (event) => {
  // previne que o formulário seja enviado ao clicar
  event.preventDefault();
  
  const elementoLista = document.createElement('li');
  const textoElemento = document.createElement('p');


// atrubuíndo o valor do input ao <p> criado a partir do clique no botão
textoElemento.innerText = inputado.value;

//pegando o nó mãe e acrescentando o elemento filho com o append
listaTarefas.appendChild(elementoLista);
elementoLista.appendChild(textoElemento);
});
