class Usuario {
    constructor(id,password, nombre, email){
      this.id = id;
      this._password = password;
      this.nombre = nombre;
      this.email = email;
      this.carrito = [];
  } 
      
  mostrarPerfil() {
      console.log("Perfil del Usuario:");
      console.log(`ID: ${this.id}`);
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Email: ${this.email}`);
  }

  agregarAlCarrito(producto){
      this.carrito.push(producto);
  }

  verCarrito(){
      console.log("Carrito de Compras:");
      this.carrito.forEach((producto) => {
          console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
      });
  }

  totalCarrito(){
      let total = 0;
      this.carrito.forEach((producto) => {
          total += producto.precio;
      });
      return total;
  }
}

class UsuarioPremium extends Usuario {
  constructor(id, password, nombre, email, descuento){
      super(id, password, nombre, email);
      this.descuento = descuento;
  }

  totalCarrito(){
      let total = super.totalCarrito();
      return total - (total * this.descuento / 100);
  }
}

class Producto{
  constructor(nombre,precio){
      this.nombre = nombre;
      this.precio = precio;
  }
} 




const usuarios = [
  new UsuarioPremium("julio123", "clave123", "Julio Hoyos", "julio@example.com", 10),
  new Usuario("maria456", "clave456", "María López", "maria@example.com")
];

function login(usuarioIngresado, passwordIngresado) {
  const user = usuarios.find(u => u.id === usuarioIngresado && u._password === passwordIngresado);
  if (user) {
      console.log("Login exitoso");
      user.mostrarPerfil();
      return user;
  } else {
      console.log("Usuario o contraseña incorrectos.");
      return null;
  }
}

const usuarioLogueado = login("julio123", "clave123");

if (usuarioLogueado) {
  const prod1 = new Producto("Monitor", 1200);
  usuarioLogueado.agregarAlCarrito(prod1);
  usuarioLogueado.verCarrito();
  console.log("Total: $" + usuarioLogueado.totalCarrito());
}

