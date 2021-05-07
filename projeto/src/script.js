// constantes para pegar os dados inputados
const inputado = document.querySelector('#todoInput');
const botao = document.getElementById('todoSubmit');
const listaTarefas = document.getElementById('todoLista');
const formulario = document.getElementById('todoForm');

// criar evento botão
document.addEventListener('DOMContentLoaded', function(){
botao.addEventListener('click', (event) => {

//previne que o formulário seja enviado ao clicar, espera processar o que precisa da função
    event.preventDefault();

/*constantes que vão adicionar os dados inputados ao HTML, além das funcionalidades requeridas na atividade, como marcar tudo/deletar tudo/deletar elemento*/

    const elementoLista = document.createElement('li');
    const textoElemento = document.createElement('p');
    const deletaElemento = document.createElement('span');
    const deletaTudo = document.getElementById('todoRemoverTodos');
    const marcaTudo = document.getElementById('todoMarcarTodos');


//o valor mostrado em <p> de textoElemento no HTML vai ser igual ao valor que foi inputado
//ou seja, o texto digitado no input vai ser replicado como elemento dentro de elementoLista
//o deletaElemento insere um caractere que vai representar o botão de deletar elemento

    textoElemento.innerText = inputado.value;
    deletaElemento.innerText = '❌';

//o código para mostrar um alert caso os dados não as tarefas não tenham sido inseridas
//caso tenham sido, a função else executa a replicação do input na lista normalmente

    if (textoElemento.innerText.trim() === '') {
        alert('Insira uma tarefa');
    } else {

//essa parte não sei se entendi muito bem, não tinha visto esse método appendChild
//mas pelo que entendi, ele está estabelecendo a "árvore genealógica" dos elementos, estabelecendo uma hierarquia

    listaTarefas.appendChild(elementoLista);
    elementoLista.appendChild(textoElemento);
    elementoLista.appendChild(deletaElemento);

//método padrão pra que não precise apagar o texto do input quando este for jogado pra listaTarefas
    formulario.reset();

//função de dar check
    textoElemento.addEventListener('click', () => {
        textoElemento.classList.add('checked');
    });

//função deletar elemento individualmente
    deletaElemento.addEventListener('click', () => {
        elementoLista.remove();
    });

//função dar check em tudo
//quando o valor de marcaTudo estiver "Marcar todos", o código vai executar a função de adicionar o valor "checked" aos elementos
//quando tudo estiver com "checked", o botão vai mudar o HTML de marcaTudo pra "Desmarcar todos"
//o else faz o contrário, remove o valor "checked" de todos os elementos e troca o HTML do botão para "Marcar todos"

    marcaTudo.addEventListener('click', () => {

        if(marcaTudo.innerHTML === 'Marcar todos') {
            
            const todosParagrafos = document.querySelectorAll('p');
    
            todosParagrafos.forEach(item => {
                item.classList.add('checked');
            });
            
            marcaTudo.innerHTML = 'Desmarcar todos';

        } else {
            
            const todosParagrafos = document.querySelectorAll('p');
    
            todosParagrafos.forEach(item => {
                item.classList.remove('checked');
            });
            
            marcaTudo.innerHTML = 'Marcar todos';

        }


    });

//função deletar tudo

    deletaTudo.addEventListener('click', () => {
        listaTarefas.remove();
    });

}
})
});