const animes = [

{
nombre:"Demon Slayer",
imagen:"img/anime1.jpg",
descripcion:"Tanjiro busca curar a su hermana."
},

{
nombre:"Jujutsu Kaisen",
imagen:"img/anime2.jpg",
descripcion:"Maldiciones y hechiceros."
},

{
nombre:"Solo Leveling",
imagen:"img/anime3.jpg",
descripcion:"El cazador más débil evoluciona."
},

{
nombre:"Attack On Titan",
imagen:"img/anime4.jpg",
descripcion:"La lucha contra los titanes."
},

{
nombre:"One Piece",
imagen:"img/anime5.jpg",
descripcion:"Piratas y aventuras."
},

{
nombre:"Naruto",
imagen:"img/anime6.jpg",
descripcion:"El ninja de Konoha."
},

{
nombre:"Bleach",
imagen:"img/anime7.jpg",
descripcion:"Shinigamis y hollows."
},

{
nombre:"Death Note",
imagen:"img/anime8.jpg",
descripcion:"La libreta mortal."
},

{
nombre:"Chainsaw Man",
imagen:"img/anime9.jpg",
descripcion:"Demonios y sangre."
},

{
nombre:"Blue Lock",
imagen:"img/anime10.jpg",
descripcion:"El mejor delantero."
}

];

const doramas=[

{
nombre:"Lovely Runner",
imagen:"img/dorama1.jpg",
descripcion:"Romance y viajes en el tiempo."
},

{
nombre:"True Beauty",
imagen:"img/dorama2.jpg",
descripcion:"Comedia romántica."
},

{
nombre:"Business Proposal",
imagen:"img/dorama3.jpg",
descripcion:"Romance empresarial."
},

{
nombre:"Goblin",
imagen:"img/dorama4.jpg",
descripcion:"Fantasía romántica."
},

{
nombre:"King The Land",
imagen:"img/dorama5.jpg",
descripcion:"Comedia romántica."
},

{
nombre:"The Glory",
imagen:"img/dorama6.jpg",
descripcion:"Drama y venganza."
},

{
nombre:"All Of Us Are Dead",
imagen:"img/dorama7.jpg",
descripcion:"Zombies."
},

{
nombre:"Vincenzo",
imagen:"img/dorama8.jpg",
descripcion:"Mafia y justicia."
},

{
nombre:"Weak Hero",
imagen:"img/dorama9.jpg",
descripcion:"Acción escolar."
},

{
nombre:"Extraordinary You",
imagen:"img/dorama10.jpg",
descripcion:"Romance juvenil."
}

];

const animeCards =
document.getElementById("animeCards");

if(animeCards){

animes.forEach((anime,index)=>{

animeCards.innerHTML += `

<div class="col-lg-4 col-md-6 mb-4">

<div class="card card-anime text-white">

<img src="${anime.imagen}">

<div class="card-body">

<h5>
#${index+1}
${anime.nombre}
</h5>

<p>

${anime.descripcion}

</p>

<button
class="btn btn-custom"
data-bs-toggle="modal"
data-bs-target="#noticiaModal">

Leer Más

</button>

</div>

</div>

</div>

`;

});

}

const doramaCards =
document.getElementById("doramaCards");

if(doramaCards){

doramas.forEach((dorama,index)=>{

doramaCards.innerHTML += `

<div class="col-lg-4 col-md-6 mb-4">

<div class="card card-anime text-white">

<img src="${dorama.imagen}">

<div class="card-body">

<h5>

#${index+1}
${dorama.nombre}

</h5>

<p>

${dorama.descripcion}

</p>

<button
class="btn btn-custom">

Leer Más

</button>

</div>

</div>

</div>

`;

});

}

window.onload=()=>{

setTimeout(()=>{

const modal=
new bootstrap.Modal(
document.getElementById(
'noticiaModal'
)
);

modal.show();

},2000);

}
const formulario =
document.getElementById("registroForm");

if(formulario){

formulario.addEventListener(
"submit",

function(e){

e.preventDefault();

let valido = true;

const usuario =
document.getElementById("usuario").value.trim();

const correo =
document.getElementById("correo").value.trim();

const password =
document.getElementById("password").value.trim();

const confirmar =
document.getElementById("confirmarPassword").value.trim();

document.getElementById("errorUsuario").innerHTML="";
document.getElementById("errorCorreo").innerHTML="";
document.getElementById("errorPassword").innerHTML="";
document.getElementById("errorConfirmar").innerHTML="";

if(usuario===""){

document.getElementById("errorUsuario").innerHTML=
"Debe ingresar un usuario";

valido=false;

}

const correoValido =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!correoValido.test(correo)){

document.getElementById("errorCorreo").innerHTML=
"Correo electrónico inválido";

valido=false;

}

if(password.length < 8){

document.getElementById("errorPassword").innerHTML=
"La contraseña debe tener mínimo 8 caracteres";

valido=false;

}

if(password !== confirmar){

document.getElementById("errorConfirmar").innerHTML=
"Las contraseñas no coinciden";

valido=false;

}

if(valido){

document
.getElementById("mensajeExito")
.classList.remove("d-none");

formulario.reset();

}

});

}

const productos = [

{
nombre:"Figura Demon Slayer",
precio:"35$",
stock:10,
imagen:"../IMG/TIENDA/1.jpg"
},

{
nombre:"Figura Gojo",
precio:"40$",
stock:12,
imagen:"../IMG/TIENDA/2.jpg"
},

{
nombre:"Poster Solo Leveling",
precio:"15$",
stock:20,
imagen:"../IMG/TIENDA/3.jpg"
},

{
nombre:"Llavero Blue Lock",
precio:"8$",
stock:50,
imagen:"../IMG/TIENDA/4.jpg"
}

];

const tabla =
document.getElementById("tablaProductos");

const cards =
document.getElementById("productosCards");

if(tabla){

productos.forEach(producto=>{

tabla.innerHTML += `

<tr>

<td>${producto.nombre}</td>
<td>${producto.precio}</td>
<td>${producto.stock}</td>

</tr>

`;

});

}

if(cards){

productos.forEach(producto=>{

cards.innerHTML += `

<div class="col-lg-3 col-md-6 mb-4">

<div class="card card-anime">

<img src="${producto.imagen}"
class="card-img-top">

<div class="card-body">

<h5>

${producto.nombre}

</h5>

<p>

Precio: ${producto.precio}

</p>

<button class="btn btn-custom">

Comprar

</button>

</div>

</div>

</div>

`;

});

}
// BUSCADOR ANIME

const buscarAnime =
document.getElementById("buscarAnime");

if(buscarAnime){

buscarAnime.addEventListener("keyup",()=>{

let filtro =
buscarAnime.value.toLowerCase();

let tarjetas =
document.querySelectorAll(".anime-card");

tarjetas.forEach(card=>{

let texto =
card.innerText.toLowerCase();

card.style.display =
texto.includes(filtro)
? "block"
: "none";

});

});

}

// BUSCADOR DORAMAS

const buscarDorama =
document.getElementById("buscarDorama");

if(buscarDorama){

buscarDorama.addEventListener("keyup",()=>{

let filtro =
buscarDorama.value.toLowerCase();

let tarjetas =
document.querySelectorAll(".dorama-card");

tarjetas.forEach(card=>{

let texto =
card.innerText.toLowerCase();

card.style.display =
texto.includes(filtro)
? "block"
: "none";

});

});

}

window.addEventListener("load",()=>{

const modalNoticias =
document.getElementById("modalNoticias");

if(modalNoticias){

const noticiaNueva =
new bootstrap.Modal(modalNoticias);

noticiaNueva.show();

}

});

