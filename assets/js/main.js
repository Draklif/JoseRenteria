// Show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// Remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(link => link.addEventListener('click', linkAction))

// Link actions
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.scrollY

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 50
        sectionId = section.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link')
        } else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Change bgheader
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 200 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Show scroll top
const scrollTop = () => {
    const scrollTop = document.getElementById('scroll-top')
    this.scrollY >= 560 ? scrollTop.classList.add('show-scroll') : scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)