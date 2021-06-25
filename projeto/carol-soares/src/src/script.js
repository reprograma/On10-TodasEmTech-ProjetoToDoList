const botaoSalvar = document.querySelector('#todoSubmit');
const getTarefa = document.getElementById('todoInput');
const listaTarefas = document.getElementById('todoLista');
const formulario = document.getElementById('todoForm');
const buttonMarcarTodos = document.getElementById('todoMarcarTodos');
const buttonDeletarTodos = document.getElementById('todoRemoverTodos');




botaoSalvar.addEventListener('click', (event) => {
    event.preventDefault();

    const li = document.createElement('li');
    const p = document.createElement('p');
    const imgRemove = document.createElement('img');
    p.innerText = getTarefa.value;
    imgRemove.src = './img/lixeira.png';
    imgRemove.classList.add('img');

    //CRIA UM NOVO ITEM

    if (p.innerText.trim() === '') {
        document.getElementById('mensagem').innerHTML = 'ATENÇÃO: Insira uma tarefa!'
    } else {

        listaTarefas.appendChild(li);
        li.appendChild(p);
        li.appendChild(imgRemove);
        document.getElementById('mensagem').innerHTML = '';

        //LIMPA TODOS OS CAMPOS DO FORMULARIO

        formulario.reset();
    }

    //MARCA O ITEM COMO CHECADO

    li.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'P') {
            ev.target.classList.toggle('checked');
        }
    }, false);

    //Outra forma de Marcar

    /* p.addEventListener('click', () => {
         p.classList.add('checked');
     })*/

    //REMOVE O ITEM

    imgRemove.addEventListener('click', () => {
        //li.remove();
        listaTarefas.removeChild(li);
    })


})


//ESTA FUNÇAO MARCA TODOS

buttonMarcarTodos.addEventListener('click', () => {
    let getTodosP = document.querySelectorAll('p');

    if (buttonMarcarTodos.innerText === 'Marcar todos') {

        getTodosP.forEach(paragrafo => paragrafo.classList.add('checked'));
        buttonMarcarTodos.innerText = 'Desmarcar todos';
    } else {

        getTodosP.forEach(paragrafo => paragrafo.classList = '');
        buttonMarcarTodos.innerText = 'Marcar todos';
    }

})

//ESTA FUNÇÃO DELETA  TODOS

buttonDeletarTodos.addEventListener('click', () => {
    //listaTarefas.removeChild(li);
    listaTarefas.innerText = '';


})