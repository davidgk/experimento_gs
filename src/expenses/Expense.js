const {getDataListFromColumn, getValueOrNotApplied} = require("../commons/commons");
const {CARGA_DE_GASTOS, sheets, CARGA_DE_GASTOS_TABLE} = require("../commons/coordinate");
const {messages} = require("../commons/constants");

class Expense {
    constructor(gSheetClient) {
        this.gSheetClient = gSheetClient;
    }

    static createExpenseFromForm(gSheetClient) {
        const expense = new Expense(gSheetClient)
        expense.dataAsList = getDataListFromColumn(gSheetClient, CARGA_DE_GASTOS.RANGE_DATA)
        if (expense.dataAsList.length === 0) throw new Error(messages.FORM_CLEAN)
        if (!expense.dataAsList[0]) throw new Error(messages.FIELD_EMPTY("Fecha"));
        let position = 0
        expense.fecha = expense.dataAsList[position];
        this.loadField(expense, "monto", ++position);
        this.loadField(expense, "formaDePago", ++position);
        this.loadField(expense, "realizadoPor", ++position);
        this.loadField(expense, "descripcion", ++position);
        expense.comentarios = getValueOrNotApplied(++position, expense.dataAsList)
        this.loadField(expense, "tipo", ++position);
        expense.aQuien = getValueOrNotApplied(++position, expense.dataAsList)
        expense.dataAsList = [gSheetClient.createUUID(), ...expense.dataAsList];
        return expense;
    }

    static loadField(expense, fieldName, position) {
        if (!expense.dataAsList[position]) throw new Error(messages.FIELD_EMPTY(fieldName));
        expense[fieldName] = getValueOrNotApplied(position, expense.dataAsList)
    }

    saveValues() {
        this.gSheetClient.insertCleanRow(sheets.CARGA_DE_GASTOS_TABLE)
        this.gSheetClient.copyToRowFromArray(CARGA_DE_GASTOS_TABLE.RANGE_TO_PASTE, [this.dataAsList]);
    }

    containsData() {
        return Boolean(this.monto
            || this.formaDePago
            || this.realizadoPor
            || this.descripcion
            || this.comentarios
            || this.tipo
            || this.aQuien
        ).valueOf();
    }
}

module.exports = Expense;