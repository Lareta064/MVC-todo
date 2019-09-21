; (function () {
    'use strict'
    function start() {
        document.body.append(view.getRoot());

        model.dispatch = view.updateTodo;

        view.updateTodo(model.getItems());

        //ф-ции обработки клика по соответствующим кнопкам
        view.clickHandler = function (elementId, itemId) {
            if (elementId === 'clickByItem') {
                model.toggleChecked(itemId)
            }
            else if (elementId === 'addItem') {
                if (view.getValue() !== '') {
                    model.addItem(view.getValue());
                }
            }
            else if (elementId === 'makeDone') {
                for (const item of model.getItems()) {
                    if (item.checked) {
                        model.setDoneStatus(item.id, true);
                        model.toggleChecked(item.id);
                    }
                }
            }
            else if (elementId === 'makeNotDone') {
                for (const item of model.getItems()) {
                    if (item.checked) {
                        model.setDoneStatus(item.id, false);
                        model.toggleChecked(item.id);
                    }
                }
            }
            else if (elementId === 'remove') {
                model.removeItem();
            }
        }
    }
    //ф-ция запуска всего проекта 
    window.controller = {
        start: start
    }
})();