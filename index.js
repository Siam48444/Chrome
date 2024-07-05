const main = document.querySelector("main");
const nav = document.querySelector("nav");
const fixed_jumplink_container = document.querySelector(".fixed_jumplink_container");

fixed_jumplink_container.style.opacity = 0;
fixed_jumplink_container.style.scale = 0.9;
fixed_jumplink_container.style.pointerEvents = "none";

function jumplink_appear_animation() {
    function jumplink_appear() {
        gsap.to(nav, { y: "-105%", duration: 0.3 });
        gsap.to(fixed_jumplink_container, { y: 0, opacity: 1, scale: 1, duration: 0.3 });
    }
    function jumplink_disappear() {
        gsap.to(nav, { y: 0, duration: 0.3 });
        gsap.to(fixed_jumplink_container, { y: "50%", opacity: 0, scale: 0.9, duration: 0.3 });
    }

    main.getBoundingClientRect().bottom < 0 ? jumplink_appear() : jumplink_disappear();
}

window.addEventListener("scroll", () => jumplink_appear_animation());
