const {GoogleSheetClient} = require("../src/commons/gsheetClient");

class Stuber {
    static FAKE_UUID = "499344eb-bb96-4377-bdaa-179b77ea36a5";
    constructor(sinon,gSheetClient) {
        this.sinon = sinon;
        this.gSheetClient = gSheetClient;
    }
    createStubForGSheet() {
        this.saveInCellStub = this.sinon.stub(this.gSheetClient, "saveInCell")
        this.setFormulaStub = this.sinon.stub(this.gSheetClient, "setFormula")
        this.pasteValuesToColumnStub = this.sinon.stub(this.gSheetClient, "pasteValuesToColumn")

        this.getValueFromCellStub = this.sinon.stub(this.gSheetClient, "getValueFromCell")
        this.getListDataFromRangeStub = this.sinon.stub(this.gSheetClient, "getListDataFromRange")
        this.getDataListFromRangeStub = this.sinon.stub(this.gSheetClient, "getDataListFromRange")

        this.createUUIDStub = this.sinon.stub(this.gSheetClient, "createUUID")
        this.insertCleanRowStub = this.sinon.stub(this.gSheetClient, "insertCleanRow")
        this.copyToRowFromArrayStub = this.sinon.stub(this.gSheetClient, "copyToRowFromArray")
        this.refreshComboStub = this.sinon.stub(this.gSheetClient, "refreshCombo")
        this.setActiveCellStub = this.sinon.stub(this.gSheetClient, "setActiveCell")
        this.cleanDataStub = this.sinon.stub(this.gSheetClient, "cleanData")
        this.getValuesFromRangeStub = this.sinon.stub(this.gSheetClient, "getValuesFromRange")
    }

    restoreStubGSheets() {
        //get info
        this.getValueFromCellStub.restore()
        this.getListDataFromRangeStub.restore()
        this.getDataListFromRangeStub.restore()
        this.getValuesFromRangeStub.restore()

        //set info
        this.saveInCellStub.restore()
        this.setFormulaStub.restore()
        this.pasteValuesToColumnStub.restore()

        //others
        this.createUUIDStub.restore()
        this.insertCleanRowStub.restore()
        this.copyToRowFromArrayStub.restore()
        this.refreshComboStub.restore()

        this.setActiveCellStub.restore()
        this.cleanDataStub.restore()
        this.getValuesFromRangeStub.restore()
    }

    static createAndConfig(sinon, gSheetClient ) {
        const stubber = new Stuber(sinon, gSheetClient)
        stubber.createStubForGSheet()
        stubber.setupCommons()
        return stubber;
    }

    setupCommons() {
        this.saveInCellStub.callsFake((v2, v3) => this.gSheetClient.spreadsheet[v2] = v3)
        this.getValueFromCellStub.callsFake((coord) =>  this.gSheetClient.spreadsheet[coord])
        this.insertCleanRowStub.returns(true)
    }
}

module.exports = {Stuber}