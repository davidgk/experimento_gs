const Expense = require("./Expense");
const {REFERENCIAS_STD_DATA_RANGES, CARGA_DE_GASTOS_TABLE, CARGA_DE_GASTOS, sheets} = require("../commons/coordinate");
const AbstractManager = require("../commons/AbstractManager");
const {OperationResult} = require("../commons/OperationResult");

class ExpensesManager extends AbstractManager{

    constructor(sheetClient) {
        super(sheetClient)
    }

    createEntity() {
        return Expense.createExpenseFromForm(this.sheetClient);
    }

    cleanForm() {
       let result = super.cleanForm()
        this.sheetClient.setValueInCell(CARGA_DE_GASTOS.MONTO, 0);
        this.sheetClient.setValueInCell(CARGA_DE_GASTOS.DESCRIPCION, "N/A");
        this.sheetClient.setValueInCell(CARGA_DE_GASTOS.COMENTARIOS, "N/A");
        this.sheetClient.setValueInCell(CARGA_DE_GASTOS.A_QUIEN, "N/A");
        return result;
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

    configureCleanForm() {
        this.sheetClient.cleanData(CARGA_DE_GASTOS.RANGE_DATA_CLEAN, sheets.CARGA_DE_GASTOS);
    }

    containThingsToClean() {
        const expense = this.createEntity()
        return expense.containsData();
    }
}


module.exports = ExpensesManager;