let precioTotal = 0;
let carrito = [];

class ProductoZapatilla {
  constructor(id, marca, modelo, precio, stock) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.stock = stock;
  }
}

const zap1 = new ProductoZapatilla(001, 'Nike', 'Nike air jordan 1', 3000, 25);
const zap2 = new ProductoZapatilla(002, 'Nike', 'Nike air force 1', 4000, 25);
const zap3 = new ProductoZapatilla(003, 'Adidas', 'Adidas Forum', 5000, 25);
const zap4 = new ProductoZapatilla(004, 'Adidas', 'Adidas SuperStar', 4500, 25);

const Zapatillas = [zap1, zap2, zap3, zap4];

const Modelos = Zapatillas.map((el) => el.modelo);

while (true) {
  let productos = Number(
    prompt(
      'Elija un producto, estos son los modelos disponibles: ' +
        '\n1_' +
        Modelos[0] +
        '\n2_' +
        Modelos[1] +
        '\n3_' +
        Modelos[2] +
        '\n4_' +
        Modelos[3]
    )
  );

  if (productos > 4) {
    alert('Ese Numero de producto no esta disponlibe, seleccione otro');
    continue;
  }

  if (productos == 1) {
    stock = zap1.stock;
  }
  if (productos == 2) {
    stock = zap2.stock;
  }
  if (productos == 3) {
    stock = zap3.stock;
  }
  if (productos == 4) {
    stock = zap4.stock;
  }

  let cantidad = Number(
    prompt('Cuantos quiere comprar? ' + '(' + stock + ' Unidades Disponibles)')
  );

  if (productos == 1) {
    zap1.stock = zap1.stock - cantidad;
  }
  if (productos == 2) {
    zap2.stock = zap2.stock - cantidad;
  }
  if (productos == 3) {
    zap3.stock = zap3.stock - cantidad;
  }
  if (productos == 4) {
    zap4.stock = zap4.stock - cantidad;
  }

  function cuenta(modelo, precio, cantidad) {
    precioTotal = precioTotal + precio * cantidad;
    alert(
      'Se agregaron ' + cantidad + ' ' + modelo + ' a su carrito de compras'
    );

    carrito.push(cantidad + ' ' + modelo + ',');
  }

  if (stock === 0) {
    alert('no hay mas unidades disponibles de este producto');
  } else if (cantidad > stock) {
    alert('A ingresado una cantidad de unidades mayor al limite disponible');
  } else {
    switch (productos) {
      case 1:
        cuenta(zap1.modelo, zap1.precio, cantidad);
        break;
      case 2:
        cuenta(zap2.modelo, zap2.precio, cantidad);
        break;
      case 3:
        cuenta(zap3.modelo, zap3.precio, cantidad);
        break;
      case 4:
        cuenta(zap4.modelo, zap4.precio, cantidad);
        break;
    }
  }

  respuesta = prompt('Desea comprar algo mas ( Si / No )');
  if (respuesta == 'no' || respuesta == 'No') {
    break;
  }
}

alert('Usted compro: ' + carrito);
alert('Tiene que pagar ' + precioTotal + '$');

let productoCompra = parseInt(
  prompt('Elija un Tipo de producto:\n1- Zapatillas\n 2- Mochilas')
);

if (productoCompra == 1) {
  console.log('Estos son los modelos disponibles ' + Zapatillas);
}
