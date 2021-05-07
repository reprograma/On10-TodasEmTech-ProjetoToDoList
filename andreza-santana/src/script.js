// Função que recebe o input do formulário e insere na lista
document.querySelector('#todoSubmit').addEventListener('click', function (event) {
    event.preventDefault();
    const tarefa = document.querySelector('#todoInput').value;
    if (tarefa === '' || tarefa === '   ' || tarefa === ' ') {
        alert('Por favor, inserir uma tarefa!')
    } else {
        document.querySelector('#todoLista').innerHTML += (`<li>
            <p><input type="checkbox" class="checkbox" onclick="marcarTarefa(event)">${tarefa}</p>
            <span class="deletar" onclick="deletarPublicacao(event)"><i class="far fa-trash-alt"></i></span>
        </li>`);
    }
    limparCampos();
})
// Função que limpa os campos inputs do formulário.
function limparCampos() {
    document.querySelector('#todoInput').value = '';
}
// Função que elimina apenas uma tarefa.
function deletarPublicacao(event) {
    event.target.parentElement.parentElement.remove();
}
// Função que marca apenas uma tarefa
function marcarTarefa(event) {
    event.target.parentElement.classList.toggle("checked");
}
// Função que marca todas as tarefas e desmarcar todas as tarefas
document.querySelector('#todoMarcarTodos').addEventListener('click', function (event) {
    event.preventDefault();
    let paragrafos = document.querySelectorAll('p');
    if (paragrafos.length == 0) {
        return;
    }
    let botaoMarcarTodos = document.querySelector('#todoMarcarTodos');
    if (botaoMarcarTodos.innerText === 'Marcar todos') {
        paragrafos.forEach((paragrafo) => paragrafo.classList.add("checked"));
        document.querySelectorAll('.checkbox').forEach((checkbox) => checkbox.checked = true);
        botaoMarcarTodos.innerText = 'Desmarcar todos';
    } else {
        paragrafos.forEach((paragrafo) => paragrafo.classList.remove("checked"));
        document.querySelectorAll(".checkbox").forEach((checkbox) => checkbox.checked = false);
        botaoMarcarTodos.innerText = 'Marcar todos';
    }
})
// Função que elimina todas as tarefas
document.querySelector('#todoRemoverTodos').addEventListener('click', function (event) {
    event.preventDefault();
    const todasTarefas = document.querySelectorAll('li');
    todasTarefas.forEach((tarefa) => tarefa.remove());
})