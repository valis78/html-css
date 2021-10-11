const horloge = document.querySelector('.horloge')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const img = document.querySelector('.img')

// Horloge

window.addEventListener('load', () => {

    let interval = setInterval('chargerHeure()', 1000)

    

})

function chargerHeure()  {

    const date = new Date()

    const heure = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    horloge.innerHTML = `${heure}:${minute}:${second}`
    
} 

// Animation

start.addEventListener('click', () => {

    

})