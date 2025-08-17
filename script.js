document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password-input');
    const submitBtn = document.getElementById('submit-btn');
    const message = document.getElementById('message');
    const passwordSection = document.getElementById('password-section');
    const contentSection = document.getElementById('content-section');
    
    submitBtn.addEventListener('click', function() {
        if (passwordInput.value === '7e2ix') {
            passwordSection.style.display = 'none';
            contentSection.style.display = 'block';
        } else {
            message.textContent = 'Dumbass The Passwors Is. 7e2ix Your Discord User';
            passwordInput.style.borderColor = '#ff6b6b';
            setTimeout(() => {
                passwordInput.style.borderColor = '#ddd';
            }, 1000);
        }
    });
    
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
});
