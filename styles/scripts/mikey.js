document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password-input');
    const submitBtn = document.getElementById('submit-btn');
    const message = document.getElementById('message');
    const passwordSection = document.getElementById('password-section');
    const contentSection = document.getElementById('content-section');
    
    const CORRECT_PASSWORD = '7e2ix';
    let attempts = 0;
    const MAX_ATTEMPTS = 3;
    
    submitBtn.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') checkPassword();
    });
    
    function checkPassword() {
        if (passwordInput.value === CORRECT_PASSWORD) {
            passwordSection.style.display = 'none';
            contentSection.style.display = 'block';
            document.body.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a0033 100%)';
        } else {
            attempts++;
            message.textContent = `Incorrect password! ${MAX_ATTEMPTS - attempts} attempts remaining. DumbAss The Password Is Your Discord Username`;
            passwordInput.style.borderColor = '#ff0000';
            passwordInput.style.animation = 'shake 0.5s';
            
            setTimeout(() => {
                passwordInput.style.borderColor = '#bc13fe';
                passwordInput.style.animation = '';
            }, 500);
            
            if (attempts >= MAX_ATTEMPTS) {
                submitBtn.disabled = true;
                message.textContent = 'Maximum attempts reached. Try again later.';
                setTimeout(() => {
                    passwordInput.value = '';
                    submitBtn.disabled = false;
                    attempts = 0;
                    message.textContent = '';
                }, 30000); // 30 second lockout
            }
        }
    }
});
