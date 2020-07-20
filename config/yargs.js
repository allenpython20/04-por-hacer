

const argv = require('yargs')
					.command('crear',"Crear tarea en consola",{
						descripcion : {
							demand : true,
							alias : 'd',
							description : "Crea tarea"
						}
					})
					.command('actualizar',"Genera tabla en consola",{
						descripcion : {
							demand : true,
							alias : 'd'
						},
						completado : {
							default : true,
							alias : 'c'
						}
					})
					.command('borrar',"Genera tabla en consola",{
						descripcion : {
							demand : true,
							alias : 'd'
						},				
					})					
					.help()
					.argv;


module.exports = {
	argv
}

