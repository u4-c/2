document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password-input');
    const submitBtn = document.getElementById('submit-btn');
    const message = document.getElementById('message');
    const passwordSection = document.getElementById('password-section');
    const contentSection = document.getElementById('content-section');
    const body = document.body;
    
    const CORRECT_PASSWORD = '7e2ix';
    let attempts = 0;
    const MAX_ATTEMPTS = 3;
    
    submitBtn.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') checkPassword();
    });
    
    function checkPassword() {
        if (passwordInput.value === CORRECT_PASSWORD) {
            body.classList.add('unlocked');
            
            const colors = ['#ffffff', '#bc13fe', '#00ffff', '#ff00ff'];
            let i = 0;
            const colorChange = setInterval(() => {
                document.querySelectorAll('.unlocked-text').forEach(text => {
                    text.style.color = colors[i % colors.length];
                });
                i++;
                if (i > 10) clearInterval(colorChange);
            }, 200);
            
        } else {
            attempts++;
            message.textContent = `Incorrect! ${MAX_ATTEMPTS - attempts} attempts left, DumbAss The Password Is Your Discord Username`;
            passwordInput.style.borderColor = '#ff0000';
            passwordInput.style.animation = 'shake 0.5s';
            
            setTimeout(() => {
                passwordInput.style.borderColor = '#bc13fe';
                passwordInput.style.animation = '';
            }, 500);
            
            if (attempts >= MAX_ATTEMPTS) {
                submitBtn.disabled = true;
                message.textContent = 'Too many attempts! Try again later.';
                setTimeout(() => {
                    passwordInput.value = '';
                    submitBtn.disabled = false;
                    attempts = 0;
                    message.textContent = '';
                }, 10000);
            }
        }
    }
});
