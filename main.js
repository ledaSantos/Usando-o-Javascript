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

// Array de mensagens aleatórias com emojis
const messages = [
    "🌟 Olá! Espero que você esteja tendo um ótimo dia! 🌈",
    "😊 Sorria! Você é incrível! 💖",
    "🌍 A vida é uma aventura, aproveite cada momento! 🚀",
    "💪 Não esqueça de acreditar em si mesmo! ✨",
    "🎉 Cada dia é uma nova oportunidade para ser feliz! ☀️",
];

// Função para gerar uma mensagem aleatória
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Função para exibir uma mensagem em uma posição aleatória
function showRandomMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = getRandomMessage();
    messageDiv.style.position = 'absolute';
    messageDiv.style.fontSize = '24px';
    messageDiv.style.color = 'blue';

    // Define uma posição aleatória na tela
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    messageDiv.style.left = `${x}px`;
    messageDiv.style.top = `${y}px`;

    // Adiciona a mensagem ao corpo do documento
    document.body.appendChild(messageDiv);
}

// Função para exibir a mensagem na tela
function showMessage() {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = getRandomMessage();
}

// Cria a interface do usuário
function createUI() {
    // Cria um elemento <div> para a mensagem
    const messageDiv = document.createElement('div');
    messageDiv.id = 'message';
    messageDiv.style.fontSize = '24px';
    messageDiv.style.color = 'blue';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.marginTop = '20px';

    // Cria um botão para mensagens no centro
    const button = document.createElement('button');
    button.textContent = 'Clique para receber uma mensagem! 🎊';
    button.style.display = 'block';
    button.style.margin = '20px auto';
    button.style.padding = '10px 20px';
    button.style.fontSize = '18px';

    // Adiciona um evento de clique ao botão
    button.onclick = showMessage;

    // Cria um botão para mensagens em posições aleatórias
    const randomButton = document.createElement('button');
    randomButton.textContent = 'Clique para uma mensagem aleatória na tela! ✨';
    randomButton.style.display = 'block';
    randomButton.style.margin = '20px auto';
    randomButton.style.padding = '10px 20px';
    randomButton.style.fontSize = '18px';

    // Adiciona um evento de clique ao botão de posição aleatória
    randomButton.onclick = showRandomMessage;

    // Adiciona os elementos ao corpo do documento
    document.body.appendChild(button);
    document.body.appendChild(randomButton);
    document.body.appendChild(messageDiv);
}

// Chama a função para criar a interface quando a página carregar
window.onload = createUI;