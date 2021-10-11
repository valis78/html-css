const btn = document.querySelector('.submit')
const form = document.querySelector('form')
const mercie = document.querySelector('.mercie')
const retour = document.querySelector('.return')
const fin = document.querySelector('.fin')

form.addEventListener('submit', (e) => {
    
    e.preventDefault()
    form.style.display = 'none'
    mercie.style.display = 'block'
    fin.style.display = 'flex'

})

retour.addEventListener('click', () => {

    form.style.display = 'block'
    fin.style.display = 'none'

})