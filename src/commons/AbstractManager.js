const {messages} = require("./constants");
const {OperationResult} = require("./OperationResult");

class AbstractManager {
    constructor(sheetClient) {
        this.sheetClient = sheetClient;
    }

    saveExpense() {
        const entity = this.createEntity()
        entity.saveValues();
        this.refreshCombo()
        this.checkShouldClean()
        return OperationResult.createSuccessExpenseLoaded();
    }

    createEntity() {
        throw new Error(messages.IMPLEMENT_IN_CHILD_CLASS)
    }

    cleanForm() {
        if (this.containThingsToClean()) {
            this.configureCleanForm();
        }
        this.refreshCombo()
        return OperationResult.createSuccessCleanForm();
    }

    refreshCombo() {
        throw new Error(messages.IMPLEMENT_IN_CHILD_CLASS)
    }

    checkShouldClean() {
        throw new Error(messages.IMPLEMENT_IN_CHILD_CLASS)
    }

    containThingsToClean() {
        throw new Error(messages.IMPLEMENT_IN_CHILD_CLASS)
    }

    configureCleanForm() {
        throw new Error(messages.IMPLEMENT_IN_CHILD_CLASS)
    }

}

module.exports = AbstractManager