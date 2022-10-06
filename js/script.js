// CLASES ////////////////////////
class Usuario {
    constructor(nombre,pass) {
        this.nombre = nombre
        this.pass = pass
        this.saldo = 0;
    }
}

// VARIABLES GBLOBALES /////////////////////////
const usuarios = []

// DOM .//////////////////////////////
let btnCrearUsuario = document.querySelector("#logueo button")
let btnAcceso = document.querySelector("#acceso button")

let inputsLogueo = document.querySelectorAll("#logueo input")
let inputsAcceso = document.querySelectorAll("#acceso input")
let alerta = document.querySelectorAll("p")

// EVENTOS .//////////////////////////////
//evento para crear usuario
btnCrearUsuario.addEventListener("click",()=> {
    //variables donde se guardan los valores que se toman de los imputs
    let nombre = inputsLogueo[0].value
    let pass = inputsLogueo[1].value

    // filtro o un find que vea si existe el usuario
    // Si existe no lo dejo loguear

    if (nombre == "" || pass == "") {
        alertaP(0)
        return
    }
    const nuevoUsuario = new Usuario (nombre, pass)
    usuarios.push(nuevoUsuario)
    console.log(usuarios)


    /// TRANSFORMO LOS VALORES DEL ARRAY EN JSON
    const usuariosStr = JSON.stringify(usuarios)
    /// LO SETEO EN EL LOCAL STORAGE
    localStorage.setItem("usuarios", usuariosStr)

    
    
})


    /// TRAIGO LOS VALORES QUE LLEVE AL LOCAL
    const traerUsuarios = localStorage.getItem("usuarios")
    // console.log(JSON.parse(traerUsuarios))
    /// EL NUEVO ARRAY QUE TRAGIO CON LOS DATOS QUE SE GUARDARON
    const usuariosArrays = JSON.parse(localStorage.getItem("usuarios"))
    //console.log(traerUsuarios)

//evento para ingresar usuario
btnAcceso.addEventListener("click",()=> {
    //variables donde se guardan los valores que se toman de los imputs
    let nombre = inputsAcceso[0].value
    let pass = inputsAcceso[1].value

    let usuario = usuariosArrays.find((elem) => {
        return elem.nombre === nombre}
    )
    //DESESTRUCTURACION DEL OBJETO QUE TRAIGO
    const {pass:passUsuario} = usuario
    
    // verifico que los datos sean correctos
    if (usuario == undefined || pass != passUsuario) {
        alertaP(1)
        return
    }


    // ANTES DE REDIRIGIR CON LOCATION
    // Tengo que guardar en storage para pasarle info al otro html
    const usuarioPagina = JSON.stringify(usuario)
    localStorage.setItem("datos", usuarioPagina)


    location.href = "usuario.html"
    console.log("Ingreso correcto");
})

function alertaP(num) {
    alerta[num].classList.add("show")

    setTimeout(()=> {
        alerta[num].classList.remove("show")
    },2000)
}