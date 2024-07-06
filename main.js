var tl = gsap.timeline(); // GSAP Timeline
var mm = gsap.matchMedia(); // GSAP Match-Media
Splitting(); // Splitting Js

function loaded_animation() {
    gsap.from(".navigation", { y: "-100%", duration: 0.5 });
}
loaded_animation();

function jumplink_appear_animation() {
    const main = document.querySelector("main");

    function jumplink_appear() {
        mm.add("(min-width: 1000px)", () => {
            gsap.to(".navigation", { y: "-105%", duration: 0.3 });
            // gsap.to(".fixed_jumplink_container", { opacity: 1, scale: 1, pointerEvents: "all", duration: 0.3 });
        });
    }
    function jumplink_disappear() {
        mm.add("(min-width: 1000px)", () => {
            gsap.to(".navigation", { y: 0, duration: 0.3 });
            // gsap.to(".fixed_jumplink_container", { opacity: 0, scale: 0.9, pointerEvents: "none", duration: 0.3 });
        });
    }

    main.getBoundingClientRect().bottom < main.clientHeight / 3 ? jumplink_appear() : jumplink_disappear();
}
window.addEventListener("scroll", () => jumplink_appear_animation());
