// nó do input
const inputado = document.querySelector('#todoInput');

//nó do botao
const botao = document.getElementById('todoSubmit');

//nó da ul
const listaTarefas = document.getElementById('todoLista');

//nó do formulário
const formulario = document.getElementById('todoForm');

//nó do botão limpar 
const botaoLimpar = document.getElementById('todoRemoverTodos');

// nó do botão marcar todos
const botaoMarcarTodas = document.querySelector('#todoMarcarTodos');

// criar evento botão de adicionar elemento
botao.addEventListener('click', (event) => {
    //previne que o formulário seja enviado ao clicar, espera processar o que precisa da função
    event.preventDefault();

    const elementoLista = document.createElement('li');
    const textoElemento = document.createElement('p');
    //adiciona uma class ao p 
    textoElemento.classList.add("texto_elemento_lista");
    const deletaElemento = document.createElement('span');

    // atribuímos o valor do input ao <p> criado a partir do clique no botão
    textoElemento.innerText = inputado.value;
    // atribuindo um texto ao span da li
    deletaElemento.innerText = '🗑️';

    //verificando se o input inserido é vazio ou composto apenas por espaços
    if (textoElemento.innerText.trim() === '') {
        alert("Insira uma tarefa");
    } else {
        //pegamos o nó mãe , e acrescentamos o elemento filho com o append
        listaTarefas.appendChild(elementoLista);
        elementoLista.appendChild(textoElemento);
        elementoLista.appendChild(deletaElemento);

        // pegamos o nó do formulário e utilizamos um método para limpar o input
        formulario.reset();

    }

    //função que checa que adiciona uma classe a cada p de cada li e, a partir disso, altera o estilo do p
    textoElemento.addEventListener("click", () => {
        textoElemento.classList.add("checked");
    });

    //função de deletar elemento a li desejada
    deletaElemento.addEventListener("click", () => {
        listaTarefas.removeChild(elementoLista);
        // outra de forma de resolver >>> elementoLista.remove();
    });


    //função de marcar todo p 
    botaoMarcarTodas.addEventListener('click', () => {
        if (botaoMarcarTodas.innerText === 'Marcar todos') {
            const todosParagrafos = document.querySelectorAll('.texto_elemento_lista');

            todosParagrafos.forEach(item => {
                item.classList.add("checked");
            });
            botaoMarcarTodas.innerText = 'Desmarcar todos';
        } else {
            const todosParagrafos = document.querySelectorAll('.texto_elemento_lista');
            todosParagrafos.forEach(item => {
                item.classList.remove("checked");
            });
            botaoMarcarTodas.innerText = 'Marcar todos';
        }

    });

    //função de limpar tudo
    botaoLimpar.addEventListener('click', () => {
        listaTarefas.innerHTML = '';
    });

});