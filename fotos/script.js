const link = document.querySelector('.e2');

let lastX = null;
let lastY = null;

function getRandomPosition(max, last) {
    let newValue;
    do {
        newValue = Math.random() * max;
    } while (Math.abs(newValue - last) > 400); // Garante que o novo valor seja diferente do anterior
    return newValue;
}

function moveLink() {
    // Obtém a largura e a altura da janela de visualização (viewport)
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Obtém a largura e a altura do link
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    // Calcula os limites máximos para o movimento do link
    const maxX = viewportWidth - linkWidth;
    const maxY = viewportHeight - linkHeight;

    // Gera novas posições aleatórias dentro dos limites calculados, garantindo que não sejam iguais aos valores anteriores
    const randomX = getRandomPosition(maxX, lastX);
    const randomY = getRandomPosition(maxY, lastY);

    // Armazena os novos valores para comparação futura
    lastX = randomX;
    lastY = randomY;

    // Move o link para a nova posição
    link.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Evento de mouseover para mover o link
link.addEventListener('mouseover', moveLink);
window.addEventListener('resize', moveLink);
