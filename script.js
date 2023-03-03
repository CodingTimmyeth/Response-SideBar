const hamburgerMenu = document.getElementById('hamburger-menu');
const exit = document.getElementById('exit')
const mobileLinks = document.getElementById('moblie-links')

console.log(mobileLinks);

hamburgerMenu.addEventListener('click', function (e) {
    e.preventDefault()

    if(hamburgerMenu.classList.contains('fa-bars')){
        hamburgerMenu.classList.remove('fa-bars')
        hamburgerMenu.classList.add('fa-xmark')
        exit.classList.remove('hidden')
        console.log('show menu');
        mobileLinks.classList.add('flex')
        mobileLinks.classList.remove('hidden')
     } else if (hamburgerMenu.classList.contains('fa-xmark')){
         hamburgerMenu.classList.remove('fa-xmark')
         hamburgerMenu.classList.add('fa-bars')
         exit.classList.add('hidden')
         console.log('hide menu');
         mobileLinks.classList.add('hidden')
         mobileLinks.classList.remove('flex')

     }

})