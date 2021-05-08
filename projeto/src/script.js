
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
    const deletaElemento = document.createElement('span');

    // atribuímos o valor do input ao <p> criado a partir do clique no botão
    textoElemento.innerText = inputado.value;
    deletaElemento.innerText = '🧨';
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

    //função de checar
    textoElemento.addEventListener("click", () => {
        textoElemento.classList.add("checked");
    });

    //função de deletar
    deletaElemento.addEventListener("click", () => {
        listaTarefas.removeChild(elementoLista);
        // outra de forma de resolver >>> elementoLista.remove();
    });


    //função de marcar todos  -- para resolver o conflito da aula foi passada a função e criada na linha 71
    botaoMarcarTodas.addEventListener('click', marcarTodas);

    //função de limpar
    botaoLimpar.addEventListener('click', () => {
        //listaTarefas é <ul>
        listaTarefas.innerHTML = '';
    });

});

function marcarTodas() {
    let tasksText = document.querySelectorAll('p');
    if (botaoMarcarTodas.innerText !== 'Marcar todos') {
        tasksText.forEach((item) => {
            item.classList.remove('checked');
        });
        botaoMarcarTodas.innerText = 'Marcar todos';
    } else {
        tasksText.forEach((item) => {
            item.classList.add('checked');
        });
        botaoMarcarTodas.innerText = 'Desmarcar todos';
    }
}

// exemplo estrutura HTML
{/* <ul>
    <li>
        <p>texto</p>
    </li>
</ul>;; */}

