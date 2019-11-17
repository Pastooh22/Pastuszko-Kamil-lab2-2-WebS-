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
const paBtn = document.querySelector('#allPlayBtn')
const caBtn = document.querySelector('#allClearBtn')
const channel1 = []
const channel2 = []
const channel3 = []
const channel4 = []
let kPress = 0
let channel1StartTime = 0
let channel2StartTime = 0
let channel3StartTime = 0
let channel4StartTime = 0
document.body.addEventListener('keypress', playAudio)
document
    .querySelector('#channel1RecBtn')
    .addEventListener('click', recChannel1)
document
    .querySelector('#channel1PlayBtn')
    .addEventListener('click', playChannel1)
document
    .querySelector('#channel2RecBtn')
    .addEventListener('click', recChannel2)
document
    .querySelector('#channel2PlayBtn')
    .addEventListener('click', playChannel2)
document
    .querySelector('#channel3RecBtn')
    .addEventListener('click', recChannel3)
document
    .querySelector('#channel3PlayBtn')
    .addEventListener('click', playChannel3)
document
    .querySelector('#channel4RecBtn')
    .addEventListener('click', recChannel4)
document
    .querySelector('#channel4PlayBtn')
    .addEventListener('click', playChannel4)
document
    .querySelector('#allPlayBtn')
    .addEventListener('click', playAll)
document
    .querySelector('#allClearBtn')
    .addEventListener('click', clearAll)
function playAll() {
    channel1.forEach(el => { 
        setTimeout(playSound, el.time, el.code)
    })
    channel2.forEach(el => { 
        setTimeout(playSound, el.time, el.code)
    })
    channel3.forEach(el => { 
        setTimeout(playSound, el.time, el.code)
    })
    channel4.forEach(el => { 
        setTimeout(playSound, el.time, el.code)
    })
}
function clearAll(){
    channel1.length = 0 
    channel2.length = 0
    channel3.length = 0
    channel4.length = 0
    kpress = 0
}
function recChannel1() {
    channel1StartTime = Date.now()
    kPress = 1
}
function recChannel2() {
    channel2StartTime = Date.now()
    kPress = 2
}
function recChannel3() {
    channel3StartTime = Date.now()
    kPress = 3
}
function recChannel4() {
    channel4StartTime = Date.now()
    kPress = 4
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
if (kPress == 1) {
    const time = Date.now() - channel1StartTime
        channel1.push({
            code: e.code,
            time: time
            })
}
if (kPress == 2) {
    const time = Date.now() - channel2StartTime
        channel2.push({
            code: e.code,
            time: time
            })
}
if (kPress == 3) {
    const time = Date.now() - channel3StartTime
        channel3.push({
            code: e.code,
            time: time
            })
}
if (kPress == 4) {
    const time = Date.now() - channel4StartTime
        channel4.push({
            code: e.code,
            time: time
            })
}
}
