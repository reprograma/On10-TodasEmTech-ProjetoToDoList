const listaTarefa = document.querySelector("#todoLista");
const caixaTexto = document.querySelector("#todoInput");
const botaoAdicionarItem = document.querySelector("#todoSubmit");
const botaoMarcarTodas = document.querySelector("#todoMarcarTodos");
const limparLista = document.querySelector('#todoRemoverTodos')
const erroAlert = document.querySelector('.erro-alert')

botaoAdicionarItem.addEventListener("click", function (event) {
  event.preventDefault();

  const elementoLista = document.createElement("li");
  const textoElemento = document.createElement("div");
  const deletaElemento = document.createElement("span");

  textoElemento.innerText = caixaTexto.value;
  deletaElemento.classList.add('mdi');
  deletaElemento.classList.add('mdi-trash-can-outline');
  
  if (textoElemento.innerText.trim() === "") {
    erroAlert.classList.remove('show')
    setTimeout(() => {
      erroAlert.classList.add('show')
    }, 2000)
  } else {
    elementoLista.appendChild(textoElemento);
    elementoLista.appendChild(deletaElemento);
    listaTarefa.appendChild(elementoLista);
  }

  caixaTexto.value = "";

  elementoLista.addEventListener("click", () => {
    elementoLista.classList.add("checked");
  });

  deletaElemento.addEventListener("click", () => {
    // listaTarefa.removeChild(elementoLista) outra forma de remover
    elementoLista.remove();
  });

  botaoMarcarTodas.addEventListener("click", () => {
    const todosParagrafos = document.querySelectorAll("p");

    if (botaoMarcarTodas.innerText === "Marcar todos") {
      const todosParagrafos = document.querySelectorAll("p");

      todosParagrafos.forEach((item) => {
        item.classList.add("checked");
      });
      botaoMarcarTodas.innerText = "Desmarcar todos";
    } else {
      const todosParagrafos = document.querySelectorAll("p");

      todosParagrafos.forEach((item) => {
        item.classList.remove("checked");
      });

      botaoMarcarTodas.innerText = "Marcar todos";
    }
  });
});

limparLista.addEventListener('click', (event) => {
  while (listaTarefa.hasChildNodes()) {
    listaTarefa.removeChild(listaTarefa.firstChild)
  }
}) 
