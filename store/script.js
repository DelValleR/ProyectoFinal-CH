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
const productos = [
  {
    id: 'Camiseta Azul',
    titulo: 'Camiseta Azul',
    imagen: '../images/Camiseta Azul.png',
    precio: 42000,
  },
  {
    id: 'Camiseta Roja',
    titulo: 'Camiseta Roja',
    imagen: '../images/Camiseta Roja.png',
    precio: 40000,
  },
  {
    id: 'Camiseta Amarilla',
    titulo: 'Camiseta Amarilla',
    imagen: '../images/Camiseta Amarilla.png',
    precio: 45000,
  },
  {
    id: 'Camiseta Verde',
    titulo: 'Camiseta Verde',
    imagen: '../images/Camiseta Verde.png',
    precio: 50000,
  },
  {
    id: 'Buzo azul',
    titulo: 'Buzo Azul',
    imagen: '../images/Buzo azul.png',
    precio: 62000,
  },
  {
    id: 'Buzo negro',
    titulo: 'Buzo Negro',
    imagen: '../images/Buzo negro.png',
    precio: 70000,
  },
  {
    id: 'Buzo rojo',
    titulo: 'Buzo Rojo',
    imagen: '../images/Buzo rojo.png',
    precio: 67000,
  },
  {
    id: 'Buzo verde',
    titulo: 'Buzo Verde',
    imagen: '../images/Buzo verde.png',
    precio: 65000,
  },
];

document.getElementById('Usuario').innerHTML = localStorage.usuario;
const contenedorProductos = document.querySelector('#contenedor-productos');
let botonesAgregar = document.querySelectorAll('.producto-agregar');
const numerito = document.querySelector('#numerito');

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = '';

  productosElegidos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('col-md-3', 'col-sm-6');
    div.innerHTML = `
      <div class="card">
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles card-body">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio card-text">$${producto.precio}</p>
            <button class="producto-agregar btn btn-dark" id="${producto.id}">Comprar</button>
        </div>
      </div>
        `;

    contenedorProductos.append(div);
  });

  actualizarBotonesAgregar();
}

cargarProductos(productos);

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll('.producto-agregar');

  botonesAgregar.forEach((boton) => {
    boton.addEventListener('click', agregarAlCarrito);
  });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem('productos-en-carrito');

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );

  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  localStorage.setItem(
    'productos-en-carrito',
    JSON.stringify(productosEnCarrito)
  );
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito;
}
