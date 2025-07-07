const {OperationResult} = require("../commons/OperationResult");
const Expense = require("./Expense");
const {REFERENCIAS_STD_DATA_RANGES, CARGA_DE_GASTOS_TABLE, CARGA_DE_GASTOS, sheets} = require("../commons/coordinate");

class ExpensesManager {

    constructor(sheetClient) {
        this.sheetClient = sheetClient;
    }

    saveExpense() {
        const expense = Expense.createExpenseFromForm(this.sheetClient)
        expense.saveValues();
        this.refreshCombo()
        this.checkShouldClean()
        return OperationResult.createSuccessExpenseLoaded();
    }

    cleanForm() {
        if (this.containThingsToClean()) {
            this.configureCleanForm();
        }
        this.refreshCombo()
        return OperationResult.createSuccessCleanForm();
    }

    refreshCombo() {
        this.sheetClient.refreshCombo(REFERENCIAS_STD_DATA_RANGES.FORMA_PAGO_RANGES, CARGA_DE_GASTOS_TABLE.FORMA_DE_PAGO);
        this.sheetClient.refreshCombo(REFERENCIAS_STD_DATA_RANGES.PERSONA_RANGES, CARGA_DE_GASTOS_TABLE.PERSONA);
        this.sheetClient.refreshCombo(REFERENCIAS_STD_DATA_RANGES.TIPO_RANGES, CARGA_DE_GASTOS_TABLE.TIPO_MOV);
        this.sheetClient.refreshCombo(REFERENCIAS_STD_DATA_RANGES.PERSONA_RANGES, CARGA_DE_GASTOS_TABLE.A_QUIEN);
    }

    checkShouldClean() {
        if(this.sheetClient.getValueFromCell(CARGA_DE_GASTOS.CLEAN_AFTER_SAVE)){
            this.cleanForm()
        }
    }

    containThingsToClean() {
        const expense = Expense.createExpenseFromForm(this.sheetClient)
        return expense.containsData();
    }

    configureCleanForm() {
        this.sheetClient.cleanData(CARGA_DE_GASTOS.RANGE_DATA_CLEAN, sheets.CARGA_DE_GASTOS);
    }
}


module.exports = ExpensesManager;