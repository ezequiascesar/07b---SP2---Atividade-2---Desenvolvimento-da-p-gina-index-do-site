//efeito de esconder formulário de cadastro
$(document).ready(function(){
    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slidetoggle("slow");
        $("#section-Login").slidetoggle("slow");
        $("botao-cadastrar").hide();

    });
    
});