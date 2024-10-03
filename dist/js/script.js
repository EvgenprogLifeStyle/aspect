/** Обработка формы */
$('.popup-mailing__form').on("submit", function (e) {
    e.preventDefault()
    $('.popup-mailing').addClass('active')


})

$('.popup-sub__form').on("submit", function (e) {
    e.preventDefault()

    $('.popup-sub').removeClass('_active')
    $('.popup_thanks').addClass('_active')

    setTimeout(() => {
        $('.popup_thanks').removeClass('_active')
        $('.openShow').remove()
        $('body').removeClass('_lock')

    }, 3000)
})


// Очищаем поля формы 
function resetForm() {
    $(".input").each(function () {
        $(this).val('')
        $(this).removeClass('_focus')
    });
    $("textarea").each(function () {
        $(this).val('')
        $(this).removeClass('_focus')
    });
}


function validBasket() {
    let errorLength = 0
    const items = document.querySelectorAll('._req'),
        btn = document.querySelector('.basket-form__btn'),
        deliveryBlock = document.querySelector('.delivery-basket')
    if (btn) {


        for (const input of items) {
            if (input.value.length === 0) {
                input.classList.add('error')
                errorLength = errorLength + 1
            }

            input.addEventListener('input', () => {
                if (input.value.length === 0) {
                    input.classList.add('error')
                    ++errorLength
                    btn.setAttribute('disabled', true)
                } else {
                    input.classList.remove('error')
                    --errorLength
                    if (errorLength === 0) btn.removeAttribute('disabled')
                }
            })
            if (input.classList.contains('input_city'))
                input.addEventListener('input', () => {
                    console.log(1);
                    input.value.length !== 0
                        ? deliveryBlock.classList.add('active')
                        : deliveryBlock.classList.remove('active')

                })
        }
        if (errorLength === 0) btn.removeAttribute('disabled')
    }
}
validBasket()
