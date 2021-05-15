const inputado = document.querySelector('#todoInput');
const botao = document.getElementById('todoSubmit');
const listaTarefas = document.getElementById('todoLista');
const formulario = document.getElementById('todoForm');
const botaoLimpar = document.getElementById('todoRemoverTodos');
const botaoMarcarTodas = document.querySelector('#todoMarcarTodos');

botao.addEventListener('click', (event) => {

    event.preventDefault();

    const elementoLista = document.createElement('li');
    const textoElemento = document.createElement('p');
    const deletaElemento = document.createElement('span');


    textoElemento.innerText = inputado.value;
    deletaElemento.innerText = '🗑️';

    if (textoElemento.innerText.trim() === '') {
        alert("Insira uma tarefa");
    } else {

        listaTarefas.appendChild(elementoLista);
        elementoLista.appendChild(textoElemento);
        elementoLista.appendChild(deletaElemento);

        formulario.reset();
    }
    textoElemento.addEventListener("click", () => {
        textoElemento.classList.add("checked");
    });

    //função de delete
    deletaElemento.addEventListener("click", () => {
        listaTarefas.removeChild(elementoLista);
     
    });

    botaoMarcarTodas.addEventListener('click', () => {
        if (botaoMarcarTodas.innerText === 'Marcar todos') {
            const todosParagrafos = document.querySelectorAll('p');
            console.log(todosParagrafos, "vai retornar todos os <p> encontrados");

            todosParagrafos.forEach(item => {
                item.classList.add("checked");
            });
            botaoMarcarTodas.innerText = 'Desmarcar todos';
        } else {
            const todosParagrafos = document.querySelectorAll('p');
            todosParagrafos.forEach(item => {
                item.classList.remove("checked");
            });
            botaoMarcarTodas.innerText = 'Marcar todos';
        }

    });

    // Função de limpar
    botaoLimpar.addEventListener('click', () => {
        
        listaTarefas.innerHTML = '';
    });

});