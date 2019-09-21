; (function () {
    'use strict'
    const template = `
    <div id="app">
        <input type="text" id="enter">
        <button id="addItem">Добавить</button>
        <div id="todoList"></div>
        <button id="makeDone">Выполнить</button>
        <button id="makeNotDone">Восстановить</button>
        <button id="remove">Удалить</button>
    </div>`

    // ф-ция, которая выводит на экран дом-элемент template
    let rootElement = null;
    function getRoot() {
        const divElement = document.createElement('div');

        divElement.innerHTML = template;
        rootElement = divElement.firstElementChild;

        const buttonElements = rootElement.querySelectorAll('button');

        for (let i = 0; i < buttonElements.length; i++) {
            const buttonElement = buttonElements[i];
            buttonElements[i].addEventListener('click', function (event) {
                view.clickHandler(buttonElement.getAttribute('id'))
            });
        }

        return rootElement;
    }
    // ф-ция получения значения инпута #enter
    function getValue() {
        return rootElement.querySelector('#enter').value;
    }
    // ф-ция установления значения инпута #enter
    function setValue(value) {
        rootElement.querySelector('#enter').value = value;
    }
    //ф-ция, перезаписывающая todo лист, после каждого изменения
    function updateTodo() {
        const todoListElement = document.querySelector('#todoList');
        const ulElement = createTodoList(model.getItems());
        const inputElement = document.querySelector('#enter');

        todoListElement.textContent = '';
        todoListElement.append(ulElement);
        inputElement.value = '';

    }

    //ф-ция, создающая список дел
    function createTodoList(items) {
        const ulElement = document.createElement('ol');

        for (const item of model.getItems()) {
            const liElement = document.createElement('li');
            const inputElement = document.createElement('input');
            inputElement.setAttribute('type', 'checkbox');

            if (item.done) {
                liElement.classList.add('done');
            }
            if (item.checked) {
                inputElement.setAttribute('checked', '');
            }

            liElement.append(inputElement);
            liElement.append(' ' + item.content);

            ulElement.append(liElement);

            inputElement.addEventListener('click', function (event) {
                event.preventDefault();
                view.clickHandler('clickByItem', item.id)

            });
        }

        return ulElement;
    }

    window.view = {
        getRoot: getRoot,
        updateTodo: updateTodo,
        getValue: getValue,
        setValue: setValue,
        clickHandler: () => { }
    }

})();