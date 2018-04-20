function formatamascara(campopassado,mascara) {
    var campo  = campopassado.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(campo);

    if(texto.substring(0,1)!= saida) {
   		campopassado.value +=texto.substring(0,1);
    }
}

function Cadastro(form) {

	nome = form.nome.value;
	datanasc = form.datanasc.value;
	cpf = form.cpf.value;
	rg = form.rg.value;
	sexo = form.opsexo.value;
	telefone = form.telefone.value; 
	telemergencia = form.telemergencia.value;
	nomeemergencia = form.nomeemergencia.value;
	codval1 = "RCBO3P";

	if (form.senha1.value != form.senha2.value) {
		alert("Senha Invalida");
		form.senha1.focus();
		return false;
	}
	
	if (form.email1.value != form.email2.value ) {
		alert("Email Invalido");
		form.email1.focus();
		return false;
	} 
	
	if ( form.codval.value != codval1) {
		alert("Código de Validação Invalido");
		form.codval.focus();
		return false;
	} 
	
	alert("Cadastro Realizado com Sucesso");
	window.location.href = 'https://fdolzanes1.github.io/AppForm/';
	return true; 

}


