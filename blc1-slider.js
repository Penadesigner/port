// Seleciona todos os botões de navegação com a classe 'nav-btn','video-slide','content'
const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.video-slide');
const contents = document.querySelectorAll('.content');
// Inicializa o índice do slide atual como 0
let index = 0;
// Inicializa o ID do intervalo para controle da mudança automática de slides
let intervalId = null;

/* ****************************************************** */
/* ************** SLIDER VIDEO AUTO E MANUAL *************** */
// Função para mudar o slide manualmente
const changeSlide = (newIndex) => {
    // Limpa o intervalo atual se existir
    clearInterval(intervalId);
    // Remove as classes 'active' dos elementos atuais (botão, slide, conteúdo)
    btns[index].classList.remove('active');
    slides[index].classList.remove('active');
    contents[index].classList.remove('active');
    // Atualiza o índice para o novo slide (newIndex vem do clique dado nos botoes do slider)
    index = newIndex;
    // Adiciona as classes 'active' ao novo slider (botão, slide, conteúdo)
    btns[index].classList.add('active');
    slides[index].classList.add('active');
    contents[index].classList.add('active');
    // Define um novo intervalo após a interação manual para continuar a mudança automática de slides
    intervalId = setInterval(changeSlideAutomatically, 5000);
};


// Função para mudar o slide automaticamente
const changeSlideAutomatically = () => {
    // Calcula o novo índice para o próximo slide
    const newIndex = (index + 1) % slides.length;
    // Chama a função para mudar o slide com o novo índice
    changeSlide(newIndex);
};
// Inicia o intervalo automático para mudar os slides a cada 3 segundos
intervalId = setInterval(changeSlideAutomatically, 10000);


// Adiciona evento de clique aos botões de navegação
btns.forEach((btn, btnIndex) => {
    // Adiciona um ouvinte de evento de clique para cada botão
    btn.addEventListener('click', () => {
        // Verifica se o botão clicado não é o atual
        if (btnIndex !== index) {
            // Chama a função changeSlide passando o índice do botão clicado
            changeSlide(btnIndex);
        }
    });
});
/* ************** FIM SLIDER VIDEO AUTO E MANUAL *************** */
/* ****************************************************** */