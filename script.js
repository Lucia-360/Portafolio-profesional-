
const f=document.getElementById('registroForm');
const m=document.getElementById('mensaje');
function cargar(){
 const u=JSON.parse(localStorage.getItem('usuario'));
 if(u){m.textContent=`Hola ${u.nombre}. Profesión: ${u.profesion}.`;}}
cargar();
f?.addEventListener('submit',e=>{
 e.preventDefault();
 const u={
 nombre:nombre.value,
 correo:correo.value,
 telefono:telefono.value,
 profesion:profesion.value
 };
 localStorage.setItem('usuario',JSON.stringify(u));
 cargar();
 alert('Información guardada.');
});
