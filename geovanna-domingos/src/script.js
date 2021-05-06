// nó do input
const inputado = document.querySelector('#todoInput');

//nó da botao
const botao = document.getElementById('todoSubmit');

//nó da ul
const listaTarefas = document.getElementById('todoLista');

//nó do formulário
const formulario = document.getElementById('todoForm');

//nó do botão limpar 
const botaoLimpar = document.getElementById('todoRemoverTodos');

// nó do botão marcar todos
const botaoMarcarTodas = document.querySelector('#todoMarcarTodos');

// criar evento botão
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
    deletaElemento.innerText = '🗑️';
    // para excluir itens da lista, precisamos criar um elemento que represente isso, e colocar evento para remover o nó do dom


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

    //função de checar elemento individual
    textoElemento.addEventListener("click", () => {
        textoElemento.classList.add("checked");
    });

    //função de deletar elemento individual
    deletaElemento.addEventListener("click", () => {
        listaTarefas.removeChild(elementoLista);
        // outra de forma de resolver >>> elementoLista.remove();
    });


    //TODO função de marcar todos 
    botaoMarcarTodas.addEventListener('click', () => {
        // o querySelectorALl retorna um array com itens de acordo o passado como parâmetro
        const todosParagrafos = document.querySelectorAll('.texto_elemento_lista');

        //console.log(todosParagrafos, "vai retornar todos os <p> encontrados");

        todosParagrafos.forEach(paragrafo => {
            paragrafo.classList.add("checked");
        });
    });


    //TODO função de limpar tudo
    botaoLimpar.addEventListener('click', () => {
        //listaTarefas é <ul>
        listaTarefas.innerHTML = '';
    });

});