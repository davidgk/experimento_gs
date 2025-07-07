const {PRICES_COST_RANGES, PRICES_COST_FILTERS, REFERENCIAS_FILTER_POSITION, sheets} = require("./coordinate");
const gSheetClient = require("./gsheetClient");

function createComboForSize(gSheetClient) {
    // =FILTER(Precios!$H$2:$H$1002,Precios!$D$2:$D$1002=VENTA_FORM!$C$8,Precios!$E$2:$E$1002=VENTA_FORM!$C$7,Precios!$F$2:$F$1002=VENTA_FORM!$C$9)
    const filterSize = `=FILTER(${PRICES_COST_RANGES.SIZE}, ${PRICES_COST_FILTERS.MARCA}, ${PRICES_COST_FILTERS.CATEGORIA}, ${PRICES_COST_FILTERS.PRODUCT_NAME} )`
    gSheetClient.setFormula(REFERENCIAS_FILTER_POSITION.FILTER_SIZE_BY_PROD_CATEG_MARCA, filterSize);
}
const IMP_ID =`${sheets.REFERENCIAS}!L5`
const setupReferenceFilters = (gSheetClient) =>{
    //Precios!D$2:$D$1002,Precios!$E$2:$E$1002=VENTA_FORM!$C$7
    const filterCategoria = `=FILTER(${PRICES_COST_RANGES.CATEGORIA}, ${PRICES_COST_FILTERS.PRODUCT_NAME})`
    gSheetClient.setFormula(REFERENCIAS_FILTER_POSITION.FILTER_CATEG_BY_PROD, filterCategoria);

    // Precios!$F$2:$F$1002,Precios!$D$2:$D$1002=VENTA_FORM!$C$8,Precios!$E$2:$E$1002=VENTA_FORM!$C$7)
    const filterMarca = `=FILTER(${PRICES_COST_RANGES.MARCA}, ${PRICES_COST_FILTERS.CATEGORIA}, ${PRICES_COST_FILTERS.PRODUCT_NAME} )`
    gSheetClient.setFormula(REFERENCIAS_FILTER_POSITION.FILTER_MARCA_BY_PROD_CATEG, filterMarca);

    createComboForSize(gSheetClient);

    // =FILTER(Precios!$H$2:$H$1002,Precios!$D$2:$D$1002=VENTA_FORM!$C$8,Precios!$E$2:$E$1002=VENTA_FORM!$C$7,Precios!$F$2:$F$1002=VENTA_FORM!$C$9)
    const filterPrice = `=FILTER(${PRICES_COST_RANGES.PRECIO}, ${PRICES_COST_FILTERS.SIZE}, ${PRICES_COST_FILTERS.MARCA}, ${PRICES_COST_FILTERS.CATEGORIA}, ${PRICES_COST_FILTERS.PRODUCT_NAME} )`
    gSheetClient.setFormula(REFERENCIAS_FILTER_POSITION.FILTER_MONTO_BY_PROD_CATEG_MARCA_SIZE, filterPrice);
}

module.exports = {setupReferenceFilters, IMP_ID}