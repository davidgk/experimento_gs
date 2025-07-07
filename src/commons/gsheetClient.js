const {sheets} = require("./coordinate");

function getActiveSheet(name, isActive = false){
  let spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName(name), isActive);
  return spreadsheet;
}

class GoogleSheetClient {
  constructor(spreadsheet) {
    this.spreadsheet = spreadsheet
  }
  getValuesFromRange(range) {
    // TODO : remove this duplicated
    return this.spreadsheet.getRange(range).getValues().filter(value => value[0] !== "");
  }

  getValueFromCell(cellCoordinate){
    return this.spreadsheet.getRange(cellCoordinate).getValue();
  }

  setActiveCell(cellCoordinate) {
    this.spreadsheet.getRange(cellCoordinate).activate();
  }

  cleanData(dataRange, page){
    let spreadsheet = getActiveSheet(page);
    spreadsheet.getRange(dataRange).activate();
    spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  }
  createUUID() {
    return Utilities.getUuid();
  }

  pasteValuesToColumn(range, values) {
    this.spreadsheet.getRange(range).setValues(values);
  }

  hideColumn(columnNumber) {
    SpreadsheetApp.getActiveSheet().hideColumn(SpreadsheetApp.getActiveSheet().getRange(1, columnNumber).getColumn());
  }

  showMessage(message){
    SpreadsheetApp.getActiveSpreadsheet().toast(message, 'Aviso', 3);
  }

  insertCleanRow(hoja, position = '2:2'){
    let spreadsheet = getActiveSheet(hoja);
    spreadsheet.getRange(position).activate();
    spreadsheet.getActiveSheet().insertRowsBefore(spreadsheet.getActiveRange().getRow(), 1);
    spreadsheet.getActiveRange().offset(0, 0, 1, spreadsheet.getActiveRange().getNumColumns()).activate();
    return spreadsheet;
  }

  getListDataFromRange( range) {
    return this.getValuesFromRange(range).flat().filter(String);
  }

  saveInCell(cellCoordinate, value){
    this.spreadsheet.getRange(cellCoordinate).setValue(value);
  }

  setFormula(cellCoordinate, formula){
    this.spreadsheet.getRange(cellCoordinate).setFormula(formula);
  }
  createCellCoordinate(page, cellCoordinate){
    return `${page}!${cellCoordinate}`
  }

  refreshCombo(source, desteny) {
    let productsNames = this.spreadsheet.getRange(source).getValues().flat().filter(String);
    const rule = SpreadsheetApp.newDataValidation()
        .requireValueInList(productsNames, true) // true makes it a dropdown, false allows free-form entry
        .setHelpText('Select a product from the list.') // Optional: Add a helpful message
        .build();
    this.spreadsheet.getRange(desteny).setDataValidation(rule);
  }

  saveErrors(message){
    try {
      this.insertCleanRow(sheets.ERRORS)
      this.saveInCell(`${sheets.ERRORS}!${"A1"}`, message)
    } catch (e) {
      // Cannot insert the error
    }
  }

  copyToRowFromArray(rangeDesteny, dataAsList) {
    this.spreadsheet.getRange(rangeDesteny).setValues(dataAsList)
  }
  getDataListFromRange(range) {
    const dataListFromRow = this.getValuesFromRange(range);
    if (dataListFromRow.length === 0) return []
    return dataListFromRow.reduce ((origin, val) =>{
      if (val!== undefined){
        origin.push(val)
      }
      return origin
    },[] )
  }



}

module.exports = {
  GoogleSheetClient, getActiveSheet
}
