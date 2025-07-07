const {getActiveSheet, GoogleSheetClient}= require("./commons/gsheetClient");
const {sheets} = require("./commons/coordinate");
const {messages} = require("./commons/constants");
const Expense = require("./expenses/Expense");



globalThis.GlobalFunctions = globalThis.GlobalFunctions || {};

const actionExecutor =(action)=>{
    let spreadsheet = getActiveSheet(sheets.CARGA_DE_GASTOS)
    const gSheetClient = new GoogleSheetClient(spreadsheet)
    try {
        action(gSheetClient);
    } catch (e) {
        gSheetClient.saveErrors(e.message);
        gSheetClient.showMessage(messages.FAIL_OPERATION + e.message);
    }
}


const ExpenseLoading = () => {
    const action = (gSheetClient) => {
        let expense = new Expense(gSheetClient);
        let result =  expense.saveExpense()
        gSheetClient.showMessage(result.message);
    }
    actionExecutor(action);
}


const CleanExpenseLoading = () => {
    const action = (gSheetClient) => {
        const expense = new Expense(gSheetClient);
        let result = expense.cleanForm()
        gSheetClient.showMessage(result.message);
    }
    actionExecutor(action);
}



globalThis.GlobalFunctions.ExpenseLoading = ExpenseLoading
globalThis.GlobalFunctions.CleanExpenseLoading = CleanExpenseLoading
