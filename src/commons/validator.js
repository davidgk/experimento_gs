const {IMP_ID} = require("./referencias");
const {messages} = require("./constants");

const isValidToUse = (sp) => {
    const projectId = ScriptApp.getScriptId();
    const impValue = sp.getRange(IMP_ID).getValue();
    if (impValue !== projectId){
        throw new Error(messages.USER_NOT_VALID)
    }
    return true
}

module.exports = {isValidToUse}