const sobre = document.querySelector("#about");
const formulario = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub() {
    try{

        const dadosPerfil = await fetch(`https://api.github.com/users/viniciusoliveira-27`);
        const perfil = await dadosPerfil.json();

        let conteudo = `
        <!-- imagem da seção Sobre -->

        <img src="${perfil.avatar_url}" alt="Foto perfil do Github - ${perfil.name}">
            <article id="about_texto" class="flex about_content">
                <h1>Sobre mim</h1>
                <p>Sou formado em Análise e Desenvolvimento de Sistemas e estou no processo de transição de carreira, saindo da usinagem para tecnologia. Trabalhei anos como programador CNC, onde desenvolvi conceitos importantes para a área de Back-end.

                    Tenho conhecimento em Java, Spring Boot, Typescript , Javascript, NestJs e React. Atualmente, trabalho como Freelancer, desenvolvendo projetos com essas tecnologias.</p>


                <div id="about_github" class="github_info">
                    <a href="${perfil.html_url}" target="_blank" class="botao">Github</a>
                    <p>${perfil.followers} Seguidores</p>
                    <p> ${perfil.public_repos} Repositórios</p>
                </div>
            </article>      
        
        `;
        sobre.innerHTML += conteudo;


    }catch(error){
        console.error(error)
    }
}

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    //validando o campo Nome do Formulario

    const campoNome = document.querySelector("#nome");
    const txtNome = document.querySelector("#txtNome");

    if(campoNome.value.length < 3){
        txtNome.innerHTML = "O nome deve ter no Minimo 3 caracteres"
        campoNome.focus(); //coloca o cursor no campo nome
        return;
    }else {
        txtNome.innerHTML = "";
    }

    //validando o campo do email do Formulario

    const campoEmail = document.querySelector("#email");
    const txtEmail = document.querySelector("#txtEmail");

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = "Digite um e-mail valido."
        campoEmail.focus(); //coloca o cursor no campo email
        return;
    }else {
        txtEmail.innerHTML = "";
    }

    //validando o campo Assunto do Formulario

    const campoAssunto = document.querySelector("#assunto");
    const txtAssunto = document.querySelector("#txtAssunto");

    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = "O nome deve ter no Minimo 3 caracteres"
        campoAssunto.focus(); //coloca o cursor no campo nome
        return;
    }else {
        txtAssunto.innerHTML = "";
    }

    formulario.submit();

});

getApiGithub();