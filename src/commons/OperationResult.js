const {messages} = require("./constants");

const FAIL_LOAD_ITEM = "Falla en carga de Item: "
const FAIL_SEARCH_ITEM = "Falla en busqueda de Producto: "

class OperationResult {


    constructor(status , message) {
        this.status = status
        this.message = message
    }



    static createSuccessCleanForm() {
        return new OperationResult(200, messages.FORM_CLEANED_SUCCEED);
    }

    static createSuccessExpenseLoaded() {
        return new OperationResult(200, messages.EXPENSE_LOADED_SUCCESSFULLY);
    }
}

module.exports = {OperationResult, FAIL_LOAD_ITEM}