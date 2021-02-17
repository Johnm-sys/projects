// Variables de los inputs 
const nombre = document.getElementById('nombre')
const mail = document.getElementById('mail')
const password = document.getElementById('password')

// Variables de los botones
const btnCrear= document.getElementById('crear')
const btnEditar= document.getElementById('editar')
const btnEliminar= document.getElementById('eliminar')
const btnLlamar= document.getElementById('llamar')

//muestra los valores del input mail (ejemplo)
//Evento de tipo 'input', detecta cualquier movimiento y lo ejecuta
mail.addEventListener('input',()=>{
    //imprime valores de 'mail', cada vez que ocurre un cambio
    console.log(mail.value)
})


