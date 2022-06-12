let isClose = true;
function showMenu()
{
    const navLink = document.querySelector('.nav-link')
    if(isClose){
        navLink.style.transform = 'translate(0)'
        isClose = false
    }else{
        navLink.style.transform = 'translate(100%)'
        isClose = true
    }
}

window.addEventListener('resize',()=>{
    const navLink = document.querySelector('.nav-link')
    navLink.style.transform = 'translate(0)'
})