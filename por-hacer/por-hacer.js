
const fs = require('fs');

let listadoPorHacer = [];

let guardarDB = () =>{

	let data = JSON.stringify(listadoPorHacer);
	fs.writeFile('db/data.json', data, (err) => {

		if(err) throw new Error("No se pudo guardar");
		
	});
}

const cargarDB = () =>  {

	try {
		listadoPorHacer = require('../db/data.json')
	} catch(e) {
		// statements
		listadoPorHacer = [];
	}
	
}

const getListado = () =>{
	cargarDB();
	return listadoPorHacer
}

const actualizar = (descripcion,completado=true) =>{

	cargarDB()
	let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);/*devuelve la posicion del arreglo que coincida con la condición*/

	if(index >= 0){
		listadoPorHacer[index].completado = completado;	
		guardarDB()
		return true
	}

	return false

}

const borrar = (descripcion) =>{
	cargarDB();

	let listadoFiltrado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);//crea un nuevo arreglo con los elementos que sean diferentes */

	if(listadoFiltrado.length != listadoPorHacer.length){
		listadoPorHacer = listadoFiltrado;
		guardarDB();
		return true
	}

	return false

}

const crear = descripcion =>{

	cargarDB();

	let porHacer = {
		descripcion,
		completado : false
	};

	listadoPorHacer.push(porHacer);

	guardarDB()

	return porHacer;
}

module.exports = {
	crear,
	getListado,
	actualizar,
	borrar
}