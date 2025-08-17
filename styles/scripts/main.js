document.addEventListener('DOMContentLoaded', function() {
    const titles = ["1o4q DarkSide", "NoT WeLcOmEd", "Terminal_Access"];
    let currentTitle = 0;
    
    setInterval(() => {
        document.querySelector('.glitch').dataset.text = titles[currentTitle];
        currentTitle = (currentTitle + 1) % titles.length;
    }, 3000);
});
