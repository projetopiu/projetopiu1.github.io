// Função para abrir/fechar o menu lateral
function toggleMenu() {
    const menu = document.getElementById('menu-lateral');
    if (menu.style.width === '0px' || menu.style.width === '') {
        menu.style.width = '300px'; // O tamanho será o mesmo do campo do formulário
    } else {
        menu.style.width = '0';
    }
}

// Função para ativar as estrelas ao clicar
const stars = document.querySelectorAll('.star');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
});

// Função de busca (placeholder para implementação)
function search() {
    const query = document.getElementById('search-input').value;
    console.log('Procurando por:', query);
}

//feedback =>:

// Seleciona os itens do menu e a linha verde
const menuItems = document.querySelectorAll('.menu-item');
const greenLine = document.querySelector('.feedback-line-green');

// Adiciona evento de clique para cada item do menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove a classe ativa de todos os itens
        menuItems.forEach(i => i.classList.remove('active'));
        // Adiciona a classe ativa ao item clicado
        item.classList.add('active');

        // Movimenta a linha verde para baixo do item ativo
        const position = item.getAttribute('data-position');
        greenLine.style.transform = `translateX(${position}px)`;
    });
});

