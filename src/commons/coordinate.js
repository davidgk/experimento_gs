//GENERAL

const sheets = {
    CARGA_DE_GASTOS: "CargaGastos",
    CARGA_DE_GASTOS_TABLE: "CargaGastos_Tabla",
    REFERENCIAS: "Referencia",
}

const CARGA_DE_GASTOS = {
    FECHA: `${sheets.CARGA_DE_GASTOS}!C5`,
    FORMA_DE_PAGO: `${sheets.CARGA_DE_GASTOS}!C6`,
    REALIZADO_POR: `${sheets.CARGA_DE_GASTOS}!C7`,
    DESCRIPCION: `${sheets.CARGA_DE_GASTOS}!C8`,
    A_QUIEN: `${sheets.CARGA_DE_GASTOS}!C9`,
    TIPO_MOV: `${sheets.CARGA_DE_GASTOS}!C10`,
    COMENTARIOS: `${sheets.CARGA_DE_GASTOS}!C11`,
}

const CARGA_DE_GASTOS_TABLE= {
    ID: `${sheets.PRECIOS}!A2`,
    FECHA: `${sheets.CARGA_DE_GASTOS}!C5`,
    DESCRIPCION: `${sheets.CARGA_DE_GASTOS}!C6`,
    FORMA_DE_PAGO: `${sheets.CARGA_DE_GASTOS}!C7`,
    PERSONA: `${sheets.CARGA_DE_GASTOS}!C8`,
    COMENTARIOS: `${sheets.CARGA_DE_GASTOS}!C9`,
}


const REFERENCIAS_STD_DATA_RANGES = {
    FORMA_PAGO_RANGES: `${sheets.REFERENCIAS}!B5:B40`,
    PERSONA_RANGES: `${sheets.REFERENCIAS}!D5:D40`,
    TIPO_RANGES: `${sheets.REFERENCIAS}!F5:F40`,

}
//
// const REFERENCIAS_COORD = {
//     CATEG_BY_PROD: `${sheets.REFERENCIAS}!H6`,
//     MARCA_BY_CATEG_BY_PROD: `${sheets.REFERENCIAS}!I6`,
//     SIZE_BY_MARCA_BY_CATEG_BY_PROD: `${sheets.REFERENCIAS}!J6`,
//     MONTO_POR_OTRAS: `${sheets.REFERENCIAS}!K6`,
// }



module.exports = {
  sheets,
  CARGA_DE_GASTOS,
  CARGA_DE_GASTOS_TABLE,
  REFERENCIAS_STD_DATA_RANGES
};