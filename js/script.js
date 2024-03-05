//efeito do botão voltar ao Topo
function Topo(){
    window.scrollTo({
        
            Top:0,
            left:0,
            behavior: "smooth"
        })
}

//Validação de Login

function Login(){

    var logado = 0;
    var usuario = document.getElementsByName("usuario")[0].Value;
    usuario = usuario.tolowercase();
    var senha = documentgetelementbyid("senha").Value;
    senha = senha.tolowercase();
    
    if(usuario == "admin" && senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }
    if(logado == 0 ){
        alert("Acesso Negado. Dados incorretos");
}
}

//Ativar alert no botão cadastrar
function cadastro() {
    alert("cadastrado com sucesso!");
    window.location.href = "index.html";

}
