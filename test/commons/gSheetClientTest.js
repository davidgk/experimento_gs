const {expect} = require("chai");
const {createSpreadsheetMock} = require("../testHelper");
const {GoogleSheetClient} = require("../../src/commons/gsheetClient");
const sinon = require("sinon");
describe("gSheetClient", () => {
    let gSheetClient
    describe('getDataListFromRange', () => {
        let getValuesFromRangeStub;
        beforeEach(() => {
            gSheetClient = new GoogleSheetClient(createSpreadsheetMock());
            getValuesFromRangeStub = sinon.stub(gSheetClient, "getValuesFromRange")
            getValuesFromRangeStub.returns([[0,1,2,3], [0,1,2,3], [0,1,2,3], undefined, undefined])
        });
        afterEach(() => {
            getValuesFromRangeStub.restore()
        })
        it("t1", () => {
            expect(gSheetClient.getDataListFromRange("SomeRange")).to.eqls([[0,1,2,3], [0,1,2,3], [0,1,2,3]]);
        });
    });
})