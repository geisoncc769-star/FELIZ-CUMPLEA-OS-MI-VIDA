// ===== VARIABLES GLOBALES =====
const messages = [
    "✨ Cada latido de mi corazón susurra tu nombre ✨",
    "🌹 Eres la melodía más hermosa que jamás he escuchado 🌹",
    "💫 En tus ojos encuentro mi hogar y mi infinito 💫",
    "🦋 Tu sonrisa ilumina hasta los días más grises 🦋",
    "🌟 Eres mi estrella favorita en el cielo nocturno 🌟",
    "🎵 Contigo, la vida es una canción de amor eterna 🎵",
    "💐 Cada día contigo es un regalo que atesoro 💐",
    "🌈 Tu amor pinta de colores mi mundo entero 🌈",
    "👑 Eres la reina de mi corazón y mi alma 👑",
    "🕊️ Tu amor me da alas para volar hacia los sueños 🕊️",
    "🌙 Eres mi luna llena en las noches de soledad 🌙",
    "🍯 Tu dulzura endulza cada momento de mi vida 🍯",
    "🎭 Contigo escribo la historia de amor más bella 🎭",
    "🔥 Tu pasión enciende la llama eterna de mi ser 🔥",
    "🌸 Floreciste en mi corazón como la primavera 🌸"
];

// Elementos del DOM
const rose = document.getElementById('magicalRose');
const messageDiv = document.getElementById('romanticMessage');
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
const volumeSlider = document.getElementById('volumeSlider');

// Variables de control
let messageIndex = 0;
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let musicSource;

// ===== FUNCIONES DE AUDIO =====

// Configurar volumen inicial
backgroundMusic.volume = 0.7;

// Control de reproducción/pausa
function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play().then(() => {
            musicToggle.innerHTML = '🔇 Pausar';
        }).catch(e => {
            console.log('Error al reproducir:', e);
            musicToggle.innerHTML = '▶️ Reproducir';
        });
    } else {
        backgroundMusic.pause();
        musicToggle.innerHTML = '▶️ Reproducir';
    }
}

// Control de volumen
function changeVolume(value) {
    backgroundMusic.volume = value / 100;
}

// Intentar reproducir automáticamente después de interacción del usuario
function startAutoplay() {
    backgroundMusic.play().then(() => {
        musicToggle.innerHTML = '🔇 Pausar';
        console.log('Música iniciada automáticamente');
    }).catch(e => {
        console.log('Autoplay bloqueado, esperando interacción del usuario');
        musicToggle.innerHTML = '▶️ Reproducir';
    });
}

// ===== FUNCIONES DE EFECTOS VISUALES =====

// Función para crear partículas de amor
function createLoveParticles() {
    const particles = ['💕', '💖', '💗', '💝', '💞', '❤️', '💘', '💓'];
    const container = document.getElementById('loveParticles');
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        container.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 7000);
    }, 800);
}

// Función para crear destellos
function createSparkles() {
    const container = document.getElementById('sparkles');
    
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparkle.style.backgroundColor = ['gold', '#ff69b4', '#ffd700', '#ffb6c1'][Math.floor(Math.random() * 4)];
        container.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 3000);
    }, 300);
}

// Función para crear confeti
function createConfetti() {
    const colors = ['#ff69b4', '#ffd700', '#ff1744', '#e91e63', '#ffb6c1'];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 4000);
        }, i * 100);
    }
}

// ===== FUNCIONES DE INTERACCIÓN =====

// Función para cambiar mensajes románticos
function showNextMessage() {
    messageDiv.classList.remove('show');
    setTimeout(() => {
        messageDiv.innerHTML = messages[messageIndex];
        messageDiv.classList.add('show');
        messageIndex = (messageIndex + 1) % messages.length;
    }, 300);
}

// Función para manejar vibración en dispositivos móviles
function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
    }
}

// ===== EVENT LISTENERS =====

// Event listener para la rosa
rose.addEventListener('click', () => {
    // Cambiar mensaje
    showNextMessage();
    
    // Crear confeti
    createConfetti();
    
    // Efecto de vibración en móviles
    vibrate();
});

