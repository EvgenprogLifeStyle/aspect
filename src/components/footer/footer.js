import { bgAppend } from '../../js/files/functions.js'

function anchorUp() {
    window.scrollY > window.innerHeight / 2 ? document.getElementById("up-btn").classList.add("in") : document.getElementById("up-btn").classList.remove("in");

}
function popupMailing() {
    const btns = document.querySelectorAll('.open-mail')
    if (btns)
        for (const btn of btns) {
            const form = document.querySelector('.popup-mailing')

            btn.addEventListener('click', () => {
                form.classList.add('_active')
                bgAppend()
            })



        }
}

anchorUp()
popupMailing()
document.addEventListener('scroll', () => {
    anchorUp()
})