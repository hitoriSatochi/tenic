const oneBox = document.querySelector('.onecarusel')
const twoBox = document.querySelector('.Twocarusel')
const butright = document.querySelector('.butright')
const butleft = document.querySelector('.butleft')

butleft.addEventListener('click', function(event){
    oneBox.classList.toggle('active')
    twoBox.classList.toggle('active')
})
butright.addEventListener('click', function(event){
    oneBox.classList.toggle('active')
    twoBox.classList.toggle('active')
})