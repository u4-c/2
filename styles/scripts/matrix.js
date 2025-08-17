document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const chars = '01q4tqs0rhm104q';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#4af626';
        ctx.font = `${fontSize}px monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
            
            ctx.fillStyle = 'rgba(74, 246, 38, 0.1)';
            ctx.fillRect(i * fontSize, drops[i] * fontSize - fontSize * 3, fontSize, fontSize * 3);
            ctx.fillStyle = '#4af626';
        }
    }
    
    setInterval(draw, 33);
});
