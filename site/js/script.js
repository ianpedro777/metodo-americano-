
// Contador regressivo
function startCountdown() {
    // Define o tempo inicial (15 minutos)
    let totalSeconds = 15 * 60; // 15 minutos em segundos
    
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    function updateDisplay() {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
    
    function countdown() {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
        } else {
            // Quando chegar a zero, reinicia o contador
            totalSeconds = 15 * 60;
            updateDisplay();
        }
    }
    
    // Atualiza o display inicial
    updateDisplay();
    
    // Inicia o contador (atualiza a cada segundo)
    setInterval(countdown, 1000);
}

// Função para simular redução de vagas
function updateVagas() {
    const vagasElement = document.querySelector('.warning');
    let vagas = 47;
    
    setInterval(() => {
        if (vagas > 10) {
            vagas--;
            vagasElement.innerHTML = `<i class="fas fa-exclamation-triangle"></i> APENAS ${vagas} VAGAS RESTANTES!`;
        }
    }, 30000); // Reduz uma vaga a cada 30 segundos
}

// Função para adicionar efeito de clique no botão WhatsApp
function setupWhatsAppButton() {
    const whatsappBtns = document.querySelectorAll('.whatsapp-btn');
    
    whatsappBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Link do grupo do WhatsApp fornecido pelo usuário
            const whatsappUrl = 'https://chat.whatsapp.com/LVDLoYdm1GyHQ3ePolr53w';
            
            // Abre o WhatsApp em uma nova aba
            window.open(whatsappUrl, '_blank');
            
            // Adiciona efeito visual
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Adiciona vibração em dispositivos móveis
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        });
    });
}

// Função para adicionar efeitos de entrada
function addEntranceEffects() {
    const elements = document.querySelectorAll('.container > *');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Inicializa todas as funções quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    updateVagas();
    setupWhatsAppButton();
    addEntranceEffects();
    
    // Adiciona efeito de parallax suave no scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const container = document.querySelector('.container');
        container.style.transform = `translateY(${scrolled * 0.1}px)`;
    });
});

// Previne o comportamento padrão de alguns elementos
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Adiciona efeito de vibração no mobile quando clicar no botão
if ('vibrate' in navigator) {
    document.querySelector('.whatsapp-btn').addEventListener('click', function() {
        navigator.vibrate(200);
    });
}
