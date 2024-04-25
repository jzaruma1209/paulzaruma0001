// script.js
function toggleButton() {
    var button = document.getElementById('toggleButton');
    var stateText = document.getElementById('buttonState');
    
    if (button.innerHTML === "Apagado") {
        button.innerHTML = "Encendido";
        stateText.innerHTML = "Encendido";
        button.style.backgroundColor = "green";
    } else {
        button.innerHTML = "Apagado";
        stateText.innerHTML = "Apagado";
        button.style.backgroundColor = "red";
    }
}



//script para globo
function toggleButton() {
    var button = document.getElementById('toggleButton');
    var stateText = document.getElementById('buttonState');
    var balloon = document.getElementById('balloon');
    
    if (button.innerHTML === "Apagado") {
        button.innerHTML = "Encendido";
        stateText.innerHTML = "Encendido";
        button.style.backgroundColor = "green";
        balloon.classList.add('show'); // Muestra el globo
        balloon.innerHTML = 'Encendido';
    } else {
        button.innerHTML = "Apagado";
        stateText.innerHTML = "Apagado";
        button.style.backgroundColor = "red";
        balloon.classList.remove('show'); // Oculta el globo
        balloon.innerHTML = 'Apagado';
    }
}



