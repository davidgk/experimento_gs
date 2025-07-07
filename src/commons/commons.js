

function getDataListFromColumn(gSheetClient, rangeData, columnNumber=0) {
    const dataListFromRow = gSheetClient.getDataListFromRange(rangeData);
    if (dataListFromRow.length === 0) return []
    return dataListFromRow.reduce ((origin, val) =>{
        if (val!== undefined){
            origin.push(val[columnNumber])
        }
        return origin
    },[] )
}

module.exports = {getDataListFromColumn}