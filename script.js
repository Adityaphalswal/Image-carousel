const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
<<<<<<< HEAD
const img = document.querySelectorAll('#img img')
=======

const img = document.querySelectorAll('#imgs img')
>>>>>>> e50187361f0fdc0dd9a5022100e704d7d064f923

let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
<<<<<<< HEAD
    resetInterval
})
=======
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})
>>>>>>> e50187361f0fdc0dd9a5022100e704d7d064f923