// Control de reproducción/pausa
musicToggle.addEventListener('click', toggleMusic);

// Control de volumen
volumeSlider.addEventListener('input', (e) => {
    changeVolume(e.target.value);
});

// ===== INICIALIZACIÓN =====

// Mostrar mensaje inicial
setTimeout(() => {
    messageDiv.classList.add('show');
}, 500);

// Inicializar efectos visuales
createLoveParticles();
createSparkles();

// Iniciar música después de la primera interacción
document.addEventListener('click', startAutoplay, { once: true });
document.addEventListener('touchstart', startAutoplay, { once: true });

// Auto-iniciar música después de la primera interacción con audio context
document.addEventListener('click', async () => {
    if (audioContext.state === 'suspended') {
        await audioContext.resume();
    }
}, { once: true });

// Intentar autoplay inmediato
window.addEventListener('load', () => {
    setTimeout(startAutoplay, 1000);
});

// ===== FUNCIONES DE UTILIDAD =====

// Función para detectar si es dispositivo móvil
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Función para detectar orientación
function getOrientation() {
    return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
}

// Función para optimizar rendimiento en móviles
function optimizeForMobile() {
    if (isMobile()) {
        // Reducir frecuencia de partículas en móviles
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            if (index % 2 === 0) {
                particle.style.display = 'none';
            }
        });
        
        // Reducir destellos en móviles
        const sparkles = document.querySelectorAll('.sparkle');
        sparkles.forEach((sparkle, index) => {
            if (index % 3 === 0) {
                sparkle.style.display = 'none';
            }
        });
    }
}

// Optimizar al cargar
window.addEventListener('load', optimizeForMobile);

// ===== FUNCIONES ADICIONALES PARA MEJOR UX =====

// Función para prevenir zoom accidental en iOS
function preventZoom() {
    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
    });
    
    document.addEventListener('gesturechange', function (e) {
        e.preventDefault();
    });
    
    document.addEventListener('gestureend', function (e) {
        e.preventDefault();
    });
}

// Función para manejar cambios de orientación
function handleOrientationChange() {
    // Pequeño delay para que la orientación se complete
    setTimeout(() => {
        // Recalcular estilos si es necesario
        const container = document.querySelector('.container');
        container.style.opacity = '0';
        setTimeout(() => {
            container.style.opacity = '1';
        }, 100);
    }, 100);
}

// Event listeners adicionales
window.addEventListener('orientationchange', handleOrientationChange);
preventZoom();

// ===== DEBUG Y LOGGING =====

// Función para logging en desarrollo
function debugLog(message, data = null) {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log(`[Birthday Page Debug] ${message}`, data);
    }
}

// Log inicial
debugLog('Página de cumpleaños inicializada', {
    mobile: isMobile(),
    orientation: getOrientation(),
    audioContext: audioContext.state
});

// ===== FUNCIONES DE ACCESIBILIDAD =====

// Función para manejar navegación por teclado
function handleKeyboardNavigation(e) {
    switch(e.key) {
        case 'Enter':
        case ' ':
            if (e.target === rose) {
                e.preventDefault();
                rose.click();
            }
            break;
        case 'ArrowUp':
        case 'ArrowDown':
            if (e.target === volumeSlider) {
                e.preventDefault();
                const currentValue = parseInt(volumeSlider.value);
                const newValue = e.key === 'ArrowUp' ? 
                    Math.min(100, currentValue + 5) : 
                    Math.max(0, currentValue - 5);
                volumeSlider.value = newValue;
                changeVolume(newValue);
            }
            break;
    }
}

// Agregar soporte de teclado
document.addEventListener('keydown', handleKeyboardNavigation);

// Hacer la rosa accesible por teclado
rose.setAttribute('tabindex', '0');
rose.setAttribute('role', 'button');
rose.setAttribute('aria-label', 'Rosa mágica - Presiona para ver mensajes románticos');

debugLog('Script cargado completamente');
