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

gsap.from(".heading_special .char", {
    y: "130%",
    duration: 1.5,
    stagger: 0.01,
    ease: "elastic.out(1,0.4)",
    delay: 0.2,
    scrollTrigger: { trigger: ".heading_special .char", start: "top 90%" },
});
