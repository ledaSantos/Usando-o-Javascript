console.log('Olá mundo!');

// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
novoElemento.style.textAlign = 'center'; // Alinhamento do texto

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

// Cria o botão e o div para a mensagem
function createUI() {
    // Cria um elemento <div> para a mensagem
    const messageDiv = document.createElement('div');
    messageDiv.id = 'message';
    messageDiv.style.fontSize = '24px';
    messageDiv.style.color = 'blue';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.marginTop = '20px';

    // Cria um botão
    const button = document.createElement('button');
    button.textContent = 'Clique para para ficar feliz! 🎊';
    button.style.display = 'block';
    button.style.margin = '20px auto';
    button.style.padding = '10px 20px';
    button.style.fontSize = '18px';

    // Adiciona um evento de clique ao botão
    button.onclick = showMessage;

    // Adiciona os elementos ao corpo do documento
    document.body.appendChild(button);
    document.body.appendChild(messageDiv);
}

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

// Chama a função para criar a interface quando a página carregar
window.onload = createUI;

