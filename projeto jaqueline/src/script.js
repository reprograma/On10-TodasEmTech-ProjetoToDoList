// nó do input
const inputado = document.querySelector("#todoInput");

//nó do  botao
const botao = document.getElementById("todoSubmit");

//nó da ul
const listaTarefas = document.getElementById("todoLista");

// nó do formulario
const formulario = document.getElementById("todoForm");

// nó de limpar
const botaoLimpar = document.getElementById("todoRemoverTodos");

//no do botao marcar todos
const botaoMarcarTodas = document.querySelector("#todoMarcarTodos");

//criar evento botao
botao.addEventListener("click", (event) => {
  //previne que o formulario seja enviado ao clicar, espera processar o que da função
  event.preventDefault();

  const elementoLista = document.createElement("li");
  const textoElemento = document.createElement("p");
  const deletaElemento = document.createElement("span");
  textoElemento.innerText = inputado.value;
  
  //atribuimos o valor do input ao <p> criado a partir do click do botao
  textoElemento.innerText = inputado.value;
  deletaElemento.innerText = "🗑"; //tecla windows + .
  // para incluir imagem seria incluir "img src e icluir o local da ///////////////////////////imagem"
  // pra excluir itens da lista  precisamos criar um elemento que representa isto e colocar o evento para remover o nó

  if (textoElemento.innerText.value == '') {
    document.getElementById ('mensagem de erro').innerHTML = 'Campo preenchido incorreto. Preencha com uma informação válida.'
    
  } else {

    listaTarefas.appendChild(elementoLista);
    elementoLista.appendChild(textoElemento);
    elementoLista.appendChild(deletaElemento);
    document.getElementById('mensagem de erro').innerHtml = '';
  
    //if (textoElemento.innerText.trim() === "") {
      //alert("insira uma tarefa");
    //} else {
      //pegamos o nó mãe e acrescentamos o elemento filho appendchild
     // listaTarefas.appendChild(elementoLista);
     // elementoLista.appendChild(textoElemento);
     // elementoLista.appendChild(deletaElemento); 
     // opcao com alerta


    //pegamos o nó do formulário e utilizamos um método para limpar o texto inserido no formulario
    formulario.reset();
  }

  //funcao de checar
  textoElemento.addEventListener("click", () => {
    textoElemento.classList.add("checked");
  });

  // funcao de deletar
  deletaElemento.addEventListener("click", () => {
    listaTarefas.removeChild(elementoLista);
    // outra forma de resolver >>> elementoLista.remover
  });

  //TODO função de marcar todos
  botaoMarcarTodas.addEventListener('click', () => {
    //o querySelectorAll retorna uma array com itens de acordo com parameto passado

    if (botaoMarcarTodas.innerText === 'Marcar todos') {

     let todosParagrafos = document.querySelectorAll("p");
      console.log(todosParagrafos, "vai retornar todos os <p> encontrados");
      //pegar Todos os <p>
      //utiliza um foreach para acrescentar uma classe em casa um

      todosParagrafos.forEach(item => {
        item.classList.add("checked");
      });

      botaoMarcarTodas.innerText = "Desmarcar todos";
    } else {
      const todosParagrafos = document.querySelectorAll("p");
      todosParagrafos.forEach(item => {
        item.classList.remove("checked");

      });

      botaoMarcarTodas.innerText = "Marcar todos";
    }
  });

  //TODO função de limpar
  botaoLimpar.addEventListener("click", () => {
    //listaTarefas ul
    console.log("limpar");
    listaTarefas.innerHTML = "";
  });
});
