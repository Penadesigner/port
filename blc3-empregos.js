



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