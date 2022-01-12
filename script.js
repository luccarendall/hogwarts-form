const btnLogin = document.getElementById('btn-login');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
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

confirmaAcordo.addEventListener('click', ativaEnvioFormulario);
