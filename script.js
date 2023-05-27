/**
 * Verifica que el texto enviado no sea mayusculas o caracteres especiales
 * @param {*} string Texto a verificiar
 * @returns {boolean} Resultado de la validacion
 */

function validarTXT(string) {
    const validacion = /[a-z 0-9]/g.test(string);
    return validacion;
}

/**
 * Encripta el Texto siguiendo las reglas del Challange
 */
function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let Inicio = document.getElementById("Inicio");
    let btnCopiar = document.getElementById("btn-copiar");

    //Validamos que haya texto en la caja
    if (texto.length != 0) {
        //Validamos que el texto sea minuscula
        let txtvalidado = validarTXT(texto);
        if (txtvalidado) {
            //Ejecutamos la encriptacion
            let textoCifrado = texto
                .replace(/e/gi, "enter")
                .replace(/i/gi, "imes")
                .replace(/a/gi, "ai")
                .replace(/o/gi, "ober")
                .replace(/u/gi, "ufat");
            //Actualizamos valores en la barra lateral
            document.getElementById("texto").value = "";
            tituloMensaje.textContent = "Texto encriptado con éxito!";
            parrafo.textContent = textoCifrado;
            Inicio.src = "./img/Incriptado.png";
            btnCopiar.style.visibility = 'visible';
        }
        //En caso de que el texto no cumpla las reglas mandamos una alerta con error.
        else {
            Swal.fire(
                "ERROR",
                "El texto no puede contener mayusculas y/o caracteres especiales",
                'warning'
            );

        }
    }
    //En caso de que no se haya puesto nada en el cuadro lanzamos una alerta con error.
    else {
        Inicio.src = "./img/Inicio.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        Swal.fire(
            "ERROR",
            "Debes Ingresar un Texto",
            'warning'
        );
    }
}

/**
 * Desencripta el Texto siguiendo las reglas del Challange
 */
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let Inicio = document.getElementById("Inicio");
    let btnCopiar = document.getElementById("btn-copiar");

    //Validamos que haya texto en la caja
    if (texto.length != 0) {
        let txtvalidado = validarTXT(texto);
        if (txtvalidado) {
            //ejecutamos la encriptacion
            let textoCifrado = texto
                .replace(/enter/gi, "e")
                .replace(/imes/gi, "i")
                .replace(/ai/gi, "a")
                .replace(/ober/gi, "o")
                .replace(/ufat/gi, "u");
            //Actualizamos valores en la barra lateral    
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto desencriptado con éxito!";
            parrafo.textContent = "";
            Inicio.src = "./img/Desencriptado.png";
            btnCopiar.style.visibility = 'hidden';
        }
        //En caso de que el texto no cumpla las reglas mandamos una alerta con error.
        else {
            Swal.fire(
                "ERROR",
                "El texto no puede contener mayusculas y/o caracteres especiales",
                'warning'
            );
        }
    }
    //En caso de que no se haya puesto nada en el cuadro lanzamos una alerta con error. 
    else {
        Inicio.src = "./img/Inicio.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        Swal.fire(
            "ERROR!",
            "Debes ingresar un texto",
            'warning'
        );
    }
}

/**
 * Copia el texto encriptado en el Portapapeles
 */
function copiar() {
    navigator.clipboard.writeText(parrafo.textContent);
}
