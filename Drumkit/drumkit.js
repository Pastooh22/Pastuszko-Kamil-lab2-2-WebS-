const clapSound = document.querySelector('#clap')
const boomSound = document.querySelector('#boom')
const hihatSound = document.querySelector('#hihat')
const kickSound = document.querySelector('#kick')
const ch1RecBtn = document.querySelector('#channel1RecBtn')
const ch1PlayBtn = document.querySelector('#channel1PlayBtn')
const ch2RecBtn = document.querySelector('#channel2RecBtn')
const ch2PlayBtn = document.querySelector('#channel2PlayBtn')
const ch3RecBtn = document.querySelector('#channel3RecBtn')
const ch3PlayBtn = document.querySelector('#channel3PlayBtn')
const ch4RecBtn = document.querySelector('#channel4RecBtn')
const ch4PlayBtn = document.querySelector('#channel4PlayBtn')
const channel1 = []
let channel1StartTime = 0
document.body.addEventListener('keypress', playAudio)
document
    .querySelector('#channel1RecBtn')
    .addEventListener('click', recChannel1)
document
    .querySelector('#channel1PlayBtn')
    .addEventListener('click', playChannel1)
document
    .querySelector('#channel2RecBtn')
    .addEventListener('click', recChannel1)
document
    .querySelector('#channel2PlayBtn')
    .addEventListener('click', playChannel1)
document
    .querySelector('#channel3RecBtn')
    .addEventListener('click', recChannel1)
document
    .querySelector('#channel3PlayBtn')
    .addEventListener('click', playChannel1)
document
    .querySelector('#channel4RecBtn')
    .addEventListener('click', recChannel1)
document
    .querySelector('#channel4PlayBtn')
    .addEventListener('click', playChannel1)

function recChannel1() {
    channel1StartTime = Date.now()
}
function recChannel2() {
    channel2StartTime = Date.now()
}
function recChannel3() {
    channel3StartTime = Date.now()
}
function recChannel4() {
    channel4StartTime = Date.now()
}
function playChannel1() {
    channel1.forEach(el => { 
        setTimeout(playSound, el.time, el.code)
    })
}
function playChannel2() {
    channel2.forEach(el => { 
        setTimeout(playSound, el.time, el.code)
    })
}
function playChannel3() {
    channel3.forEach(el => { 
        setTimeout(playSound, el.time, el.code)
    })
}
function playChannel4() {
    channel4.forEach(el => { 
        setTimeout(playSound, el.time, el.code)
    })
}
function playSound(code) {
    switch (code) {
        case 'KeyA':
            clapSound.currentTime = 0
            clapSound.play()
            break
        case 'KeyS':
            boomSound.currentTime = 0
            boomSound.play()
            break
        case 'KeyD':
            hihatSound.currentTime = 0
            hihatSound.play()
            break
        case 'KeyF':
            kickSound.currentTime = 0
            kickSound.play()
            break
    }
}
function playAudio(e) {
    playSound(e.code)
    const time = Date.now() - channel1StartTime
    channel1.push({
        code: e.code,
        time: time
    })
}