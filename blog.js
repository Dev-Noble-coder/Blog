const hamburger = document.querySelector(".menu");
const sidebar = document.querySelector('.navBar')
console.log(sidebar.classList)
hamburger.addEventListener('click', () =>{
    if(sidebar.classList.contains("open")){
        sidebar.classList.remove('open')
    }
    else{
        sidebar.classList.add('open')
    }
})
sidebar.addEventListener('click', () => {
    sidebar.classList.remove('open')
})
