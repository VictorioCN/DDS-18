function logar(){
    var login = document.getElementById('inputUsuario').value 
    var senha = document.getElementById('inputSenha').value

    if (login == "admin" && senha == "admin"){
        location.href = "home.html"
        alert('login realizado com sucesso!')
    }
    else
    alert('usuario ou senah incorretos')
}

function cadastrar(){
    var usuario = document.getElementById('inputUsuarioNovo').value
    var email = document.getElementById('inputEmailNovo').value
    var senha = document.getElementById('inputSenhaNova').value
    var senhaConfirmar = document.getElementById('inputSenhaConfirme').value

    var emailCerto = emailValido(email)

    if(emailCerto){
        if(senha === senhaConfirmar){
            location.href("index.html")
            alert("Ola usuarios" + usuario + ", seja bem vindo !")
        }
        else{
            alert("as senhas não coincidem")
        }
    }
    else{
        alert("este email não é valido")
    }
}

function emailValido(email){
    return email.includes('@')
}