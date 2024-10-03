import "./files/functions.js";
import "./files/slider.js";
import "./libs/maskedinput.min.js";

//Компоненты
import "../components/header/header.js";
import "../components/footer/footer.js";

document.addEventListener("click", (e) => {
    if (e.target.closest(".openShow") || e.target.closest(".openShowFile")) {
        document.querySelectorAll("._active").forEach((e) => e.classList.remove("_active"));
        if (document.body.classList.contains("_lock")) document.body.classList.remove("_lock");
        if (document.querySelector(".openShow")) document.querySelector(".openShow").remove();
    }
    if (e.target.closest("._close")) {
        document.querySelectorAll("._active").forEach((e) => e.classList.remove("_active"));
        if (document.body.classList.contains("_lock")) document.body.classList.remove("_lock");
        if (document.querySelector(".openShow")) document.querySelector(".openShow").remove();
    }



    if (!e.target.closest(".select")) {
        document.querySelectorAll(".select").forEach((e) => e.classList.remove("_active"));
    }
    if (e.target.closest(".popup-size") && !e.target.closest(".popup-size__overflow")) {
        document.querySelectorAll("._active").forEach((e) => e.classList.remove("_active"));
        if (document.body.classList.contains("_lock")) document.body.classList.remove("_lock");
        if (document.querySelector(".openShow")) document.querySelector(".openShow").remove();
    }

});
