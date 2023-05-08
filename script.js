const form = document.querySelector('#subscription-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const interestInput = document.querySelector('#interest');
const messageDiv = document.querySelector('#mensagem');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!nameInput.value || !emailInput.value || !phoneInput.value || !interestInput.value) {
        messageDiv.textContent = 'Por favor, preencha todos os campos.';
        messageDiv.classList.add('error');
        return;
    }

    messageDiv.textContent = 'Muito obrigado pela preferência!';
    messageDiv.classList.remove('error');
    messageDiv.classList.add('success');
});
