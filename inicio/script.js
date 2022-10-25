alert(
  'Recuerda que tu usuario debe tener entre 2 y 9 caracteres y tu contraseña debe ser un numero del 1 al 100'
);
let user = prompt('Ingrese su usuario: ');
while (user.length < 2 || user.length > 10) {
  alert('Usuario no válido');
  user = prompt('Ingrese su usuario correctamente');
}
alert('Usuario valido');

let password = prompt('Ingrese su contraseña: ');
let incorrecto = true;

while (incorrecto) {
  if (password > 100) {
    incorrecto = true;
    alert('Ingresa un numero entre 1 y 100');
    password = prompt('Ingrese una contraseña valida');
  } else if (isNaN(password)) {
    incorrecto = true;
    alert('La contraseña debe ser un numero');
    password = prompt('Ingrese una contraseña valida');
  } else {
    incorrecto = false;
    alert('Ingresaste correctamente la contraseña');
  }
}
