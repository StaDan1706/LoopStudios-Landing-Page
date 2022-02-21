const mobileMenuButton = document.querySelector('.app-menu__button')
const mobileMenu = document.querySelector('.mobile__menu')


const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('mobile__menu__deactivated')
}

mobileMenuButton.addEventListener('click', () => {
    toggleMobileMenu();
})