let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTelefone')
let validTelefone = false

let cep = document.querySelector('#cep')
let labelCep = document.querySelector('#labelCep')
let validCep = false

let logradouro = document.querySelector('#logradouro')
let labelLogradouro = document.querySelector('#labelLogradouro')
let validLogradouro = false

let estado = document.querySelector('#estado')
let labelEstado = document.querySelector('#labelEstado')
let validEstado = false

let numero = document.querySelector('#numero')
let labelNumero = document.querySelector('#labelNumero')
let validNumero = false

let complemento = document.querySelector('#complemento')
let labelComplemento = document.querySelector('#labelComplemento')
let validComplemento = false

let bairro = document.querySelector('#bairro')
let labelBairro = document.querySelector('#labelBairro')
let validBairro = false

let cidade = document.querySelector('#cidade')
let labelCidade = document.querySelector('#labelCidade')
let validCidade = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

email.addEventListener('keyup', () => {
  if(email.value.length <= 11){
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = 'Email *Insira no mínimo 12 caracteres'
    email.setAttribute('style', 'border-color: red')
    validEmail = false
  } else {
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML = 'Email'
    email.setAttribute('style', 'border-color: green')
    validEmail = true
  }
})

telefone.addEventListener('keyup', () => {
  if(telefone.value.length <= 10){
    labelTelefone.setAttribute('style', 'color: red')
    labelTelefone.innerHTML = 'Telefone *Insira no mínimo 11 caracteres'
    telefone.setAttribute('style', 'border-color: red')
    validTelefone = false
  } else {
    labelTelefone.setAttribute('style', 'color: green')
    labelTelefone.innerHTML = 'Telefone'
    telefone.setAttribute('style', 'border-color: green')
    validTelefone = true
  }
})

cep.addEventListener('keyup', () => {
  if(cep.value.length <= 7){
    labelCep.setAttribute('style', 'color: red')
    labelCep.innerHTML = 'Cep *Insira no mínimo 8 caracteres'
    cep.setAttribute('style', 'border-color: red')
    validCep = false
  } else {
    labelCep.setAttribute('style', 'color: green')
    labelCep.innerHTML = 'Cep'
    cep.setAttribute('style', 'border-color: green')
    validCep = true
  }
})

logradouro.addEventListener('keyup', () => {
  if(logradouro.value.length <= 1){
    labelLogradouro.setAttribute('style', 'color: red')
    labelLogradouro.innerHTML = 'Logradouro *Insira no mínimo 2 caracteres'
    logradouro.setAttribute('style', 'border-color: red')
    validLogradouro = false
  } else {
    labelLogradouro.setAttribute('style', 'color: green')
    labelLogradouro.innerHTML = 'Logradouro'
    logradouro.setAttribute('style', 'border-color: green')
    validLogradouro = true
  }
})

estado.addEventListener('keyup', () => {
  if(estado.value.length <= 1){
    labelEstado.setAttribute('style', 'color: red')
    labelEstado.innerHTML = 'Estado *Insira no mínimo 2 caracteres'
    estado.setAttribute('style', 'border-color: red')
    validEstado = false
  } else {
    labelEstado.setAttribute('style', 'color: green')
    labelEstado.innerHTML = 'Estado'
    estado.setAttribute('style', 'border-color: green')
    validEstado = true
  }
})

numero.addEventListener('keyup', () => {
  if(numero.value.length <= 1){
    labelNumero.setAttribute('style', 'color: red')
    labelNumero.innerHTML = 'Número *Insira no mínimo 2 caracteres'
    numero.setAttribute('style', 'border-color: red')
    validNumero = false
  } else {
    labelNumero.setAttribute('style', 'color: green')
    labelNumero.innerHTML = 'Número'
    numero.setAttribute('style', 'border-color: green')
    validNumero = true
  }
})

complemento.addEventListener('keyup', () => {
  if (complemento.value.length > 0) {
    labelComplemento.setAttribute('style', 'color: green');
    labelComplemento.innerHTML = 'Complemento';
    complemento.setAttribute('style', 'border-color: green');
    validComplemento = true;
  } else {
    labelComplemento.setAttribute('style', 'color: black');
    labelComplemento.innerHTML = 'Complemento';
    complemento.setAttribute('style', 'border-color: black');
    validComplemento = true; // Define como verdadeiro para considerar o campo opcional
  }
})

bairro.addEventListener('keyup', () => {
  if(bairro.value.length <= 1){
    labelBairro.setAttribute('style', 'color: red')
    labelBairro.innerHTML = 'Bairro *Insira no mínimo 2 caracteres'
    bairro.setAttribute('style', 'border-color: red')
    validBairro = false
  } else {
    labelBairro.setAttribute('style', 'color: green')
    labelBairro.innerHTML = 'Bairro'
    bairro.setAttribute('style', 'border-color: green')
    validBairro = true
  }
})

cidade.addEventListener('keyup', () => {
  if(cidade.value.length <= 1){
    labelCidade.setAttribute('style', 'color: red')
    labelCidade.innerHTML = 'Cidade *Insira no mínimo 2 caracteres'
    cidade.setAttribute('style', 'border-color: red')
    validCidade = false
  } else {
    labelCidade.setAttribute('style', 'color: green')
    labelCidade.innerHTML = 'Cidade'
    cidade.setAttribute('style', 'border-color: green')
    validCidade = true
  }
})

function validarCampo(inputElement, labelElement, minLength) {
  if (inputElement.value.length >= minLength) {
    labelElement.setAttribute('style', 'color: green');
    labelElement.innerHTML = labelElement.getAttribute('data-label');
    inputElement.setAttribute('style', 'border-color: green');
    return true;
  } else {
    labelElement.setAttribute('style', 'color: red');
    labelElement.innerHTML = `${labelElement.getAttribute('data-label')} *Insira no mínimo ${minLength} caracteres`;
    inputElement.setAttribute('style', 'border-color: red');
    return false;
  }
}

complemento.addEventListener('keyup', () => {
  validComplemento = validarCampo(complemento, labelComplemento, 0);
});

// Você pode usar a função validarCampo para outras validações também, como nome, usuário, senha, etc.


function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(sessionStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value,
      emailCad: email.value,
      telefoneCad: telefone.value,
      cepCad: cep.value,
      logradouroCad: logradouro.value,
      estadoCad: estado.value,
      numeroCad: numero.value,
      complementoCad: complemento.value,
      bairroCad: bairro.value,
      cidadeCad: cidade.value
    }
    )
    
    sessionStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = '../html/signin.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})

function buscarEndereco() {
  const cep = document.getElementById('cep').value;
  if (cep) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
          if (!data.erro) {
              document.getElementById('logradouro').value = data.logradouro;
              document.getElementById('bairro').value = data.bairro;
              document.getElementById('cidade').value = data.localidade;
              document.getElementById('estado').value = data.uf;
          } else {
              alert('CEP não encontrado. Verifique o CEP digitado.');
          }
      })
      .catch(error => console.error(error));
  }
}




  
  
