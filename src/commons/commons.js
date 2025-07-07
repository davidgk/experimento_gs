

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

const getValueOrNotApplied = (position, dataAsList) => {
    if (dataAsList[position]===undefined ||dataAsList[position] === "") {
        dataAsList[position] = "N/C"
        return "N/C"
    }
    return dataAsList[position];

}
module.exports = {getDataListFromColumn, getValueOrNotApplied}