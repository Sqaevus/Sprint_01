function encriptar() {
    let texto = document.getElementById("txtTexto").value.toLowerCase();
    document.getElementById("txtResultado").value = texto;
    if (texto.trim() === "") {
        document.getElementById("imagen").style.display = "block"; // Mostrar imagen
        document.getElementById("txtResultado").style.backgroundColor = "white";
        return;
    } else { // Si el campo no está vacío
        texto = texto.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
        document.getElementById("txtResultado").value = texto;
        document.getElementById("txtResultado").style.backgroundColor = "white"; // Fondo blanco
        document.getElementById("imagen").style.display = "none"; // Ocultar imagen
    }
}

function desencriptar() {
    let texto = document.getElementById("txtResultado").value.toLowerCase();
    if (texto.trim() === "") {
        document.getElementById("imagen").style.display = "block"; // Mostrar imagen
        document.getElementById("txtResultado").style.backgroundColor = "white";
        return;
    } else { // Si el campo no está vacío
        texto = texto.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
        document.getElementById("txtTexto").value = texto;
        document.getElementById("txtTexto").style.backgroundColor = "white"; // Fondo blanco
        document.getElementById("imagen").style.display = "none"; // Ocultar imagen
    }
}

// Función para mostrar la imagen si el campo está vacío al cargar la página
window.onload = function() {
    let texto = document.getElementById("txtResultado").value.toLowerCase();
    if (texto.trim() === "") {
        document.getElementById("imagen").style.display = "block"; // Mostrar imagen
        document.getElementById("txtResultado").style.backgroundColor = "white";
    }
}


function copiar() {
    let resultado = document.getElementById("txtResultado");
    resultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles: " + resultado.value);
}
