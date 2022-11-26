let productosEnCarrito = localStorage.getItem('productos-en-carrito');
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoProductos = document.querySelector('#carrito-productos');
const contenedorCarritoAcciones = document.querySelector('#carrito-acciones');
let botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');
const botonVaciar = document.querySelector('#carrito-acciones-vaciar');
const contenedorTotal = document.querySelector('#total');
const botonComprar = document.querySelector('#carrito-acciones-comprar');

function cargarProductosCarrito() {
  if (productosEnCarrito && productosEnCarrito.length > 0) {
    contenedorCarritoProductos.classList.remove('disabled');
    contenedorCarritoAcciones.classList.remove('disabled');

    contenedorCarritoProductos.innerHTML = '';

    productosEnCarrito.forEach((producto) => {
      const div = document.createElement('div');
      div.classList.add('carrito-producto');
      div.innerHTML = `
      <div class="card rounded-3 mb-4">
      <div class="card-body p-4">
        <div class="row d-flex justify-content-between align-items-center">
          <div class="col-md-2 col-lg-2 col-xl-2">
          <p class="lead fw-normal mb-2">${producto.titulo}</p>

            <img
              src="${producto.imagen}"
              class="carrito-producto-imagen img-fluid rounded-3"
              alt="${producto.titulo}"
            />
          </div>
          
          <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
    
          <div class="carrito-producto-cantidad">
          <p class="lead fw-normal mb-2">Cantidad</p>
          <h5 class="mb-0">${producto.cantidad}</h5>

          </div>
    
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <p class="lead fw-normal mb-2">Precio</p>
            <h5 class="mb-0">${producto.precio}</h5>
          </div>
          <div class="carrito-producto-subtotal col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <p class="lead fw-normal mb-2">Subtotal</p>
            <h5 class="mb-0">$${producto.precio * producto.cantidad}</h5>
          </div>
          <div class="col-md-1 col-lg-1 col-xl-1 text-end">
            <a class="carrito-producto-eliminar text-danger"><i class="bi bi-trash3"></i></a>
          </div>
        </div>
      </div>
    </div>
            `;

      contenedorCarritoProductos.append(div);
    });
  } else {
    contenedorCarritoProductos.classList.add('disabled');
    contenedorCarritoAcciones.classList.add('disabled');
  }

  actualizarBotonesEliminar();
  actualizarTotal();
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');

  botonesEliminar.forEach((boton) => {
    boton.addEventListener('click', eliminarDelCarrito);
  });
}

function eliminarDelCarrito(e) {
  const idBoton = e.currentTarget.id;
  const index = productosEnCarrito.findIndex(
    (producto) => producto.id === idBoton
  );

  productosEnCarrito.splice(index, 1);
  cargarProductosCarrito();

  localStorage.setItem(
    'productos-en-carrito',
    JSON.stringify(productosEnCarrito)
  );
}

botonVaciar.addEventListener('click', vaciarCarrito);
function vaciarCarrito() {
  productosEnCarrito.length = 0;
  localStorage.setItem(
    'productos-en-carrito',
    JSON.stringify(productosEnCarrito)
  );
  cargarProductosCarrito();
}

function actualizarTotal() {
  const totalCalculado = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );
  total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener('click', comprarCarrito);
function comprarCarrito() {
  productosEnCarrito.length = 0;
  localStorage.setItem(
    'productos-en-carrito',
    JSON.stringify(productosEnCarrito)
  );

  contenedorCarritoProductos.classList.add('disabled');
  contenedorCarritoAcciones.classList.add('disabled');
}
