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
intervalId = setInterval(changeSlideAutomatically, 5000);


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
    let position = element.offsetTop - 70;

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



/******************************************************** */
/************** EXIBIR EMPREGO *************** */
const empregosDiv = document.querySelector('.empregos')
    const botoes = document.querySelectorAll('.tab-btn')
    const conteudo = document.querySelectorAll('.content-jobs')

    empregosDiv.addEventListener("click",(e)=>{
        //captura qual elemento dentro do Article foi clicado
        const id = e.target.dataset.id;
        // se clicado em um algo que contenha um data-id, faz:
        if(id){
            //remover classe de todos botoes
            botoes.forEach(btn => {
                btn.classList.remove('active')
                // adiciona classe ao botao clicado
                e.target.classList.add('active')
            });
            //remover conteudos na tela
            conteudo.forEach(artigo => {
                artigo.classList.remove('active')
            })
            // busca o objeto que tenha o ID conforme o que fo recebido
            const elemento = document.getElementById(id).classList.add('active')
        }
    })
    /**************   FIM EXIBIR EMPREGO    *************** */
    /******************************************************** */



    /******************************************************** */
  /**************   SITES FEITOS   *************** */

    const menu = [
      {
        id: 1,
        title: "Roberta Faustini",
        category: "Ecommerce",
        price: 15.99,
        img: "https://robertasafaustini.com.br/wp-content/uploads/2022/04/LOGO_robertasafaustini_capa-1-scaled-1.jpg",
        link: "https://robertasafaustini.com.br/shop/",
        desc: `Criado em Wordpress, esta loja faz a venda de semi joias.`,
      },
      {
        id: 2,
        title: "Agencia Palmtree",
        category: "Site",
        price: 13.99,
        img: "https://www.agenciapalmtree.com/wp-content/uploads/2024/04/logo-palm-branco.webp",
        link: "https://agenciapalmtree.com",
        desc: `Criado em wordpress, para uma agência de marketing, com foco em SEO, para captar leads.`,
      },
      {
        id: 3,
        title: "Longevitech",
        category: "Ecommerce",
        price: 6.99,
        img: "https://longevitech.com.br/wp-content/uploads/2023/06/Logotipo-Degrade-1400x248.png",
        link: "https://longevitech.com.br",
        desc: `Criado em Wordpress, especializado em produtos inteligentes para uma vida melhor com soluções inovadoras em Tecnologia Assistiva que ampliem a independência do indivíduo.`,
      },
      {
        id: 4,
        title: "MBA EACH USP",
        category: "Site",
        price: 20.99,
        img: "https://mbaeachusp.com/wp-content/uploads/2022/09/Logo-Completo-Branco.png",
        link: "https://mbaeachusp.com",
        desc: `Site criado em wordpress, para captura de leads interessadas em cursos MBA.`,
      },
      {
        id: 5,
        title: "BRA Sports",
        category: "Site",
        price: 22.99,
        img: "https://brasports.com.br/wp-content/uploads/2019/07/bra-400.png",
        link: "https://brasports.com.br",
        desc: `Criado em wordpress, este site tem como principal objetivo, o agendamento de quadras esportivas.`,
      },
      {
        id: 6,
        title: "Petworks",
        category: "Ecommerce",
        price: 18.99,
        img: "https://petworks.com.br/wp-content/uploads/2022/08/pet-works-branco-marrom-1024x601.png",
        link: "https://petworks.com.br/",
        desc: `Criado em Wordpress, este site tem como principal, a divulgação dos produtos para pets, lançados pela empresa Petworks.`, 
      },
      {
        id: 7,
        title: "Escola Superior Contabil Fiscal e RH",
        category: "Ecommerce",
        price: 8.99,
        img: "https://escolasuperioresn.com.br/wp-content/uploads/2023/09/logo-site.png",
        link: "https://escolasuperioresn.com.br",
        desc: `Criado em wordpress, este ecommerce faz vendas de cursos para as areas contábil, fiscal e RH.`,
      },
      {
        id: 8,
        title: "4 Health Alphaville",
        category: "Site",
        price: 12.99,
        img: "https://4healthalphaville.com.br/wp-content/uploads/2024/03/Logo-4Health-qiquedk1fjzmybpb671hp39wxbpbojp50797l74kbg.webp",
        link: "https://4healthalphaville.com.br",
        desc: `Criado em Wordpress, com a meta de divulgar os serviços prestados na clinica.`,
      },
      {
        id: 9,
        title: "Today Corp",
        category: "Site",
        price: 16.99,
        img: "https://www.todaycorp.com.br/wp-content/uploads/2023/04/TodayCorp-Logo-brancoamarelo-1024x573.png",
        link: "https://todaycorp.com.br/",
        desc: `Criado em Wordpress, para dilvulgar a marca e os produtos prestados por esta empresa de Eventos.`,
      },
      {
        id: 10,
        title: "Mais Carne Suína",
        category: "Ecommerce",
        price: 16.99,
        img: "https://maiscarnesuina.com.br/wp-content/themes/abcs-carne-suina/img/escolha-mais-logo.png",
        link: "https://www.maiscarnesuina.com.br/",
        desc: `Criado em wordpress, a meta era aumentar o numero de vendas, tanto pessoas fisicas quanto juridica.`,
      },
      {
        id: 11,
        title: "Restaura Brasil",
        category: "Site",
        price: 16.99,
        img: "https://www.tnc.org.br/content/dam/tnc/nature/en/logos/tnc-logo-primary-registered-dark-text.svg",
        link: "https://www.restaurabrasil.org.br/",
        desc: `Criado em wordpress, a TNC trabalha com restauração florestal no Brasil desde 2001.`,
      },
      {
        id: 12,
        title: "Celulose Irani",
        category: "Site",
        price: 16.99,
        img: "https://irani.com.br/wp-content/themes/irani.institucional.theme/imgs/logo_irani_papel_e_embalagem.png",
        link: "https://irani.com.br/",
        desc: `Criado em wordpress, o objetivo principal era trazer novos distribuidores e empresas interessadas nos produtos da IRANI.`,
      },
      {
        id: 13,
        title: "CMA Mercados",
        category: "Site",
        price: 16.99,
        img: "https://www.cma.com.br/wp-content/uploads/2024/01/logo-cma.png",
        link: "https://www.cma.com.br/",
        desc: `Criado em wordpress, para divulgar os serviços que a empresa atende.`,
      },
      {
        id: 14,
        title: "Agência CMA",
        category: "Ecommerce",
        price: 16.99,
        img: "https://www.agenciacma.com.br/wp-content/uploads/2024/05/logo-safras-news.png",
        link: "https://agenciacma.com.br/",
        desc: `Criado em wordpress, a Agência CMA atua tanto como agência de noticias, quanto como uma loja virtual.`,
      },
      {
        id: 15,
        title: "Safras & Mercado",
        category: "Ecommerce",
        price: 16.99,
        img: "https://www.cma.com.br/wp-content/uploads/2024/01/logo-safras-fonte-branca.png",
        link: "https://safras.com.br/",
        desc: `Criado em wordpress, Safras & Mercado atua tanto como agência de noticias, quanto como uma loja virtual.`,
      },
      {
        id: 15,
        title: "Clinica Advance",
        category: "Site",
        price: 16.99,
        img: "https://static.wixstatic.com/media/acf9b5_da98c99cf5f44ba4a523a58e39fbbd3f~mv2.png/v1/fill/w_138,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/clinic-advance-pt-01%20(1).png",
        link: "https://www.clinicadvance.com.br/",
        desc: `Criado em Wix, com o objetivo de divulgar a clinica e os produtos disponiveis para agendamento.`,
      },
    ];
      // get parent element
    const sectionCenter = document.querySelector(".section-center");
    const btnContainer = document.querySelector(".btn-sites");
    const filterBtns = document.querySelectorAll(".sites-filter-btn");
    // display all items when page loads
    window.addEventListener("DOMContentLoaded", function () {
      diplayMenuItems(menu);
    });
  
    function diplayMenuItems(menuItems) {
      let displayMenu = menuItems.map(function (item) {
        console.log('item' + item);
        return `<article class="menu-item">
              <img src=${item.img} alt=${item.title} class="photo" />
              <div class="sites-item-info">
                <div class="site-item-titulo">
                  <h4>${item.title}</h4>
                </div>
                <div class="site-item-texto">
                <p class="sites-item-text">
                  ${item.desc}
                </p>
                <button class="site-item-btn"><a href="${item.link}">Ver Site</a></button>
                <div>
              </div>
            </article>`;
      });
      displayMenu = displayMenu.join("");
      console.log('item' + displayMenu);
      sectionCenter.innerHTML = displayMenu;
    }
  
  
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
  
        const menuCategory = menu.filter(function (menuItem) {
          console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
  
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
      /**************   SITES FEITOS   *************** */
      /************************************************ */