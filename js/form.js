$(document).ready(function () {
    $('#sim').on('change', function () {
        if ($(this).val() === 'sim') {
            $("#outros").append(
                '<input type="checkbox" id="facebook" onclick="checkFiltros()" name="facebook">\n' +
                '<label for="facebook">Facebook</label><br>\n' +
                '<input type="checkbox" id="instagram" onclick="checkFiltros()" name="instagram">\n' +
                '<label for="instagram">Instagram</label> <br>\n' +
                '<input type="checkbox" id="twitter" onclick="checkFiltros()" name="twitter">\n' +
                '<label for="twitter">Twitter</label><br>\n' +
                '<input type="checkbox" id="linkedin" onclick="checkFiltros()" name="linkedin">\n' +
                '<label for="linkedin">Linkedin</label><br>');
        }
    });
});

/*

$(function(){
    var operacao = "A"; //"A"=Adição
    var indice_selecionado = -1; //Índice do item selecionado na lista
    var tbCadastro = localStorage.getItem("tbCadastro");// Recupera os dados armazenados
    tbCadastro = JSON.parse(tbCadastro); // Converte string para objeto
    if(tbCadastro == null) // Caso não haja conteúdo, inicia um vetor vazio
    tbCadastro = [];

    function Adicionar(){
        var cadastro = JSON.stringify({
            first-name    : $("#txtfirst-name").val(),
            last-name     : $("#txtlast-name").val(),
            phone         : $("#txtphone").val(),
            meet          : $("#txtmeet").val()
            social        : $("#txtsocial").val()        
        });
        
        tbCadastro.push(cliente);
        localStorage.setItem("tbCadastro", JSON.stringify(tbCadastro));
        alert("Registro adicionado.");
        return true;
    }      

    $("#elo-form").on("submit",function(){
		if(operacao == "A")
			return Adicionar();		
	});
});
 
*/

