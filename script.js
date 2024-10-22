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

// validacao dos formularios:
let selectedRating = 0;

function selectStar(rating) {
    selectedRating = rating;
    document.getElementById('rating').value = rating;

    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.innerHTML = index < rating ? '&#9733;' : '&#9734;'; // Preenchida ou vazia
    });
}

function submitForm() {
    const ocorrenciaText = document.getElementById('ocorrencia-text').value.trim();
    const rating = selectedRating;

    if (!ocorrenciaText) {
        alert('Por favor, preencha a avaliação da ocorrência.');
        return;
    }

    if (rating === 0) {
        alert('Por favor, selecione uma avaliação por estrelas.');
        return;
    }

    // Se tudo estiver correto, você pode enviar o formulário aqui
    alert('Avaliação enviada com sucesso!'); // Simulando envio

        // Limpar os campos após o envio
        clearForm();
    }

    function clearForm() {
        document.getElementById('ocorrencia-text').value = '';
        selectedRating = 0;
        document.getElementById('rating').value = '0';
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => star.innerHTML = '&#9734;'); // Reseta as estrelas
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

//noticias: 
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
    },
    // Novas notícias
    {
        titulo: "Incêndio em floresta é controlado após esforços conjuntos",
        descricao: "Equipes de bombeiros trabalham incessantemente para controlar as chamas e evitar danos maiores.",
    },
    {
        titulo: "Prefeitura de Natal anuncia melhorias na infraestrutura urbana",
        descricao: "Projetos de revitalização de praças e ruas devem ser iniciados no próximo mês.",
    },
    {
        titulo: "Festival de música traz artistas locais para o centro da cidade",
        descricao: "Evento visa promover a cultura e a música da região, com shows gratuitos para a população.",
    },
    {
        titulo: "Avanços na vacinação contra a gripe são registrados",
        descricao: "Campanha de vacinação tem alcançado um número recorde de imunizações na comunidade.",
    },
    {
        titulo: "Estudantes realizam protesto por melhorias na educação",
        descricao: "Movimento pede investimentos e melhores condições nas escolas públicas da região.",
    },
    {
        titulo: "Projeto de lei para proteção dos animais é aprovado na câmara",
        descricao: "Iniciativa visa fortalecer a proteção aos direitos dos animais e aumentar penalidades para maus-tratos.",
    },
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


        // Função para alternar entre as seções do menu de feedback
        function showSection(sectionId) {
            // Remover a classe 'active' de todas as seções
            document.querySelectorAll('.feedback-content').forEach(function(section) {
                section.classList.remove('active');
            });
        
            // Adicionar a classe 'active' à seção clicada
            document.getElementById(sectionId).classList.add('active');
        
            // Atualizar o menu para refletir a seção ativa
            document.querySelectorAll('.menu-item').forEach(function(item) {
                item.classList.remove('active');
            });
            document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');
        }
        
        // Definir a seção inicial como "Canais de Atendimento"
        showSection('canais');



