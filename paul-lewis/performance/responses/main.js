let coloredBox = document.querySelector('div.colored-box');

coloredBox.addEventListener('click', (e) => {
    let delayMs = document.querySelector('select').selectedOptions[0].innerText;
    setTimeout(function() {
        coloredBox.classList.add('changed');
        setTimeout(function() {
            coloredBox.classList.remove('changed');
        }, 1000)
    }, delayMs)
})