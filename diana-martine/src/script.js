// variáveis globais
const form = document.querySelector("#todoForm");
const toDo = document.querySelector("#todoInput");
const submit = document.querySelector("#todoSubmit");
const toDoList = document.querySelector("#todoLista");
const selectAll = document.querySelector("#todoMarcarTodos");
const clearAll = document.querySelector("#todoRemoverTodos");

// prevenção do botão submit
submit.addEventListener("click", (e) => {
  e.preventDefault();
});

// função de adicionar nova tarefa
function addToDo() {
  // criando elementos de modo dinâmico
  const newToDo = document.createElement("li");
  const newToDoText = document.createElement("p");
  const containerIcons = document.createElement("div");
  const check = document.createElement("img");
  const remove = document.createElement("img");

  // alterando atributos dos ícones
  newToDoText.classList.add("newToDoText");
  containerIcons.classList.add("container-icons");
  check.src = "./assets/checked-off.svg";
  check.classList.add("check");
  remove.src = "./assets/minus.svg";
  remove.classList.add("remove");

  // adicionando texto de entrada na tarefa adicionada
  newToDoText.innerText = toDo.value;

  // tratando erro de entrada
  if (newToDoText.innerText.trim() === "") {
    document.querySelector("#message").innerHTML =
      "Por favor, preencha os campos!";
  } else {
    // adicionando tarefa
    toDoList.appendChild(newToDo);
    newToDo.appendChild(newToDoText);
    newToDo.appendChild(containerIcons);
    containerIcons.appendChild(check);
    containerIcons.appendChild(remove);
    document.querySelector("#message").innerHTML = "";

    // limpando formulário
    form.reset();

    // função de checado
    check.addEventListener("click", () => {
      if (check.getAttribute("src") == "./assets/checked-off.svg") {
        check.src = "./assets/checked-on.svg";
        newToDoText.classList.add("checked");
      } else {
        check.src = "./assets/checked-off.svg";
        newToDoText.classList.remove("checked");
      }
    });

    // função de remover
    remove.addEventListener("click", () => {
      toDoList.removeChild(newToDo);
    });

    // função limpar lista
    clearAll.addEventListener("click", () => {
      newToDo.remove();
    });
  }
}

// função marcar todos
selectAll.addEventListener("click", () => {
  let getAllToDo = document.querySelectorAll(".newToDoText");
  let getAllCheckIcon = document.querySelectorAll(".check");

  if (
    selectAll.innerText === "Marcar todos" ||
    getAllCheckIcon.src == "./assets/checked-off.svg"
  ) {
    getAllToDo.forEach((p) => p.classList.add("checked"));
    getAllCheckIcon.forEach((img) => (img.src = "./assets/checked-on.svg"));
    selectAll.innerText = "Desmarcar todos";
  } else if (selectAll.innerText === "Desmarcar todos") {
    getAllToDo.forEach((p) => p.classList.remove("checked"));
    getAllCheckIcon.forEach((img) => (img.src = "./assets/checked-off.svg"));
    selectAll.innerText = "Marcar todos";
  }
});
