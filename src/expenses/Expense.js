const {OperationResult} = require("../commons/OperationResult");

class Expense {

    constructor(sheetClient) {
        this.sheetClient = sheetClient;
    }

    saveExpense() {
        return OperationResult.createSuccessExpenseLoaded();
    }

    cleanForm() {
        return OperationResult.createSuccessCleanForm();
    }
}


module.exports = Expense;