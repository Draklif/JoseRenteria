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

// Filter portfolio
const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
})

// Link active portfolio
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio() {
    if (linkPortfolio) {
        linkPortfolio.forEach(link => link.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(link => link.addEventListener('click', activePortfolio))

// Details
const details = {
    'portfolio-1': {
        title: 'To-Do Machine',
        category: 'Desarrollo web',
        description: 'Aplicación sencilla realizada en React.js que actúa como una lista de tareas pendientes. Posee funcionalidades para buscar, agregar, añadir, actualizar y eliminar.<br><br>El desarrollo en React permite que la aplicación reaccione a las acciones del usuario de manera casi inmediata, dando la sensación de que la aplicación está viva.',
        imageUrl: 'assets/img/work1.jpg',
        projectUrl: 'https://draklif.github.io/TODO-Machine/'
    },
    'portfolio-2': {
        title: 'Landing Page Asíncrona',
        category: 'Desarrollo web',
        description: 'Esta landing page consume la API de YouTube para extraer los ultimos videos de un youtuber en específico. Sirve como muestra de diseño, utilizando Tailwind CSS y, para extraer los videos, JS puro.',
        imageUrl: 'assets/img/work2.jpg',
        projectUrl: 'https://draklif.github.io/Async-Landing-Page/'
    },
    'portfolio-3': {
        title: 'HooBank',
        category: 'Diseño y Modelado',
        description: 'HooBank es una aplicación ligera de un banco aplicando CSS puro para traer a la vida un diseño moderno.',
        imageUrl: 'assets/img/work3.jpg',
        projectUrl: 'https://draklif.github.io/Modern-Bank/'
    },
    'portfolio-4': {
        title: 'Classroom 2',
        category: 'Diseño y Modelado',
        description: 'Descripción detallada del Proyecto Uno.',
        imageUrl: 'assets/img/work4.jpg',
        projectUrl: 'https://www.figma.com/file/XdQbqzUGJiIPEk5IZhSbXD/Classroom-2%3A-Recargado?type=design&node-id=1516%3A368&mode=design&t=gW4KP2OqbZ6dtgc8-1'
    },
    'portfolio-5': {
        title: 'Easy Shop',
        category: 'Estudios',
        description: 'EasyShop es una plataforma de compras en línea diseñada con un enfoque en la usabilidad y la accesibilidad web. El objetivo es proporcionar a los usuarios una experiencia de compra sencilla y sin complicaciones, independientemente de su nivel de experiencia en la navegación web. Cuenta con un carrito sencillo manejado con JS básico y localstorage para enviar el carrito entre páginas.',
        imageUrl: 'assets/img/work5.jpg',
        projectUrl: 'https://draklif.github.io/EasyShop/'
    },
    'portfolio-6': {
        title: 'Facturador VUE',
        category: 'Estudios',
        description: 'Descripción detallada del Proyecto Uno.',
        imageUrl: 'assets/img/work6.jpg',
        projectUrl: 'https://draklif.github.io/TDW-TallerVue/'
    },
    'portfolio-7': {
        title: 'Skinbox',
        category: 'Desarrollo Web',
        description: 'Descripción detallada del Proyecto Uno.',
        imageUrl: 'assets/img/work7.jpg',
        projectUrl: 'https://draklif.github.io/Skinbox/'
    },
    'portfolio-8': {
        title: 'MIMO-3',
        category: 'Diseño y Modelado',
        description: 'Proceso de diseño para un personaje de un videojuego. MIMO-3 es un pequeño robot modelado y animado en Blender.<br><br>Se aplicó un blocking sencillo, una retopología simple y, posteriormente, un proceso de rigging personalizado que permitiera mover cada pieza del robot de manera independiente. El texturizado se realizó en Substance 3D Painter, otorgándole realismo al diseño.<br><br>El proceso a detalle se puede ver a continuación:',
        imageUrl: 'assets/img/work8.jpg',
        projectUrl: 'https://draklif.github.io/Skinbox/'
    },
    'more-1': {
        title: 'Identificador Gráfico',
        category: 'NA',
        description: 'Descripción detallada del Proyecto Uno.',
        imageUrl: '',
        projectUrl: ''
    },
    'more-2': {
        title: 'Identificador Gráfico',
        category: 'NA',
        description: 'Descripción detallada del Proyecto Uno.',
        imageUrl: '',
        projectUrl: ''
    },
    'more-3': {
        title: 'Identificador Gráfico',
        category: 'NA',
        description: 'Descripción detallada del Proyecto Uno.',
        imageUrl: 'assets/img/LogoBlack.png',
        projectUrl: ''
    },
    'logo': {
        title: 'Identificador Gráfico',
        category: 'NA',
        description: 'El identificador gráfico fue diseñado.',
        imageUrl: 'assets/img/LogoBlack.png',
        projectUrl: 'https://www.behance.net/gallery/181631701/Proyecto-de-Marca'
    },
};

// Dynamic portfolio
const portfolioProjects = document.querySelectorAll('.portfolio__content');

portfolioProjects.forEach(project => {
    id = project.getAttribute('data-id')
    project.children[1].children[0].textContent = details[id].category;
    project.children[1].children[1].textContent = details[id].title;
    project.children[0].href = details[id].projectUrl;
    project.children[0].children[0].src = details[id].imageUrl;
})

// Sidebar
const openDetailButtons = document.querySelectorAll('.button-link');
const openMoreButtons = document.querySelectorAll('.more')
const openLogoImage = document.getElementById('logo')
const sidebar = document.getElementById('portfolio-sidebar');
const closeSidebarButton = document.getElementById('close-sidebar');

function openSidebar() {
    sidebar.classList.add('portfolio-sidebar-active');
}

function closeSidebar() {
    sidebar.classList.remove('portfolio-sidebar-active');
}

openDetailButtons.forEach(button => {
    button.addEventListener('click', (event) => { 
        event.preventDefault()
        loadSidebar(details[event.target.parentElement.parentElement.getAttribute('data-id')])
    })
});

openMoreButtons.forEach(button => {
    button.addEventListener('click', (event) => { 
        event.preventDefault()
        loadSidebar(details[event.target.getAttribute('data-id')])
    })
});

openLogoImage.addEventListener('click', (event) => { 
    loadSidebar(details[event.target.getAttribute('data-id')])
})

function loadSidebar(project) {
    // Actualiza la imagen
    const imageElement = sidebar.querySelector('.portfolio-sidebar-image');
    imageElement.src = project.imageUrl;
    imageElement.alt = project.title;

    // Actualiza el link
    const linkElement = sidebar.querySelector('.portfolio-sidebar-link');
    if (project.projectUrl) {
        linkElement.href = project.projectUrl;
        linkElement.textContent = 'Ir al proyecto'
    } else {
        linkElement.textContent = ''
    }

    // Actualiza el título
    const titleElement = sidebar.querySelector('.portfolio-sidebar-title');
    titleElement.textContent = project.title;

    // Actualiza la descripción
    const descriptionElement = sidebar.querySelector('.portfolio-sidebar-description');
    descriptionElement.innerHTML = project.description;

    openSidebar();
}

closeSidebarButton.addEventListener('click', closeSidebar);

// GSAP
gsap.from('.home__img', { opacity: 0, duration: 2, delay: .5, x: 60 })
gsap.from('.home__data', { opacity: 0, duration: 2, delay: .8, y: 25 })
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', { opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.nav__logo, .nav__toggle', { opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.nav__item', { opacity: 0, duration: 2, delay: 1.8, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.home__social-icon', { opacity: 0, duration: 2, delay: 2, y: 25, ease: 'expo.out', stagger: .2 })