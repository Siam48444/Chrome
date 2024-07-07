var tl = gsap.timeline(); // GSAP Timeline
var mm = gsap.matchMedia(); // GSAP Match-Media
Splitting(); // Splitting Js

function jumplink_appear_animation() {
    const main = document.querySelector("main");

    function jumplink_appear() {
        mm.add("(min-width: 1000px)", () => {
            gsap.to(".navigation", { y: "-105%", duration: 0.3 });
            gsap.to(".fixed_jumplink_container", { y: 0, opacity: 1, pointerEvents: "all", duration: 0.3 });
        });
    }
    function jumplink_disappear() {
        mm.add("(min-width: 1000px)", () => {
            gsap.to(".navigation", { y: 0, duration: 0.3 });
            gsap.to(".fixed_jumplink_container", { y: "150%", opacity: 0, pointerEvents: "none", duration: 0.3 });
        });
    }
    main.getBoundingClientRect().bottom < main.clientHeight / 3 ? jumplink_appear() : jumplink_disappear();
}
window.addEventListener("scroll", () => jumplink_appear_animation());

function jumplink_changes_on_scroll() {
    const sections = document.querySelectorAll(".sections");
    const fixed_jumplink = document.querySelectorAll(".fixed_jumplink");

    for (let i = 0; i < fixed_jumplink.length; i++) {
        if (sections[i].getBoundingClientRect().top < 50) {
            fixed_jumplink.forEach((link) => {
                link.classList.remove("fixed_jumplink_active");
            });
            fixed_jumplink[i].classList.add("fixed_jumplink_active");
        }
    }
}
window.addEventListener("scroll", () => jumplink_changes_on_scroll());

tl.from(".heading_special .char", { y: "100%", duration: 1, stagger: 0.05, ease: "elastic.out(0.6, 0.3)" });
tl.from(".heading_special svg", { rotate: -90, opacity: 0, duration: 1, ease: "elastic.out(0.6, 0.3)" }, "<");
