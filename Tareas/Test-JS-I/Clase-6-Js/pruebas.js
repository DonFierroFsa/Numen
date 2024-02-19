const agregarStringInvertida = () => {
  String.prototype.reverse = function () {
    return this.split("").reverse().join("");
  };
};
let adrian = "Adrian";

agregarStringInvertida();
console.log(adrian.reverse());

class Persona {
  //Escribir el constructor aquí:
  constructor(nombre, apellido, edad, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
  }
  detalle() {
    return {
      Nombre: this.nombre,
      Apellido: this.apellido,
      Edad: this.edad,
      Domicilio: this.domicilio,
    };
  }
}
const arian = new Persona("Adrian", "Rivira", 33, "Formosa");
console.log(
arian.detalle()
)
function agregarMetodo() {
    //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve:
    //Ej: "Juan, 22 años"
    //Tu código:
    Persona.prototype.datos = function (){
      return `${this.nombre},${this.edad} años`
    }
  }
  agregarMetodo()
  console.log(
  arian.datos())