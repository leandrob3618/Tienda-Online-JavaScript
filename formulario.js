

<<<<<<< HEAD
const $form =document.querySelector('#form');
const $buttonMailto = document.querySelector('#información');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    console.log (form.get('name'))
    $buttonMailto.setAttribute('href', `mailto: leandrobarrionuevo49@gmail.com?sumbject=${form.get ('name')}${form.get ('email')}&body=${form.get ('mensaje')}`)
    $buttonMailto.click()
};
=======

mensaje = 'BIENVENIDOS A CARRERAS DE TRAIL'
alert (mensaje);

evento = parseInt(prompt(`CARRERAS DE TRAIL` + '\n' +
            'Selecione el tipo de disciplina que desea incribirse' + '\n' +
            '1) Maraton' + '\n' +
            '2) Trail Running' + '\n' +
            '3) Ciclismo' + '\n' +
            '4) Mountain Bike' + '\n' +
            '5) Natacion' + '\n' +
            '6) Para salir'));

var formulario = [];

function cargarUsuario() {
    
    var nombreCompetidor = document.getElementById('nombreCompetidor').value;
    var apellidoCompetidor = document.getElementById('apellidoCompetidor').value;
    var edadCompetidor = document.getElementById('edadCompetidor').value;
    var dniCompetidor = document.getElementById('dniCompetidor').value;


    var corredor = {
        nombre: nombreCompetidor,
        apellido: apellidoCompetidor,
        edad: edadCompetidor,
        dni: dniCompetidor
    };

    formulario.push(corredor);

    mostrarInformacion(corredor);

    localStorage.setItem('formulario', JSON.stringify(formulario));
}



function mostrarInformacion(corredor) {
    var infoRunDiv = document.getElementById('infoRun');

    infoRunDiv.innerHTML = '<h2>Datos Competidores:</h2><p><strong>Nombre:</strong> ' + corredor.nombre + '</p><p><strong>Apellido:</strong> ' + corredor.apellido + '</p> <p><strong>Edad:</strong> ' + corredor.edad + '</p> <p><strong>DNI:</strong> ' + corredor.dni + '</p>';
}
>>>>>>> 3380b78dd2bffd7558594159c62abe379d2f5f21
