const botaoSalvar = document.getElementById("todoSubmit");
const TarefaList = document.getElementById("todoLista");
const input = document.querySelector("#todoInput");
const form = document.getElementById("todoForm");
const buttonLimpar = document.getElementById("todoRemoverTodos");
const buttonMarcar = document.querySelector("#todoMarcarTodos");

botaoSalvar.addEventListener("click", (event) => {
  event.preventDefault();
  const listelement = document.createElement("li");
  const element = document.createElement("p");
  const delet = document.createElement("span");

  element.innerText = input.value;
  delet.innerText = "🍓";

  if (element.innerText.trim() === "") {
    alert("Porfavor insira uma tarefa");
  } else {
    //pegamos o nó mãe , e acrescentamos o elemento filho com o append
    TarefaList.appendChild(listelement);
    listelement.appendChild(element);
    listelement.appendChild(delet);

    form.reset();
  }

  element.addEventListener("click", () => {
    element.classList.add("checked");
  });

  delet.addEventListener("click", () => {
    TarefaList.removeChild(listelement);
  });

  buttonMarcar.addEventListener("click", () => {
    if (buttonMarcar.innerText === "Marcar todos") {
      const paragrafo = document.querySelectorAll("p");
      paragrafo.forEach((item) => {
        item.classList.add("checked");
      });
      buttonMarcar.innerText = "Desmarcar todos";
    } else {
      const paragrafo = document.querySelectorAll("p");
      paragrafo.forEach((item) => {
        item.classList.remove("checked");
      });
      buttonMarcar.innerText = "Marcar todos";
    }
  });

  buttonLimpar.addEventListener("click", () => {
    TarefaList.innerHTML = "";
  });
});
