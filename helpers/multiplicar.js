const fs = require('fs');
const colors = require('colors'); 

const crearArchivo = async( base = 5, listar =  false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';
        
        for (let i = 1; i <= hasta; i++ ) {
            
            salida += (`${ base } ${ ' x ' } ${ i } ${' = '} ${ i*base } \n` );
            consola += (`${ colors.yellow(base) } ${ ' x '.green } ${ colors.yellow(i) } ${' = '.green} ${ colors.yellow(i*base) } \n` );
        }
        
        if (listar){
            console.log('======================='.green);
            console.log('     Tabla del:'.yellow, colors.blue(base));
            console.log('======================= \n'.green);
            console.log(consola);
            console.log('======================= \n'.green);
        }
        
        
        fs.writeFileSync(`./salida/tabla-${ base}.txt`, salida)
            
        return `tabla-${ base}.txt`;
        
    } catch (error) {
        throw error;
    }
    

}

module.exports = {

    crearArchivo
} 