//Script for light mode dark mode toogle

const themeBtn = document.querySelector('.theme');
const themeStyle = document.getElementById('theme-style');
const themeStyleDark = document.getElementById('theme-style-dark');
const icon = document.getElementById('mode-icon');
const onAudio = document.getElementById('onAudio');
const offAudio = document.getElementById('offAudio');

themeBtn.addEventListener('click', () => {

    if (icon.src.includes('moon.svg')) {
        icon.src = 'sun.svg'; // Change to sun icon
        onAudio.play(); //Will play the switch on audio
    } else {
        icon.src = 'moon.svg'; // Change to moon icon
        offAudio.play(); //Will play the switch off audio
    }
    themeStyle.disabled = !themeStyle.disabled;
    themeStyleDark.disabled = !themeStyleDark.disabled;

    /*
    themeStyle.disabled = !themeStyle.disabled;
    
    This line toggles the disabled property of the themeStyle CSS stylesheet.
    If themeStyle.disabled is true, it sets it to false, enabling the stylesheet.
    If themeStyle.disabled is false, it sets it to true, disabling the stylesheet.

    themeStyleDark.disabled = !themeStyleDark.disabled;:
    
    This line toggles the disabled property of the themeStyleDark CSS stylesheet.
    Similar to the first line, it changes the state of the disabled property opposite to its current state.
    */
});