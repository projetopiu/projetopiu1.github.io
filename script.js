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

//Noticias:
        // Dados simulados de notícias
        const noticias = [
            {
                titulo: "Roubo a banco frustrado pela Polícia Civil em Parnamirim",
                descricao: "Agentes conseguiram frustrar um assalto a banco, após monitoramento de suspeitos.",
            },
            {
                titulo: "Homem é preso com 5 kg de drogas em operação em São Gonçalo do Amarante",
                descricao: "A operação ocorreu na manhã desta terça-feira, com sucesso na apreensão de drogas.",
            },
            {
                titulo: "Polícia Civil inicia campanha de conscientização sobre crimes cibernéticos",
                descricao: "Campanha visa alertar a população sobre golpes digitais e formas de proteção.",
            },
            {
                titulo: "Investigação revela esquema de fraudes em licitações públicas",
                descricao: "Fraude em licitações envolvendo várias empresas é investigada pela Polícia Civil.",
            },
            {
                titulo: "Polícia Civil prende suspeito de homicídio após meses de investigação",
                descricao: "O suspeito foi localizado e preso em uma operação conjunta com a Polícia Militar.",
            },
            {
                titulo: "Foragido da justiça é preso em Natal após 5 anos",
                descricao: "Homem procurado por diversos crimes foi finalmente capturado em uma ação planejada.",
            }
        ];

        // Função para renderizar notícias
        function renderNews() {
            const newsList = document.getElementById('news-list');

            noticias.forEach(noticia => {
                // Criar elemento de notícia
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');

                // Preencher conteúdo da notícia
                newsItem.innerHTML = `
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.descricao}</p>
                `;

                // Adicionar ao container de notícias
                newsList.appendChild(newsItem);
            });
        }

        // Chama a função para renderizar as notícias ao carregar a página
        renderNews();