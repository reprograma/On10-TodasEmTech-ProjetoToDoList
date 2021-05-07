// precisa: 
// variável do input
// variável do botão de adicionar
// variável da ul

const inputTarefas = document.querySelector('#todoInput');
const botao = document.querySelector('#todoSubmit');
const listaTarefas = document.querySelector('#todoLista');
const formulario = document.querySelector('#todoForm');
const botaoLimpar = document.querySelector('#todoRemoverTodos');
const botaoMarcarTodos = document.querySelector('#todoMarcarTodos');




// criar evento do botão
botao.addEventListener('click', (event) => {
    event.preventDefault();

    //adiciona os elementos na lista
    const elementoLista = document.createElement('li');  
    //cria parágrafo pra onde vai o texto inserido no input
    const textoElemento = document.createElement('p');
    //cria span para excluir linhas individualmente
    const deletaTarefa = document.createElement('span');


    //inclui o valor do input no <p> quando clicado
    textoElemento.innerText = inputTarefas.value;
    deletaTarefa.innerText = '❌';

  if(textoElemento.innerText.trim() === ''){
      alert('Insira uma tarefa');

  } else {
      //elemento filho é acrescentado no nó mãe com o append
      listaTarefas.appendChild(elementoLista);
      elementoLista.appendChild(textoElemento);
      elementoLista.appendChild(deletaTarefa);

      //apaga infos que estavam no input
      formulario.reset() ;

}
    //tarefa cumprida cheeeeck
    textoElemento.addEventListener('click', () => {
      textoElemento.classList.add('checked');
    });
    
    //função de deletar (removeChild)
    deletaTarefa.addEventListener('click', () => {
      listaTarefas.removeChild(elementoLista);
      // também se resolve com elementoLista.remove();
      
    });


    //botão que faz todas as marcações
    botaoMarcarTodos.addEventListener('click', () => {

      if (botaoMarcarTodos.innerText === 'Marcar todos'){
        
        //pega todas as tags p, pra que quando clicar, marcar tudo
        const todosParagrafos = document.querySelectorAll('p');
        
        //percorre cada um dos itens dos arrays, vai fazer a ação
        todosParagrafos.forEach(item => {
          item.classList.add("checked");
        });
        botaoMarcarTodos.innerText = 'Desmarcar todos';

      } else {

          const todosParagrafos = document.querySelectorAll('p');

          todosParagrafos.forEach(item => {
            item.classList.remove('checked');
          });

          botaoMarcarTodos.innerText = 'Marcar todos';

      };
    
      
    });

    botaoLimpar.addEventListener('click', () => {
      listaTarefas.innerHTML = '';
    });
    
    
});

