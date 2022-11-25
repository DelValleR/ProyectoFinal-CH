// let resumenCompra = [];

// function cuenta(resumenCompra) {
//   let precioAcumulado = 0;
//   let resumenStr = '';
//   for (let i = 0; i < resumenCompra.length; i++) {
//     precioAcumulado +=
//       resumenCompra[i].cantidad * resumenCompra[i].camiseta.precio;
//     resumenStr +=
//       resumenCompra[i].cantidad +
//       ' camisetas color ' +
//       resumenCompra[i].camiseta.color +
//       '\n';
//   }
//   alert(
//     'Escogiste estas camisetas: \n' +
//       resumenStr +
//       'Con un precio total de: $' +
//       precioAcumulado
//   );
// }

// class Camisetas {
//   constructor(id, color, precio) {
//     this.id = id;
//     this.color = color;
//     this.precio = precio;
//   }
// }

// const camisas = {
//   1: new Camisetas(001, 'Rojo', 40000),
//   2: new Camisetas(002, 'Azul', 42000),
//   3: new Camisetas(003, 'Verde', 50000),
//   4: new Camisetas(004, 'Amarillo', 45000),
// };

// const Prendas = Object.entries(camisas);

// const objeto = Prendas.map((object) => object[1]);

// const Colores = objeto.map((el) => el.color);

// while (true) {
//   let shirts = prompt(
//     'Elija un color de camiseta, estos son los disponibles: ' +
//       '\n1. ' +
//       Colores[0] +
//       '\n2. ' +
//       Colores[1] +
//       '\n3. ' +
//       Colores[2] +
//       '\n4. ' +
//       Colores[3] +
//       '\n' +
//       'Cuando haya escogido las camisetas que desee escriba OK'
//   );

//   if (shirts.toLowerCase() == 'ok') {
//     cuenta(resumenCompra);
//     break;
//   }
//   if (shirts > Object.keys(camisas).length) {
//     alert('Ese color no esta disponible, seleccione otro');
//     continue;
//   } else {
//     prendaComprada = camisas[shirts];
//     alert(
//       `Escogiste la camiseta de color ${prendaComprada.color} que tiene un precio de $ ${prendaComprada.precio}`
//     );
//   }

//   let cantidad = Number(prompt('¿Cuantas camisetas desea comprar?'));

//   resumenCompra.push({
//     cantidad: cantidad,
//     camiseta: prendaComprada,
//   });
// }

document.getElementById('Usuario').innerHTML = localStorage.usuario;
