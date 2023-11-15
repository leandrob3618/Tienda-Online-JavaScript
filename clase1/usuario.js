
let nombreYapellido;
let mensaje;
let correo;
let pie;

let evento;
let larioja = 1;
let catamarca = 2;
let sanjuan = 3;
let cordoba = 4;
let salir = 5;

mensaje = 'CARRERAS DE TRAIL'
alert (mensaje);


nombreYapellido = prompt ('Ingrese Nombre y Apellido');
alert (`Hola ${nombreYapellido}! bienvenido a CARRERAS DE TRAIL`);

correo = prompt ('Ingrese Correo');

            do {
        
                evento = parseInt(prompt(`CARRERAS DE TRAIL` + '\n' +
                    'Seleciona una opción para mayor información' + '\n' +
                    '1) La Rioja' + '\n' +
                    '2) Catamarca' + '\n' +
                    '3) San Juan' + '\n' +
                    '4) Cordoba' + '\n' +
                    '5) Para salir'));
        
                    if (5 !== evento) {
        
                        switch (evento) {
        
        
                            case larioja:
                                    alert(`${nombreYapellido} en breve te escribiremos para brindarte información`);
                                break;
        
                            case catamarca:
                                    alert(`${nombreYapellido} en breve te escribiremos para brindarte información`);
                                    break;
        
                            case sanjuan:
                                    alert(`${nombreYapellido} en breve te escribiremos para brindarte información`);
                                    break;
        
                            case cordoba:
                                    alert(`${nombreYapellido} en breve te escribiremos para brindarte información`);
                                    break;
    
                            default:
                                alert('Opción selecionada INCORRECTA');
                                break;
                        }
                    }
            } 
            while (evento !== 5);
