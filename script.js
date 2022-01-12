const btnLogin = document.getElementById('btn-login');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const textArea = document.getElementById('textarea');
const contador = document.getElementById('counter');
const btnEnviar = document.getElementById('submit-btn');
const confirmaAcordo = document.getElementById('agreement');

email.addEventListener('input', () => {
  console.log('um');
});

senha.addEventListener('input', () => {
  console.log('dois');
});

function verificaEmail() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', () => {
  console.log('tres');

  verificaEmail();
});

btnEnviar.disabled = true;

function ativaEnvioFormulario() {
  if (confirmaAcordo.checked) {
    btnEnviar.disabled = false;
    btnEnviar.classList.add('colorBtn');
    btnEnviar.classList.remove('btnDisabled');
  } else {
    btnEnviar.disabled = true;
    btnEnviar.classList.remove('colorBtn');
    btnEnviar.classList.add('btnDisabled');
  }
}

function atualizaContador() {
  const texto = textArea.value;
  contador.innerHTML = 500 - +texto.length;
}

confirmaAcordo.addEventListener('click', ativaEnvioFormulario);
textArea.addEventListener('input', atualizaContador);
