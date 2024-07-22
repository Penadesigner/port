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
  /*WORDPRESS

https://safras.com.br/

https://agenciacma.com.br/

https://www.cma.com.br/

https://irani.com.br/

https://www.restaurabrasil.org.br/

https://www.maiscarnesuina.com.br/

https://cromasolutions.com.br/

https://razoesparaacreditar.com/

https://todaycorp.com.br/

https://4healthalphaville.com.br

https://escolasuperioresn.com.br

https://petworks.com.br

https://brasports.com.br

https://mbaeachusp.com

https://longevitech.com.br

https://www.agenciapalmtree.com/

MAGENTO

https://uselina.com.br

https://www.mapuff.com

WIX

https://www.clinicadvance.com.br/ */
    const menu = [
      {
        id: 1,
        title: "Roberta Faustini",
        category: "Ecommerce",
        price: 15.99,
        img: "img/item-1.jpeg",
        link: "https://agenciapalmtree.com",
        desc: `Ecommerce feito em Woocommerce, integrado com Bling e Jetlog`,
      },
      {
        id: 2,
        title: "Agencia Palmtree",
        category: "Site",
        price: 13.99,
        img: "img/item-2.jpeg",
        link: "https://agenciapalmtree.com",
        desc: `Site para uma agência de marketing, utilizando SEO para captação de leads de forma organica`,
      },
      {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "img/item-3.jpeg",
        link: "https://agenciapalmtree.com",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "img/item-4.jpeg",
        link: "https://agenciapalmtree.com",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "img/item-5.jpeg",
        link: "https://agenciapalmtree.com",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "img/item-6.jpeg",
        link: "https://agenciapalmtree.com",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "img/item-7.jpeg",
        link: "https://agenciapalmtree.com",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      },
      {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "img/item-8.jpeg",
        link: "https://agenciapalmtree.com",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "img/item-9.jpeg",
        link: "https://agenciapalmtree.com",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
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