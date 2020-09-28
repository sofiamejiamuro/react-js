const activo =  true;

/*let mensaje = '';

if (activo) {
  mensaje = 'Activo';
} else {
  mensaje = 'Inactivo';
} */

//const mensaje = ( activo ) ?'Activo' : 'Inactivo';

const mensaje =  activo && 'Activo'; // 'Activo'
//const mensaje =  !activo && 'Activo'; // false

console.log(mensaje);