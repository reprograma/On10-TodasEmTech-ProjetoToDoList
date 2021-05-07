const toDoTextArea = document.getElementById('todoInput');
const btn = document.getElementById('todoSubmit');
const warning = document.getElementById('error-text');
const toDoList = document.getElementById('todoLista');
const form = document.getElementById('todoForm');
const btnCleanUp = document.getElementById('todoRemoverTodos');
const btnMarkAll = document.getElementById('todoMarcarTodos');


btn.addEventListener('click', function TextAreaValidation(event) {
    event.preventDefault();

    const listElement = document.createElement('li');
    const textElement = document.createElement('p');
    const deleteElement = document.createElement('span');


    textElement.innerText = toDoTextArea.value;
    deleteElement.innerText = '🧨';

    if (textElement.innerText.trim() === '') {
        warning.innerText = 'Campo obrigatório, insira uma tarefa'
    } else {
        warning.innerText = '';
        toDoList.appendChild(listElement);
        listElement.appendChild(textElement);
        listElement.appendChild(deleteElement);
    }

    // cleanTextArea();
    // function cleanTextArea() {
    // document.getElementById('todoInput').value = ''

    form.reset();

    deleteElement.addEventListener('click', () => {
        textElement.classList.add('checked');
    });

    deleteElement.addEventListener('click', () => {
        toDoList.removeChild(listElement);
    });

    btnMarkAll.addEventListener('click', () => {
        if (btnMarkAll.innerText === 'Marcar todos') {
            const allParagraphs = document.querySelectorAll('p');
            console.log(allParagraphs);

            allParagraphs.forEach(item => {
                item.classList.add('checked');
            });

            btnMarkAll.innerText = 'Desmarcar todos';
        } else {
            const allParagraphs = document.querySelectorAll('p');
            allParagraphs.forEach(item => {
                item.classList.remove('checked');
            });

            btnMarkAll.innerText = 'Marcar todos';
        }
    });

    btnCleanUp.addEventListener('click', () => {
        toDoList.innerHTML = '';
    });
})