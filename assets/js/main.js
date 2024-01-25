/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');

// Check if contactMessage exists before trying to access its properties
const contactMessage = document.getElementById('contact-message') || { textContent: null };

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oqat26k', 'template_p7720lj', '#contact-form', '2N0Tx6i8oaZNUk7A0')
    .then(() => {
        if (contactMessage.textContent !== null) {
            contactMessage.textContent = 'Message sent successfully';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        }

        contactForm.reset();
    })
    .catch(() => {
        if (contactMessage.textContent !== null) {
            contactMessage.textContent = 'Message not sent (service error)';
        }
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', sendEmail);
}


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
