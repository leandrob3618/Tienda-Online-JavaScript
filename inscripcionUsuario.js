

let mensaje;
let nombreYapellido;
let dato = 0;
let evento = 0;
let maraton;
let trailRunning;
let ciclismo;
let mountainBike;
let natacion;


mensaje = 'CARRERAS DE TRAIL'
alert (mensaje);

nombreYapellido = prompt ('Ingrese Nombre y Apellido');
alert (`Hola ${nombreYapellido}! Bienvenido a CARRERAS DE TRAIL`);

class inscripcionUsuario {
    nombre;
    apellido;
    correo;
    genero;
    dni;
    edad;
    distancia;
    

    constructor(nombre, apellido, correo, genero, dni, edad, distancia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.genero = genero;
        this.dni = dni;
        this.edad = edad;
        this.ditancia = distancia;
}
}


    
dato = parseInt(prompt("Ingrese 1 para continuar con registro o 2 para salir"));


evento = parseInt(prompt(`CARRERAS DE TRAIL` + '\n' +
            'Selecione el tipo de disciplina que desea incribirse' + '\n' +
            '1) Maraton' + '\n' +
            '2) Trail Running' + '\n' +
            '3) Ciclismo' + '\n' +
            '4) Mountain Bike' + '\n' +
            '5) Natacion' + '\n' +
            '6) Para salir'));

let participantes = parseInt(prompt("Cuantos participantes desea inscribir:"));

if (dato !== 2) {
    
    if (evento !==6) {

        const infoUsuarios = [];

        function agregarUsuario(nombre, apellido, correo, genero, dni, edad, distancia) {
            const nuevoUsuario = new inscripcionUsuario(nombre, apellido, correo, genero, dni, edad, distancia);
            infoUsuarios.push(nuevoUsuario);
        }

        for (let i = 0; i < participantes; i++) {
        agregarUsuario(
            inscripcionUsuario.nombre = prompt('Ingrese Nombre'),
            inscripcionUsuario.apellido = prompt('Ingrese Apellido'),
            inscripcionUsuario.correo = prompt('Ingrese Correo'),
            inscripcionUsuario.genero = prompt('Ingrese Genero'),
            inscripcionUsuario.dni = prompt('Ingrese DNI'),
            inscripcionUsuario.edad = prompt('Ingrese Edad'),
            inscripcionUsuario.distancia = prompt('Ingrese distancia')
        );
         }

         infoUsuarios.forEach(element => {
            console.log(`Nombre:${element.nombre}, Apellido${element.apellido}, Correo${element.correo}, Genero:${element.genero}, DNI:${element.dni}, Edad:${element.edad}, Distancia:${element.distancia}`);
        });
    }
    
}




