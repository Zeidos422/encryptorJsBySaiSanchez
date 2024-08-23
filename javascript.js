const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".btn-copiar");
const imagenAlerta = document.querySelector(".imagen-alerta");
const alerta = document.querySelector(".alerta");
const instrucciones = document.querySelector(".instrucciones");
const mensajeCopiado = document.querySelector(".mensaje-copiado");


function validarTexto(botonPresionado) {
    const texto = textArea.value;
    const regex = /^[a-z\s]+$/;

    if (!texto) {
        instrucciones.textContent = "El campo está vacío";
        instrucciones.classList.add("animar");
        setTimeout(() => instrucciones.classList.remove("animar"), 1000);
        instrucciones.style.display = "block";
        alerta.style.display = "block";
        imagenAlerta.style.display = "block";
        mensaje.style.display = "none";
        copiar.style.display = "none";
        return;
    }

    if (!regex.test(texto)) {
        instrucciones.textContent = "Solo se permiten letras minúsculas y sin acentos";
        instrucciones.classList.add("animar");
        setTimeout(() => instrucciones.classList.remove("animar"), 1000);
        return;
    }

    if (botonPresionado === 'encriptar') {
        btnEncriptar();
        return;
    } else if (botonPresionado === 'desencriptar') {
        btnDesencriptar();
        return;
    }
};

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    copiar.style.display = "block";
    mensaje.style.display = "block";
    textArea.value = "";
    instrucciones.style.display = "none";
    alerta.style.display = "none";
    imagenAlerta.style.display = "none";
    console.log("validar texto botonencriptar")
    return;
}

const encriptar = (stringEncriptada) => {
    const matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    return stringEncriptada.toLowerCase().replace(
        new RegExp(matrizCodigo.map(([letra]) => letra).join("|"), "g"),
        (match) => matrizCodigo.find(([letra]) => letra === match)[1]
    );
};



function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    copiar.style.display = "block";
    mensaje.style.display = "block";
    textArea.value = "";
    instrucciones.style.display = "none";
    alerta.style.display = "none";
    imagenAlerta.style.display = "none";
    return;
}

const desencriptar = (stringDesencriptada) => {
    const matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    return stringDesencriptada.replace(
        new RegExp(matrizCodigo.map(([_, codigo]) => codigo).join("|"), "g"),
        (match) => matrizCodigo.find(([_, codigo]) => codigo === match)[0]
    );
};

function btnCopiar() {
    navigator.clipboard.writeText(mensaje.value);
    mensajeCopiado.style.display = "block";
    mensajeCopiado.classList.add("animar2");
    setTimeout(() => mensajeCopiado.classList.remove("animar2"), 1000);
    setTimeout(() => instrucciones.style.display = "block", 2000);
    setTimeout(() => alerta.style.display = "block", 2000);
    setTimeout(() => mensaje.style.display = "none", 2000);
    setTimeout(() => copiar.style.display = "none", 2000);
    setTimeout(() => mensajeCopiado.style.display = "none", 2000);
    setTimeout(() => imagenAlerta.style.display = "block", 2000);
};

window.addEventListener("resize", () => {
    imagenAlerta.classList.toggle("imagen-alerta-oculta", window.innerWidth < 1251);
});







