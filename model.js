; (function () {
    'use strict'
    let items = [
        { id: 1, content: 'Повторить код с урока ToDo', done: false, checked: false },
        { id: 2, content: 'Ознакомиться с уроками из модуля MVC', done: false, checked: false }

    ];
    let idCounter = 3;

    //-ф-ции возможных действий над элементами из массива
    function getItems() {
        const copyItems = [];

        for (const item of items) {
            copyItems.push({
                id: item.id,
                content: item.content,
                done: item.done,
                checked: item.checked
            });
        }

        return copyItems;
    }

    function addItem(content) {
        const item = {
            id: idCounter,
            content: content,
            done: false,
            checked: false
        }
        idCounter++;
        items.push(item);
        model.dispatch(getItems());
    }

    function removeItem(rempvedItem) {
        const newItems = [];
        for (const item of items) {
            if (!item.checked) {
                newItems.push(item);
            }
        }
        items = newItems;
        model.dispatch(getItems());
    }

    function setDoneStatus(itemId, status) {
        for (const item of items) {
            if (item.id === itemId) {
                item.done = status;
                // item.checked = false;
            }
        }
        model.dispatch(getItems());
    }

    function toggleChecked(itemId) {
        for (const item of items) {
            if (item.id === itemId) {
                item.checked = !item.checked;
            }
        }
        model.dispatch(getItems());
    }

    window.model = {
        getItems: getItems,
        addItem: addItem,
        removeItem: removeItem,
        setDoneStatus: setDoneStatus,
        toggleChecked: toggleChecked,
        dispatch: () => { }
    }
})();
