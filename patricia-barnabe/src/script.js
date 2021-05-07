//nó do input
const inputado = document.querySelector('#todoInput');

//nó do botão
const botao = document.getElementById('todoSubmit');

//nó da ul
const listaTarefas = document.getElementById('todoLista');

//nó do formulario
const formulario = document.getElementById('todoForm');

//nó do botão limpar 
const botaoLimpar = document.getElementById('todoRemoverTodos');

//nó do botão marcar todos
const botaoMarcarTodos = document.querySelector('#todoMarcarTodos');

//nó dos samples
const samples = document.querySelector('.sample');

//criar evento botão
botao.addEventListener('click', (event) => {
    //previne que o formulário seja enviado ao clicar, espera processar o que precisa da função
    event.preventDefault();

    //criando variáveis para receber os valores dos elementos criados 
    const elementoLista = document.createElement('li'); 
    const textoElemento = document.createElement('p');
    const deletaElemento = document.createElement('span');

    //atribuimos o valor do input ao <p> criando a partir do clique no botão
    textoElemento.innerText = inputado.value;
    deletaElemento.innerText = '❌';

    /*FASE 02 
    1º: o código abaixo só deve ocorrer se o input não estiver vazio, caso esteja vazio, precisamos mostrar o alert para o usiário
    2º: para excluir itens da lista, precisamos criar um elemento que represente isso, e colocar evento para remover o nó do dom*/
    if(textoElemento.innerText.trim() === '') {
        alert("Insira uma tarefa");
    } else {
        //pegamos o nó mãe e acrescentamos o elemento filho com o append
        listaTarefas.appendChild(elementoLista);
        elementoLista.appendChild(textoElemento);
        elementoLista.appendChild(deletaElemento);

        //pegamos o nó do formulário e utilizamos um método para limpar o input
        formulario.reset();
        //FASE BÔNUS: pegamos o nó do sample e utilizamos um método para remover as divs do sample quando algo for inserido na lista
        samples.remove();
    }

    //função de checar
    textoElemento.addEventListener('click', () => {
        //classList.add adiciona ao elemento a classe passada como parâmetro 
        textoElemento.classList.add('checked');
    })

    //função de deletar
    deletaElemento.addEventListener('click', () => {
        listaTarefas.removeChild(elementoLista)
        //outra alternativa: elementoLista.remove()
        //para excluir todos os elementos de uma vez: listaTarefas.remove();
    })

    //função de marcar todos
    botaoMarcarTodos.addEventListener('click', () => {
        //o querySelectorALl retorna um array com itens de acordo com o que foi passado como parâmetro
        
        if (botaoMarcarTodos.innerText === 'Marcar Todos') {
            const todosParagrafos = document.querySelectorAll('p');

            //percorre cada item do array e adiciona a classe "checked" a cada um dos itens
            todosParagrafos.forEach(paragrafo => {
                paragrafo.classList.add('checked');
            });
            //muda o texto do botão
            botaoMarcarTodos.innerText = 'Desmarcar Todos';
        } else {
            const todosParagrafos = document.querySelectorAll('p');

            //percorre cada item do array e remove a classe "checked" de cada um dos itens
            todosParagrafos.forEach(paragrafo => {
                paragrafo.classList.remove('checked')
            });
            //muda o texto do botão
            botaoMarcarTodos.innerText = 'Marcar Todos';
        }
    
    })

    //função de limpar
    botaoLimpar.addEventListener('click', () => {      
        listaTarefas.innerHTML = '';
        //outra alternativa: listaTarefas.remove();
    });

});