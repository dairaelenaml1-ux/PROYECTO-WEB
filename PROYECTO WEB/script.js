const passwordInput = document.getElementById('password');
const toggleButton = document.querySelector('.show-password');

if (passwordInput && toggleButton) {
  toggleButton.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    toggleButton.textContent = isPassword ? 'Ocultar' : 'Mostrar';
  });
}
