/******************************************************** */
/************** MENU FIXO *************** */
const navbar = document.getElementById("nav");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  // nao usei a opção de capturar o tamanho do menu const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > 500) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});
/************** FIM MENU FIXO *************** */
/******************************************************** */

/******************************************************** */
/************** SCROLL SMOTH  *************** */
const linksContainer = document.querySelector(".navigation-items");
const scrollLinks = document.querySelectorAll(".scroll-link");

// Adiciona um event click para cada link do menu
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Previne o comportamento padrão do clique no link (navegar ao destino)
    e.preventDefault();
    // Obtém o ID do elemento alvo a partir do atributo "href" do link clicado (slice tira o #)
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    
    // Obtém a altura da barra de navegação (altura do header sempre igual)
    const navHeight = navbar.getBoundingClientRect().height;

    // Verifica se a navegação está fixa (FALSE OU TRUE)
    const fixedNav = navbar.classList.contains("fixed-nav");

    // Calcula a posição do elemento alvo (altura dele referente a pagina)
    let position = element.offsetTop - 60;

    // Ajusta a posição se a navegação não estiver fixa
    if (!fixedNav) {
      position = position - navHeight;
    }

    // Rola suavemente a página para a posição calculada
    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
  });
});
/************** FIM SCROLL SMOTH *************** */
/******************************************************** */