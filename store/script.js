document.getElementById('Usuario').innerHTML = localStorage.usuario;
const contenedorProductos = document.querySelector('#contenedor-productos');
let botonesAgregar = document.querySelectorAll('.producto-agregar');
const numerito = document.querySelector('#numerito');
const busqueda = document.getElementById('busqueda');
const filtro = document.getElementById('filtro');

let productos = [];

fetch('../productos.json')
  .then((response) => response.json())
  .then((data) => {
    productos = [...data];
    cargarProductos(productos);
  });

const filtrar = () => {
  const text = busqueda.value.toLowerCase();
  const productosBusqueda = [];
  for (let producto of productos) {
    let id = producto.id.toLowerCase();
    if (id.indexOf(text) !== -1) {
      contenedorProductos.innerHTML = '';
      productosBusqueda.push(producto);
    }
  }
  cargarProductos(productosBusqueda);
};

filtro.addEventListener('click', filtrar);

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = '';

  productosElegidos.forEach((data) => {
    const div = document.createElement('div');
    div.classList.add('col-md-3', 'col-sm-6');
    div.innerHTML = `
      <div class="card">
        <img class="producto-imagen" src="${data.imagen}" alt="${data.titulo}">
        <div class="producto-detalles card-body">
            <h3 class="producto-titulo">${data.titulo}</h3>
            <p class="producto-precio card-text">$${data.precio}</p>
            <button class="producto-agregar btn btn-dark" id="${data.id}">Comprar</button>
        </div>
      </div>
        `;

    contenedorProductos.append(div);
  });

  actualizarBotonesAgregar();
}

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
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-start',
    showConfirmButton: false,
    timer: 3000,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: 'success',
    title: '¡Agregado al carrito!',
  });
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito;
}
