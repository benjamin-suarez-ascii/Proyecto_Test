// Variable para almacenar el audio actual
let currentAudio = null;

// Función para reproducir y detener el audio anterior si es necesario
function playAudio(id, audioFile) {
    // Si ya hay un audio reproduciéndose, detenerlo
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;  // Reinicia el audio detenido
    }

    // Crear un nuevo objeto Audio y asignarle un id único
    const audio = new Audio(audioFile);
    audio.play();
    currentAudio = audio;  // Asignar el audio actual para futuras referencias
}

// Añadir eventos a los personajes
document.getElementById('bombardino-crocodillo').addEventListener('click', function() {
    playAudio('audio-bombardino', 'audios/bombardilo.mp3');
});

document.getElementById('capuchina-bailarina').addEventListener('click', function() {
    playAudio('audio-capuchina', 'audios/capuchina.mp3');
});

document.getElementById('tralala').addEventListener('click', function() {
    playAudio('audio-tralala', 'audios/tralala.mp3');
});

document.getElementById('lirily-larila').addEventListener('click', function() {
    playAudio('audio-lirily', 'audios/lirily-larila.mp3');
});

document.getElementById('boneca-amvala').addEventListener('click', function() {
    playAudio('audio-boneca', 'audios/boneca.mp3');
});

document.getElementById('brarr-patta-pim').addEventListener('click', function() {
    playAudio('audio-brarr', 'audios/brarr-patta-pim.mp3');
});

document.getElementById('tungguk').addEventListener('click', function() {
    playAudio('audio-tungguk', 'audios/tungguk.mp3');
});

document.getElementById('judgment-jeanni').addEventListener('click', function() {
    playAudio('audio-judgment', 'audios/judgment-jeanni.mp3');
});

document.getElementById('spring-beanie').addEventListener('click', function() {
    playAudio('audio-spring-beanie', 'audios/spring-beanie.mp3');
});

document.getElementById('capuccino-asashino').addEventListener('click', function() {
    playAudio('audio-capuccino', 'audios/capuccino.mp3');
});

document.getElementById('baca-saturno').addEventListener('click', function() {
    playAudio('audio-baca-saturno', 'audios/vaca.mp3');
});

document.getElementById('tripy-trophy').addEventListener('click', function() {
    playAudio('audio-tripy-trophy', 'audios/tripi.mp3');
});
