
function toogleActiveBtn(className) {
    if (document.querySelector(className))
        document.querySelectorAll(className).forEach(
            e => e.addEventListener('click', function () {
                this.classList.toggle('active')
            })
        )
}

function anchorTop(idSelect, endSelect) {
    const btn = document.getElementById(idSelect);
    if (btn)
        btn.addEventListener("click", () => {
            window.scrollBy({
                top: document.querySelector(endSelect).getBoundingClientRect().top,
                behavior: "smooth",
            });
        });
}

export function castomScroll(el) {
    const block = document.querySelectorAll(el);
    if (block) block.forEach((e) => new SimpleBar(e));
}


export function bgAppend() {
    const newDiv = document.createElement("div");
    document.body.classList.add("_lock");
    newDiv.classList.add("openShow");
    document.querySelector('body').appendChild(newDiv);
}
export function bgRemove() {
    document.body.classList.remove("_lock");
    if (document.querySelector(".openShow")) document.querySelector(".openShow").remove();
}

export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

function btnOfers() {
    const btns = document.querySelectorAll('.offers__item')
    if (btns)
        for (const btn of btns) {
            btn.addEventListener('click', () => {
                if (!btn.classList.contains('_no')) {
                    btns.forEach(e => e.classList.remove('active'))
                    btn.classList.add('active')
                }
            })
        }
}

function btnControlProduct() {
    const btnAdd = document.querySelector('.card__add_btn'),
        btnLink = document.querySelector('.card__add_link')
    if (btnAdd)

        btnAdd.addEventListener('click', () => {
            btnAdd.classList.add('hide')
            btnLink.classList.add('show')
        })

}
function dropProduct() {
    const btn = document.querySelector('.drop-card__top'),
        body = document.querySelector('.drop-card')
    if (btn)
        btn.addEventListener('click', () => {
            body.classList.toggle('active')
        })

}
function show() {
    const btn = document.querySelector('.card__size'),
        body = document.querySelector('.popup-size')
    if (btn)
        btn.addEventListener('click', () => {
            body.classList.add('_active')
            bgAppend()

        })

}
function showSub() {
    const btns = document.querySelectorAll('.offers__item._no'),
        body = document.querySelector('.popup-sub')
    if (btns)
        for (const btn of btns) {
            btn.addEventListener('click', () => {
                body.classList.add('_active')
                bgAppend()

            })
        }


}

function select() {
    const block = document.querySelectorAll('.select')
    if (block)
        for (let i = 0; i < block.length; i++) {
            const el = block[i],
                value = el.querySelector('.select__value'),
                items = el.querySelectorAll('.select__item'),
                input = el.querySelector('.select__input')

            value.addEventListener('click', () => {
                console.log(document.querySelectorAll('.select._active').length);
                if (document.querySelectorAll('.select._active').length > 0)
                    setTimeout(() => {
                        block.forEach(e => e.classList.remove('_active'))
                    }, 300)
                el.classList.toggle('_active')
            })

            for (let j = 0; j < items.length; j++) {
                const item = items[j];
                item.addEventListener('click', () => {
                    items.forEach(e => e.classList.remove('active'))
                    value.textContent = item.textContent
                    item.classList.add('active')
                    el.classList.remove('_active')
                    if (input) input.value = item.textContent

                })
            }
        }
}




$(function () {
    if ($('.datepicker').length > 0)
        $('.datepicker').datepicker({
            format: 'dd.mm.yyyy',
            language: 'ru'
        });


    if ($('.phone').length > 0)
        $(".phone").mask('+7 (999) 999 99 99', {});

});



isWebp();
btnOfers()
btnControlProduct()
dropProduct()
show()
select()
showSub()
toogleActiveBtn('.cart-product__favorites')
toogleActiveBtn('.card__favorites')
anchorTop("up-btn", "html");