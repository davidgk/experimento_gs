const {expect} = require("chai");
const {createSpreadsheetMock} = require("../testHelper");
const {GoogleSheetClient} = require("../../src/commons/gsheetClient");
const {Stuber} = require("../Stuber");
const sinon = require("sinon");
const {getDataListFromColumn} = require("../../src/commons/commons");


describe('getDataListFromColumn', () => {
    let spreadsheet;
    let gSheetClient

    // STUBS
    let stuber
    beforeEach(() => {
        spreadsheet = createSpreadsheetMock()
        gSheetClient = new GoogleSheetClient(spreadsheet)
        stuber = Stuber.createAndConfig(sinon, gSheetClient)

    });

    it('should sunny ', () => {
        stuber.getDataListFromRangeStub.returns([["a"], ["b"], ["c"]])
        const result = getDataListFromColumn(gSheetClient, "Something");
        expect(result).to.be.eqls(["a", "b", "c"])
    });

    it('should sunny with undefined', () => {
        stuber.getDataListFromRangeStub.returns([["a"], ["b"], undefined, undefined])
        const result = getDataListFromColumn(gSheetClient, "Something");
        expect(result).to.be.eqls(["a", "b"])
    });

    afterEach(() => {
        stuber.restoreStubGSheets()
    });

});