//variável do input (caixinha)
const inputado = document.querySelector('#todoInput');

//variável para o botão+
const botao = document.getElementById('todoSubmit');

//variavél para a lista
const listaTarefas = document.getElementById('todoLista');

//variável para o formulário
const formulario = document.getElementById('todoForm');

//variável para o botao "MArcar todos"
const botaoMarcarTodos = document.querySelector('#todoMarcarTodos');

const botaoLimpar = document.getElementById('todoRemoverTodos');

//função do botão + (ação do botão de acrescentar as tarefas)
botao.addEventListener('click', (event) => {

    event.preventDefault();

// criando elementos no JS dentro da função     
    const elementoLista = document.createElement('li');
    const textoElemento = document.createElement('p');
    const elementoRemove = document.createElement('span');

    textoElemento.innerText = inputado.value;
    elementoRemove.innerText = '🗑';

    if(textoElemento.innerText.trim() === ''){
        alert("Insira uma tarefa");
    }else{
        listaTarefas.appendChild(elementoLista);
        elementoLista.appendChild(textoElemento);
        elementoLista.appendChild(elementoRemove);

    //ação de limpar o histórico do formulario    
        formulario.reset();
    }

    //função checar (risca o item da lista)    

    textoElemento.addEventListener('click' , () => {
        textoElemento.classList.add('checked');
    });

    //função para o botão de remover a lista 

    elementoRemove.addEventListener('click' , () => {
        elementoLista.remove();

    });

    //função para marcar todos através do botão na tela "marcar todos"
    botaoMarcarTodos.addEventListener('click' , () => {

        if (botaoMarcarTodos.innerText ==='Marcar todos') {
     // o querryselectorall acessa todos os "p"     
            const todosParagrafos = document.querySelectorAll('p');

            todosParagrafos.forEach(paragrafo => {
                paragrafo.classList.add('checked')
            });
            botaoMarcarTodos.innerText = 'Desmarcar todos';
        
        }else{
            const todosParagrafos = document.querySelectorAll('p');

            todosParagrafos.forEach(paragrafo => {
                paragrafo.classList.remove('checked')
            });
            botaoMarcarTodos.innerText = 'Marcar todos';
        }
    
    });

    // função limpar tudo da lista 
    botaoLimpar.addEventListener('click', () => {
        listaTarefas.remove();


    //outra forma de fazer
    //botaoLimpar.addEventListener('click', () => {
    //   listaTarefas.innerHTML = '';
    
    });

    
 

});

