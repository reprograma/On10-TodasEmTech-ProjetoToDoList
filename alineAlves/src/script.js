const inputado = document.querySelector("#todoInput"); // cria uma variável e salva o id do html 
const botao = document.getElementById("todoSubmit");
const listaTarefas = document.getElementById("todoLista");
const formulario = document.getElementById("todoForm");
const botaoLimpar = document.getElementById("todoRemoverTodos");
const botaoMarcar = document.getElementById("todoMarcarTodos");


botao.addEventListener("click", (event) => { //cria evento botao // cria um evento, que é o clik, quando clica vai executar a função
    event.preventDefault(); // faz com o que o evnto seja concluido quando a gente que, faz com que pare de ser automatico

    const elementoLista = document.createElement("li"); // criando o elemento lista
    const textoElemento = document.createElement("p"); // criando o elemento paragrafo
    const iconeDeletar = document.createElement("span");

    textoElemento.innerText = inputado.value; //Depois de ter criado o elemento P ele associou ele ao imnputao e funcionar quando clicar inp//trocou atribuimos o valor do input ao <p> criando a apartir do clique no botão
    iconeDeletar.innerText = "🗑 ";

    if (textoElemento.innerText.trim() === '') {  // se quando clicar no botão, tive vazio vai aparecer uma msg de avisp, pq não vai ser permitido deixa vazio
        //alert("Insira uma tarefa"); 
        document.getElementById('aviso').innerHTML = '❌ Insira uma tarefa'; //aparece um aviso quando o casmpo ta vazio
    } else {
        listaTarefas.appendChild(elementoLista); //chamou a variável e vai anexar o que esta na lista, ai vai aparecer o que foi digitado
        elementoLista.appendChild(textoElemento);
        elementoLista.appendChild(iconeDeletar);

        formulario.reset(); //o campo fico limpo depois de add //pegamos o nó do formulario e usamos um método para limpar o input
        aviso.remove(); // remove o aviso quando add as tarefas
    }

    //função checar
    textoElemento.addEventListener("click", () => { // pega a varivel que foi criada para o paragrafo e quando clicar selecionar o item
        textoElemento.classList.add("checked");
    });

    //função deletar
    iconeDeletar.addEventListener("click", () => { //pega a variavel de excluir e apaga a linha selecionada
        listaTarefas.removeChild(elementoLista);
    });

    //Marcar todos os itens como feito
    botaoMarcar.addEventListener("click", () => {  // cria o botão e chamna a função clik 
        let todosParagrafos = document.querySelectorAll("p"); // seleciona os paragrafos
        if (botaoMarcar.innerText === "Marcar todos") {  
        console.log(todosParagrafos, "todos os paragrafos aqui");
        todosParagrafos.forEach((paragrafo) => { //selecionas todos os paragrafos que tiver adicionado
            paragrafo.classList.add("checked");
        });
            botaoMarcar.innerText = "Desmarcar todos"; //muda o texto do botão
        } else {
    todosParagrafos.forEach((item) => { 
            item.classList.remove("checked"); //desmarca os botoes selecionados
    });
        botaoMarcar.innerText = "Marcar todos"; //muda o texto do botão
        }
    });

    //função limpar, eu que fiz, não sei se ta certo
    //     botaoLimpar.addEventListener("click",() => { // eu que fiz, nã sei se ta certo, mas funcionou
    //         listaTarefas.remove(elementoLista);
    // });

    //a prof que fez
    botaoLimpar.addEventListener("click", () => { //apaga todoas tarefas
        listaTarefas.innerHTML = "";
    });
});
