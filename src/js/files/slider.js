

let sliders = document.querySelectorAll("._swiper");
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains("swiper-bild")) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add("swiper-slide");
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement("div");
            slider_wrapper.classList.add("swiper-wrapper");
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = "";
            slider.appendChild(slider_wrapper);
            slider.classList.add("swiper-bild");
        }
    }
    sliders_bild_callback();
}
function sliders_bild_callback(params) { }



if (document.querySelector('.card__images')) {

    const thumbs = new Swiper(".slider-thumbs", {
        slidesPerView: 5,
        spaceBetween: 0,
        // loop: true,

        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",

        // autoplay: {
        //     delay: 3000,
        // },
        // breakpoints: {
        //     768: {
        //         slidesPerView: 1,
        //         // autoplay: false,
        //     },
        //     1280: {
        //         // allowTouchMove: false,
        //         // autoplay: false,
        //     },
        // }
    });
    const big = new Swiper(".slider-big", {
        slidesPerView: 1,
        spaceBetween: 0,
        // loop: true,

        thumbs: {
            swiper: thumbs,
        },

        // autoplay: {
        //     delay: 3000,
        // },
        // breakpoints: {
        //     768: {
        //         slidesPerView: 1,
        //         // autoplay: false,
        //     },
        //     1280: {
        //         // allowTouchMove: false,
        //         // autoplay: false,
        //     },
        // }
    });
}
