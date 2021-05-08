//variáveis
const inputado = document.querySelector('#todoInput');
const botao = document.getElementById ('todoSubmit');
const listaTarefas = document.getElementById ('todoLista');
const formulario = document.getElementById('todoForm');
const botaoMarcarTodos = document.getElementById('todoMarcarTodos');
const botaoLimpar = document.getElementById('todoRemoverTodos');

//criando evento
botao.addEventListener('click', (event) => {
    event.preventDefault();

    const elementoLista = document.createElement('li');
    const textoElemento = document.createElement('p');
    const deletaElemento = document.createElement('span');

//atribuindo valor
    textoElemento.innerText = inputado.value;
    deletaElemento.innerText = '🗑';

 //Fase 2 do projeto   
    if(textoElemento.innerText.trim ()=== '') {
        alert ("Insira uma Tarefa")
    } else{
// acrescentando o elemento filho com o append
    listaTarefas.appendChild(elementoLista);
    elementoLista.appendChild(textoElemento);
    elementoLista.appendChild(deletaElemento);

    }

    formulario.reset();
//função checar
    textoElemento.addEventListener('click', ()=> {
        textoElemento.classList.add('checked');

    });
//função deletar
    deletaElemento.addEventListener("click", () => {
        listaTarefas.removeChild(elementoLista);


   });

    botaoMarcarTodos.addEventListener('click', ()=> {

        if (botaoMarcarTodos.innerText ==='Marcar todos') {
            const todosParagrafos = document.querySelectorAll('p');

        todosParagrafos.forEach(paragrafo => {
        paragrafo.classList.add ("checked");
        
 
        });
        botaoMarcarTodos.innerText = 'Desmarcar todos';

    }else{
        const todosParagrafos = document.querySelectorAll('p');

        todosParagrafos.forEach(item => {
            item.classList.remove("checked");
        });
        
        botaoMarcarTodos.innerText = 'Marcar todos';

}
// função limpar
    botaoLimpar.addEventListener("click", () => {
        listaTarefas.innerText = '';
});


});

});
