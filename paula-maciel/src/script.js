//variável do input
const inputado = document.querySelector('#todoInput');

//variável do botão
const botao = document.getElementById('todoSubmit');

//variável da ul
const listaTarefas = document.getElementById('todoLista');

//variável da formulário
const formulario = document.getElementById('todoForm');

//criar evento do botão
botao.addEventListener('click', (event) => {
    //previne que o formulário seja enviado ao clicar, espera processar o que precisa da função
    event.preventDefault();

    const elementoLista = document.createElement('li');
    const textoElemento = document.createElement('p');
    const deletaElemento = document.createElement('span');


    deletaElemento.innerText = "X";

    //atribuímos o valor do input ao <p> criado a partir do clique no botão
    textoElemento.innerText = inputado.value;

    //Validar campo de texto para não entrar itens vazios ou somente com espaços
    if(textoElemento.innerText.trim() === "") {
        alert ("Insira uma tarefa!")
    } else {
        //pegamos o nó mãe e acrescentamos o elemento filho com o append
        listaTarefas.appendChild(elementoLista);
        elementoLista.appendChild(textoElemento);
        elementoLista.appendChild(deletaElemento);
    
        //pegamos o nó do formulário e utilizamos um método para limpar o input
        formulario.reset();
    }

    //função de checar
    textoElemento.addEventListener('click', () => {
        textoElemento.classList.add('checked');
    });

    //função de apagar li
    deletaElemento.addEventListener('click', () => {
        listaTarefas.removeChild(elementoLista);
        //elementoLista.remove();
    })

    //Botão deletar todos os elementos
    const deletaTodosElementos = document.getElementById('todoRemoverTodos')
    deletaTodosElementos.addEventListener('click', () => {
        listaTarefas.remove();
    })

    /* Outra resolução:
    deletaTodosElementos.addEventListener('click', () => {
        listaTarefas.innerHTML = '';
    }) */

    //Botão de marcar/desmarcar tudo
    const botaoMarcarTodas = document.getElementById('todoMarcarTodos')
    botaoMarcarTodas.addEventListener('click', () => {

        if(botaoMarcarTodas.innerText === 'Marcar Todas') {
            const todosParagrafos = document.querySelectorAll('p');
            todosParagrafos.forEach(paragrafo => {
                paragrafo.classList.add('checked');
        });
        botaoMarcarTodas.innerText = 'Desmarcar Todas';
        } else {
        const todosParagrafos = document.querySelectorAll('p');
        todosParagrafos.forEach(paragrafo => {
            paragrafo.classList.remove('checked');
    });
    botaoMarcarTodas.innerText = 'Marcar Todas';
    } 
});

});