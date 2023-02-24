const foto = document.querySelector("#foto");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const edad = document.querySelector("#edad");
const nacionalidad = document.querySelector("#nacionalidad");
const provincia = document.querySelector("#provincia");
const direccion = document.querySelector("#direccion");
const numero = document.querySelector("#numero");
const telefono = document.querySelector("#telefono");
const celular = document.querySelector("#celular");
const socialmail = document.querySelector("#socialmedia");
const secundaria = document.querySelector("#secundaria");
const uni = document.querySelector("#uni");

const generarCV = async() => {
    try {
        const url = "https://randomuser.me/api/";
        const respuesta = await fetch(url);
        const {results} = await respuesta.json();
        const datos = results [0];

        foto.src = datos.picture.large;
        nombre.textContent = datos.name.first
        apellido.textContent = datos.name.last
        edad.textContent = datos.dob.age
        nacionalidad.textContent = datos.location.country
        provincia.textContent = datos.location.state
        direccion.textContent = datos.location.street.name
        numero.textContent = datos.location.street.number
        telefono.textContent = datos.phone
        celular.textContent = datos.cell
        mail.textContent = datos.email
        secundaria.textContent = datos.location.city
        uni.textContent = datos.id.name


    } catch (error) {
        console.log(error);
    }
    
}


document.addEventListener("DOMContentLoaded", generarCV)