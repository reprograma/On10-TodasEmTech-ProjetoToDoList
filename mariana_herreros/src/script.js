//variavel do input
//variável do botão de adicionar
//variável da ul


//nó do input
const inputado = document.querySelector('#todoInput');

//nó do botão
const botao = document.getElementById('todoSubmit');

//nó da ul
const listaTarefas = document.getElementById('todoLista');

//nó do botão marcar todos
const botaoMarcarTodas = document.querySelector('#todoMarcarTodos');

//nó do botão limpar
const botaoLimpar = document.querySelector('#todoRemoverTodos');

//variável do formulário
const formulario = document.getElementById('todoForm');


//console.log(inputado, "inputado");
//console.log(botao, "botao");
//console.log(listaTarefas, "lista");


//criar evento botão

botao.addEventListener('click', (event) => {

    //previne que o formulário seja enviado ao clicar, espera processar o que precisa da função
    event.preventDefault();

    const elementoLista = document.createElement('li');

    const textoElemento = document.createElement('p');

    const deletaElemento = document.createElement('span');




    //atribuimos o valor do input ao <p> criado a partir do clique no botão

    textoElemento.innerText = inputado.value;
    deletaElemento.innerText = '✔';



    if (textoElemento.innerText.trim() === '') {
        alert("Insira uma tarefa");
    } else {
    }

    //pegamos o nó mãe, e acrescentamos o elemento filho com o append
    listaTarefas.appendChild(elementoLista);
    elementoLista.appendChild(textoElemento);
    elementoLista.appendChild(deletaElemento);


    //pegamos o nó do formulário e utilizamos um método para limpar o input
    formulario.reset();

    //função checar
    textoElemento.addEventListener('click', () => {

        textoElemento.classList.add('checked');

    });

    //função deletar

    deletaElemento.addEventListener('click', () => {

        //Várias forma de resolver

        //elementoLista.removeChild(deletaElemento);
        //elementoLista.removeChild(textoElemento);

        //elementoLista.remove();

        listaTarefas.removeChild(elementoLista);

    });

    //função de marcar todos

      //TODO função de marcar todos 
      botaoMarcarTodas.addEventListener('click', () => {
        // o querySelectorALl retorna um array com itens de acordo o passado como parâmetro
        const todosParagrafos = document.querySelectorAll('p');

        console.log(todosParagrafos, "vai retornar todos os <p> encontrados");

        todosParagrafos.forEach(item => {
            item.classList.add("checked");
        });
    });



    //função de limpar lista 

    //botaoLimpar.addEventListener(('click')
       // , () => {
       //     alert("clicou botão em limpar");
        //});

botaoLimpar.addEventListener('click',() => {
    //listaTarefas é <ul>
    listaTarefas.innerHTML= "";
});
     


});