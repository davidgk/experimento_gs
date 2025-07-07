
const {expect} = require("chai");
describe("Blanck test", () => {
    let spreadsheet;
    let gSheetClient

    // STUBS
    let stuber
    let executor
    let isValidUserStub

    beforeEach(() => {
        spreadsheet = createSpreadsheetMock()
        gSheetClient = new GoogleSheetClient(spreadsheet)
        stuber = Stuber.createAndConfig(sinon, gSheetClient)
        stuber.createUUIDStub.returns(idMainVenta);
        isValidUserStub = sinon.stub(validator, "isValidToUse")
        // executor = new CarritoSaleExecutor(gSheetClient)
    })
    let createItemSaleStub
    afterEach(() => {
        createItemSaleStub.restore()
    });

    describe('execute', () => {
        // beforeEach(() => {
        //
        // });

        it("t1", () => {
            expect(true).to.be.true
        });
    });
})