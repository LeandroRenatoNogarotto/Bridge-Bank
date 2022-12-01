const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
    mobile-nav.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});

    
var $range = document.querySelector('input'),
$value = document.querySelector('span');

    $range.addEventListener('input', function() {
    $value.textContent = this.value;
    });

function leCpf(){
    
	let cpf = document.getElementById("cpf")
	let cpfValue = cpf.value
	var cpfArr = cpfValue.split('')
	let soma = 0;
	var texto = '';
	var cpfValido = true;

	for(let i = 0; i < 9 ; i++){
		soma += cpfArr[i] *  (10 - i);
		   
		let  resto = soma%11
		if(resto < 2){
			let decimoDigito = 0;
		} else {
			decimoDigito = 11 - resto;
		}
	}
	
	if (decimoDigito != cpfArr[9]){
	
		cpfValido = false;
	}
	
	let soma2 = 0;
	for(let i = 0; i < 10; i++){
		soma2 += cpfArr[i] * (11 - i);
	}
	let resto2 = soma2%11
	if(resto2 < 2){
		decimoPrimeiroDigito = 0;
	}else {
		decimoPrimeiroDigito = 11 - resto2;
	}
	
	if (decimoPrimeiroDigito != cpfArr[10]){
		cpfValido = false;
	}
	
		
	if (cpfValido == true)
	{
		mensagem("CPF Valido!");

	} else {
		mensagem("CPF Inválido!");
	}
}
	   
	function mensagem (msg){
		texto = document.getElementById("comment")
		texto.value = msg;
		
	}


function simular()
{
	var valor= window.document.getElementById('valorEmprestimo')
	var parcelas= window.document.getElementById('parcelas')
	var res= window.document.getElementById('res')

	let total=(valor*1.10*parcelas)
	res.innerHTML = total
}


function extrato()
{
	let res = window.document.getElementById('res')
	res.innerHtml =`Sem historico`
}

/*
function test (){
	try {
		console.log("");
	} catch (error) {
		console.log("");
		console.assert();
	}
}
function assert(isTrue){
	if(!isTrue){
		throw new Error();
	}
}	

function rodar_testes(){

	test('CPF CORRETO',() =>{
			assert(leCpf('38880235303'));
	});

	test('CPF FALHAR',() =>{
        assert(leCpf('1'));
    });

	test('CPF FALHAR',() =>{
        assert(leCpf('100000000000'));
    });

	test('CPF FALHAR',() =>{
        assert(leCpf('1902'));
    });

	test('CPF CORRETO',() =>{
        assert(leCpf('33851169379'));
    });

}
*/