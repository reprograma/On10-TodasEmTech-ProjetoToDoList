// selecionando para depois manipular
// variável do input
const inputado = document.querySelector('#todoInput');
//variável do botão
const botao = document.querySelector('#todoSubmit');
//variável da lista
const listaTarefas = document.querySelector('#todoLista');
// variável do formulário
const formulario = document.getElementById('todoForm');
// variável que vai limpar todods
const botaoLimpar = document.getElementById('todoRemoverTodos');
// variável que vai marcar todas
const botaoMarcarTodas = document.querySelector('#todoMarcarTodos');

console.log(botao);
// criando evento botão
botao.addEventListener('click' , (event) => {
  // previnindo que o formulário seja enviado ao clicar
  event.preventDefault();
  
  const elementoLista = document.createElement('li');
  const textoElemento = document.createElement('p');
  const deletaElemento = document.createElement('span')

// atrubuíndo o valor do input ao <p> criado a partir do clique no botão
textoElemento.innerText = inputado.value;
deletaElemento.innerText = '❌';

if(textoElemento.innerText.trim() === '') {
  alert("Insira uma tarefa");
} else {

//pegando o nó mãe e acrescentando o elemento filho com o append
listaTarefas.appendChild(elementoLista);
elementoLista.appendChild(textoElemento);
elementoLista.appendChild(deletaElemento);


formulario.reset();

}

// função de checar
textoElemento.addEventListener('click', () => {
textoElemento.classList.add('checked');
});

//função de deletar
deletaElemento.addEventListener('click', () => {
  listaTarefas.removeChild(elementoLista);
  //outra forma de resolver
  //elementoList.remove();
});

//todo função de marcar todas
botaoMarcarTodas.addEventListener("click", () => {
  //o querySelectorAll retorna uma array com itens de acordo com parameto passado

  if (botaoMarcarTodas.innerText === "Marcar todos") {
    
      let todosParagrafos = document.querySelectorAll("p");

    console.log(todosParagrafos, "vai retornar todos os <p> encontrados");
    //pegar Todos os <p>
    //utiliza um foreach para acrescentar uma classe em casa um

    todosParagrafos.forEach(item => {
      item.classList.add("checked");
    });

    botaoMarcarTodas.innerText = "Desmarcar todos";
  } else {
    //const todosParagrafos = document.querySelectorAll("p");
    todosParagrafos.forEach(item => {
      item.classList.remove("checked");

    });

    botaoMarcarTodas.innerText = "Marcar todos";
  }
});

//todo função de limpar
botaoLimpar.addEventListener('click', () =>{
  listaTarefas.innerHTML = '';
});

});

