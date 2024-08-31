const yesBtn = document.querySelector('#yesBtn')

yesBtn.addEventListener('click', function(){

    alert('WOW UN SI?, ESPERO PODER HACERTE MUY FELIZ')
    alert('TE AMO MI PINCESA')
})


constBtn = document.querySelector('#noBtn')

noBtn.addEventListener('mouseover',function (){

    const randomX = parseInt(Math.random()*100)
    const randomY = parseInt (Math.random()*100)

    noBtn.style.setProperty('top', randomX+'%')
    noBtn.style.setProperty('left',randomY+'%')

    noBtn.style.setProperty('transform', 'translate(-${randomx}%, -${randomY}%)');
} )