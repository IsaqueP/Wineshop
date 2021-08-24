// Modal
function modal() {
    document
        .querySelector('.modal-overlay')
        .classList.toggle('active');
}


// Menu Mobile
function menuMobile(){
    document.
        querySelector('.iconsHeader')
        .classList.toggle('on')

    document.
        querySelector('.body')
        .classList.toggle('on')
}

// Filtro
function filter(){
    document.
        getElementById('lateralMenu')
        .classList.toggle('on')

    document
        .querySelector('.body')
        .classList.toggle('on')

    document.
        querySelector('.filter')
        .classList.toggle('on')
    
    document.
        querySelector('.closeMenu')
        .classList.toggle('on')
}


