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
