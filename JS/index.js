let Keys = document.querySelectorAll('.keys');
let SpaceBarKey = document.querySelector('.SpaceBar');
let ShiftLeftKey = document.querySelector('.ShiftLeft');
let ShiftRightKey = document.querySelector('.ShiftRight');
let CapsLockKey = document.querySelector('.CapsLock');
let ToggleCircle = document.querySelector('.toggleCircle');
let NightMode = document.querySelector('.Night-Mode');
let body = document.querySelector('body');
let ColorInput = document.querySelector('.ColorInput');
let TextInput = document.querySelector('.Input');
let KeyBoardBG = document.querySelector('.KeyboardLights');
let ChangeLightColor = document.querySelector('.ChangeLightColor')
let KeyBoard = document.querySelector('keyboard');

for (let i = 0; i < Keys.length; i++) {
    Keys[i].setAttribute('keyname', Keys[i].innerText);
    Keys[i].setAttribute('lowerCaseName', Keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', keypress);
window.addEventListener('keyup', KeyUp);

//Working Keyboard
function keypress(e) {
    for (let i = 0; i < Keys.length; i++) {
        if (e.key == Keys[i].getAttribute('lowerCAseName') || e.key == Keys[i].getAttribute('keyname')) {
            Keys[i].classList.add('active');
        }
        if (e.code == 'Space') {
            SpaceBarKey.classList.add(active);
        }
        if (e.code == 'ShiftRight') {
            ShiftLeftKey.classList.remove('active');
        }
        if (e.code == 'ShiftLeft') {
            ShiftRightKey.classList.remove('active');
        }
        if (e.code == 'CapsLock') {
            CapsLockKey.classList.toggle('active');
        }
    }
}
function KeyUp(e) {
    for (let i = 0; i < Keys.length; i++) {
        if (e.key == Keys[i].getAttribute('lowerCAseName') || e.key == Keys[i].getAttribute('keyname')) {
            Keys[i].classList.remove('active')
            Keys[i].classList.add('remove')

        }
        if (e.code == 'Space') {
            SpaceBarKey.classList.remove('active')
            SpaceBarKey.classList.add('remove')

        }
        if (e.code == 'ShiftLeft') {
            ShiftRightKey.classList.remove('active')
            ShiftRightKey.classList.remove('remove')
        }
        if (e.code == 'ShiftRight') {
            ShiftLeftKey.classList.remove('active')
            ShiftLeftKey.classList.remove('remove')
        }
        setTimeout(() => {
            Keys[i].classList.remove('remove')
        }, 200)
    }
}

//DarkMode
NightMode.addEventListener('click', function () {
    body.classList.toggle('active')
    ToggleCircle.classList.toggle('active')
    NightMode.classList.toggle('active')
    TextInput.classList.toggle('active')
    for (let i = 0; i < Keys.length; i++) {
        Keys[i].classList.toggle('NightKeys')
    }
    KeyBoard.classList.toggle('active')

})
ColorInput.addEventListener('input', function () {
    for (let i = 0; i < Keys.length; i++) {
        Keys[i].style.color = ColorInput.value
    }
    KeyBoardBG.style.background = ColorInput.value
})

//DropDown
let Select = document.querySelector('.Select');
let LightModeUL = document.querySelector('#LightUL');
let Caret = document.querySelector('.Caret');
let Menu = document.querySelector('.Menu');

Select.addEventListener('click', function () {
    Caret.classList.toggle('CaretRotate');

    Menu.classList.toggle('MenuOpen')
})

LightModeUL.addEventListener('click', function (e) {
    let h10 = document.querySelector('#SelectH10')
    if (e.target.id == "RainBowMode") {
        if (KeyBoardBG.classList.contains("Rainbow")) {

        }
        else {
            KeyBoardBG.classList.remove("Pulse", "RainbowPulse")
            KeyBoardBG.classList.toggle('Rainbow')
            KeyBoardBG.style.background = ''
            ColorInput.toggleAttribute('disabled')
        }
    }
    else if (e.target.id == "PulseMode") {
        if (KeyBoardBG.classList.contains("Pulse")) {

        }
        else {
            KeyBoardBG.classList.remove("Rainbow", "RainbowPulse")
            KeyBoardBG.classList.toggle('Pulse')
            ColorInput.removeAttribute('disabled')

        }
    }
    else if (e.target.id == "RainbowPulse") {
        if (KeyBoardBG.classList.contains("RainbowPulse")) {

        }
        else {
            KeyBoardBG.classList.toggle('RainbowPulse')
            ColorInput.toggleAttribute('disabled')
            KeyBoardBG.classList.remove("Rainbow", "Pulse")
        }
    }

    else if (e.target.id == "None") {
        KeyBoardBG.classList.remove("Rainbow", "Pulse", "RainbowPulse")
        ColorInput.toggleAttribute('disabled')

    }
    h10.textContent = e.target.textContent
    Menu.classList.toggle('MenuOpen')
    Caret.classList.toggle('CaretRotate')

})