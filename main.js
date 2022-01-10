const searchButton = document.getElementById('search')

const header = document.querySelector('#header')
const mobileMenu = document.querySelector('#mobile-menu')

const closeBars = document.querySelector('.closeBars')
const openBars = document.querySelector('.openBars')

const headerImg = document.querySelector('.header-img')
const navLinks = document.querySelector('.nav_links')
const firstNavlink = document.querySelector('#first-nav-link')
const secondNavlink = document.querySelector('#second-nav-link')
const thirdNavlink = document.querySelector('#third-nav-link')
const navbarToggle = document.querySelector('.navbar__toggle')

const submit_search = document.querySelector('.submit_search')

const search = document.querySelector('.search')

const screenWidth = `${screen.width}`
screenWidth < 651 ? navbarToggle.style.display = "flex" : navbarToggle.style.display = "none";


window.addEventListener('resize', function() {
    let newWidth = window.innerWidth;
    console.log(newWidth + ' pixels')
    newWidth < 651 ? navbarToggle.style.display = "flex" : navbarToggle.style.display = "none";
});

const assignActiveSearch = () => {
    headerImg.classList.toggle('active')
    search.classList.toggle('active')
    search.getAttribute('class').includes('active') ? search.classList.remove('non-active') : search.classList.add('non-active')

}

const assignActiveMenu = () => {
    header.classList.toggle('active');
    //search.classList.toggle('active');
    headerImg.classList.toggle('active');
    navLinks.classList.toggle('active');
    firstNavlink.classList.toggle('active');
    secondNavlink.classList.toggle('active');
    thirdNavlink.classList.toggle('active');
    navbarToggle.classList.toggle('active');

    if (navLinks.getAttribute('class').includes('active')) {
        closeBars.style.display = "flex"
        openBars.style.display = "none"

    } else {
        closeBars.style.display = "none"
        openBars.style.display = "flex"
    }

}

searchButton.addEventListener('click', assignActiveSearch)
submit_search.addEventListener('click', assignActiveSearch)
mobileMenu.addEventListener('click', assignActiveMenu)

firstNavlink.addEventListener('click', assignActiveMenu)
secondNavlink.addEventListener('click', assignActiveMenu)
thirdNavlink.addEventListener('click', assignActiveMenu)