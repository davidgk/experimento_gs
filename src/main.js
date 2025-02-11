function Experimento() {
    SpreadsheetApp.getActiveSpreadsheet().getActiveCell().setValue("Exito")
    SpreadsheetApp.getActiveSpreadsheet().toast('Experimento message fixed', 'Aviso', 3);
}


function Experimento2() {
    SpreadsheetApp.getActiveSpreadsheet().toast('Experimento mesage', 'Aviso', 3);
}

globalThis.GlobalFunctions.Experimento = Experimento
globalThis.GlobalFunctions.Experimento2 = Experimento2