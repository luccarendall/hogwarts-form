const btnLogin = document.getElementById('btn-login');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

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
