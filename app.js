const toggleButton = document.querySelector('#toggle-button')
const menu = document.querySelector('#menu')

const menuClick = () => {
    menu.classList.toggle('active')
    toggleButton.classList.toggle('active')
}

toggleButton.addEventListener('click', menuClick)