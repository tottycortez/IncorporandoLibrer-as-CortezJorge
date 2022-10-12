/// TRAIGO LOS VALORES QUE LLEVE AL LOCAL
const traerUsuarioPagina = localStorage.getItem("datos")
//console.log(JSON.parse(traerUsuarioPagina))
/// EL NUEVO ARRAY QUE TRAGIO CON LOS DATOS QUE SE GUARDARON
const usuarioCorrecto = JSON.parse(localStorage.getItem("datos"))
//console.log(usuarioCorrecto)

//DESESTRUCTURACION DEL OBJETO QUE TRAIGO
const {nombre} = usuarioCorrecto

// DOM   ////////////////////////////////////////////////
let btnCerrarSesion = document.querySelector("#cerrarSesion button")

let bienvenidoUsuario = document.createElement("h2")
bienvenidoUsuario.innerHTML = `<h2>Bienvenido/a ${nombre} </h2>`
document.body.appendChild(bienvenidoUsuario)



//EVENTOS  //////////////////////////////////////////////////
btnCerrarSesion.addEventListener("click",()=> {
    



    location.href = "index.html"
})

