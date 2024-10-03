function catalogHeader() {
    const btn = document.querySelector('.catalog-header__btn'),
        body = document.querySelector('.catalog-header')
    if (btn) {
        btn.addEventListener('click', () => {
            body.classList.toggle('_active')
        })
        document.addEventListener('click', (e) => {
            if (!e.target.closest(".catalog-header")) body.classList.remove('_active')
        })
    }
}

function burger() {
    const btn = document.querySelector('.header__burger'),
        body = document.querySelector('.header')
    if (btn)
        btn.addEventListener('click', () => {
            body.classList.toggle('active')
        })
}



document.addEventListener(
    "DOMContentLoaded",
    function () {

        catalogHeader()
        burger()
    },
    false
);




