const hamburger = document.getElementById('hamburger');
const navItems1 = document.getElementById('nav-list');
const navItems2 = document.getElementById('nav-right');
const navItems = navItems1 + navItems2;


hamburger.addEventListener('click', () => {
    navItems1.classList.toggle('show')  
})

console.log(hamburger)
console.log(navItems1)
console.log(navItems2)