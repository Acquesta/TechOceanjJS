let cadastros = [
    {
        nome: 'Lorenzo',
        telefone: '119774780748',
        email: 'lorenzo@gmail.com',
        senha: '123456',
    }
]

const nome_cadastro = document.querySelector('#nome_cadastro')
const telefone_cadastro = document.querySelector('#telefone_cadastro')
const email_cadastro = document.querySelector('#email_cadastro')
const senha_cadastro = document.querySelector('#senha_cadastro')
const confirmaSenha_cadastro = document.querySelector('#confirmaSenha_cadastro')

const cadastrar = document.querySelector('#cadastrar')
 
const email_login = document.querySelector('#email_login')
const senha_login = document.querySelector('#senha_login')

const logar = document.querySelector('#logar')

cadastrar.addEventListener('click', cadastrarUsuario)

logar.addEventListener('click' , entrarSite)

function cadastrarUsuario(){
    console.log();
    if(senha_cadastro.value === confirmaSenha_cadastro.value && !(verificaUsuario(cadastros ,email_cadastro.value))){
        cadastros.push({
            nome: nome_cadastro,
            telefone: telefone_cadastro,
            email: email_cadastro,
            senha: senha_cadastro
        })
        // console.log(cadastros);
        entrarSite()
    }
    else{
        alert('Senha não confere ou email já cadastrado')
    }
}

function entrarSite(){
    window.location.href= "./dashboard.html"
    alert('Você está logado!')
}

function verificaUsuario(usuarios ,email){
    for(let i = 0; i < usuarios.length; i++){
        // console.log(usuarios[i].email);
        if(usuarios[i].email === email ){
            console.log(email);
            return true
        }
        return false
    }
}
