
console.log('Olá mundo!');

// Selecionando o título
const titulo = document.getElementById('title');

// Array de mensagens aleatórias com emojis
const messages = [
    "🌟 Olá! Espero que você esteja tendo um ótimo dia! 🌈",
    "😊 Sorria! Você é incrível! 💖",
    "🌍 A vida é uma aventura, aproveite cada momento! 🚀",
    "💪 Não esqueça de acreditar em si mesmo! ✨",
    "🎉 Cada dia é uma nova oportunidade para ser feliz! ☀️",
];

// Array de cores de fundo
const backgroundColors = [
    'lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow', 'lightpink', 'lightgray'
];

// Função para gerar uma mensagem aleatória
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Função para gerar uma cor de fundo aleatória
function getRandomBackgroundColor() {
    const randomIndex = Math.floor(Math.random() * backgroundColors.length);
    return backgroundColors[randomIndex];
}

// Função para criar confetes de emojis
function createConfetti() {
    const emojis = ["🎉", "🎊", "✨", "🌟", "💖"];
    const confettiCount = 100; // Número de confetes

    for (let i = 0; i < confettiCount; i++) {
        const emoji = document.createElement('span');
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'absolute';
        emoji.style.fontSize = '24px';
        emoji.style.pointerEvents = 'none';
        emoji.style.animation = `fall ${Math.random() * 3 + 2}s forwards`; // Animação de queda
        emoji.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
        emoji.style.top = Math.random() * -100 + 'px'; // Começa acima da tela
        document.body.appendChild(emoji);

        // Remove o emoji após a animação
        setTimeout(() => {
            emoji.remove();
        }, 5000);
    }
}

// Função para exibir a mensagem na tela e mudar a cor de fundo
function showMessage() {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = getRandomMessage();
    // Muda a cor de fundo
    document.body.style.backgroundColor = getRandomBackgroundColor();
    // Cria confetes de emojis
    createConfetti();
}

// Adiciona um evento de clique ao botão
document.getElementById('messageButton').onclick = showMessage;

// Adiciona a animação CSS para os confetes
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(100vh);
    }
}
`;
document.head.appendChild(style);