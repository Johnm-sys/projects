
//Escuchar boton Crear
btnCrear.addEventListener('click',()=>{
    //Captura los datos y crea un objeto con ellos
    let datos = {
        mail: mail.value,
        nombre: nombre.value,
        password: password.value,
    }
    console.log('Los datos de los inputs son: ')
    //imprime los datos en consola
    console.log(datos);
    //ejecutamos una operacion del crud:
    crud.read('parametros a enviar');
})
//Escuchar boton Eliminar
btnEliminar.addEventListener('click',()=>{
    
    console.log('Clic al boton Eliminar')
})
//Escuchar boton Editar
btnEditar.addEventListener('click',()=>{
    console.log('Clic al boton Editar')
})
//Escuchar boton llamar
btnLlamar.addEventListener('click',()=>{
    console.log('Clic al boton Llamar')
})