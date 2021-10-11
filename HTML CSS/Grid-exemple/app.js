const container = document.querySelector('.container')
let tabImg = ['./csharp.jpg', './nature.jpeg', './javascript.png', './shaco.jpg', './python.png']

let tabImgCopie = tabImg.slice(0)

let random = Math.floor(Math.random() * tabImg.length)

let newTab = []

for (let i = 0; i < tabImg.length; i++){

    let test = tabImg.splice(random, 1)

    console.log(test)

}