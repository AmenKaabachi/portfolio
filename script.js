// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const modeSwitch = document.querySelector('.mode-switch');
    
    modeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
});
