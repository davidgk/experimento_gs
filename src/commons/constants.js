
const messages = {
    FAIL_OPERATION: "Operacion fallida :",
    FORM_CLEANED_SUCCEED: "Formulario Limpiado correctamente",
    EXPENSE_LOADED_SUCCESSFULLY: "Movimiento registrado Exitosamente",
    FORM_CLEAN: "Formulario no posee datos",
    FIELD_EMPTY(fieldName) {
        return `El campo ${fieldName} no posee datos`;
    }
}

module.exports = {messages}