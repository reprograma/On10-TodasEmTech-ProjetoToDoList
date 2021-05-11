
/////TENTATIVA DE FAZER SOZINHA
/*const container = document.getElementById('container');

console.log(container, "paragrafo");


const texto = document.createElement('p');

texto.innerText = "criando para estudo";

container.appendChild(texto)

const todoLista = document.getElementById('todoLista');

const itensLista = document.createElement('li');

itensLista.innerHTML = <ul>

</ul>;

todoLista.appendChild(itensLista);*/


///// FAZENDO COM A PROFESSORA 

//chamar todas as variáveis antes deexecutar suas ações


const inputado = document.querySelector('#todoInput');
const botao = document.getElementById('todoSubmit');

//variável da ul
const listaTarefas = document.getElementById('todoLista');

//criando variável do formulário

const formulario = document.getElementById('todoForm');

//variavél (nó) do botão limpar
const botaoLimpar = document.getElementById('todoRemoverTodos');

//variavél (nó) do botão marcar todos
const botaoMarcarTodos = document.querySelector('#todoMarcarTodos'); /*se habituar a usar o querySelector também*/

//criando o evento botão (todos as ações funcionam após o clique do botão por isso são inseridas dentro do evento botão)

botao.addEventListener('click', (event) => {
    //evita que o formulario seja enviado ao clicar (que é nativo do javascript)
    event.preventDefault();
   
    const elementoLista = document.createElement('li');
    const textoElemento = document.createElement('p');
    const deletaElemento = document.createElement('span'); /*excluir itens da lista individualmente (colocar um evento para remover esse nó do DOM)*/

    textoElemento.innerText = inputado.value;
    deletaElemento.innerText = '🧨';


// Função apra evitar que o input seja feito com espaços em branco
//Trim remove os espaços em branco
if(textoElemento.innerText.trim() === '') {
    alert("Insira uma tarefa")
} else{

    //pega o nó mãe e acrescenta nele um elemento filho através do append
    listaTarefas.appendChild(elementoLista);
    elementoLista.appendChild(textoElemento);
    elementoLista.appendChild(deletaElemento);
    
    //limpa o campo de escrita após o clique
    formulario.reset();
}


    //função para dar check no item da lista(para isso é preciso adicionar um evento de clique quando o item for "selecionado")
    textoElemento.addEventListener('click', () =>{
        textoElemento.classList.add('checked');
    });


    //função para deletar o item da  lista ao clicar (ao cilcar no elemento 🧨 a ação vai até a lista de tarefas e remove o elesmento da lista correspondente )
    deletaElemento.addEventListener('click', () =>{
       listaTarefas.removeChild(elementoLista);
    });


    //função para marcar todos
    botaoMarcarTodos.addEventListener('click', () => {

        if (botaoMarcarTodos.innerText=== 'Marcar Todos') {
            const todosParagrafos = document.querySelectorAll('p');
     
            todosParagrafos.forEach(paragrafo => {
                 paragrafo.classList.add("checked");
     
            });
            
            botaoMarcarTodos.innerText = 'Desmarcar Todos';
        } else {

            const todosParagrafos = document.querySelectorAll('p');
     
            todosParagrafos.forEach(paragrafo => {
                 paragrafo.classList.remove("checked");
     
            });
            
            botaoMarcarTodos.innerText = 'Marcar Todos';
            

        }




    });


    //função para limpar
    botaoLimpar.addEventListener('click', () => {
        listaTarefas.innerHTML = '';
        console.log("deletar tudo")
     });

});


