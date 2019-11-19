const path = require('path');//rutas
//modulo nativo de node

//exportar modulo
module.exports = {
    entry: './index.js',//entrada
    mode: 'development',
    output: {       //partir desde ruta actual __dirname
        path: path.resolve(__dirname,'dist'),//en que directorio quiero guardar
        filename: 'bundle.js'//nombre del archivo
    }//salida
}