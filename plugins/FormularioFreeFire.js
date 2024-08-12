const handler = async (m, {conn}) => {
  m.reply(global.Formulario);
};
handler.command = /^(Formulario)$/i;
export default handler;

global.Formulario = ` 
*FAVOR DE LLENAR FICHA*

*NICK FF :*
*NOMBRE REAL :*
*EDAD :*
*DISPONIBILIDAD DE TIEMPO :*
*EXP EN CLK/INF/VV2 :*
*EXP EN MAPA GRANDE :*


*Nota : Recuerda Una Vez Hayas Pasado El Formulario Se Te Hara Pruebas para ver tu jugabilidad Si Mandas Ig O Tus Clips De Ahora Entras Directo*
`;