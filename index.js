var tl = gsap.timeline(); // GSAP Timeline
var mm = gsap.matchMedia(); // GSAP Match-Media

function jumplink_appear_animation() {
    const main = document.querySelector("main");

    function jumplink_appear() {
        mm.add("(min-width: 1000px)", () => {
            gsap.to("nav", { y: "-105%", duration: 0.3 });
            gsap.to(".fixed_jumplink_container", { opacity: 1, scale: 1, pointerEvents: "all", duration: 0.3 });
        });
    }
    function jumplink_disappear() {
        mm.add("(min-width: 1000px)", () => {
            gsap.to("nav", { y: 0, duration: 0.3 });
            gsap.to(".fixed_jumplink_container", { opacity: 0, scale: 0.9, pointerEvents: "none", duration: 0.3 });
        });
    }

    main.getBoundingClientRect().bottom < window.innerHeight / 3 ? jumplink_appear() : jumplink_disappear();
}
window.addEventListener("scroll", () => jumplink_appear_animation());

function hero_images_animation() {
    const hero_images = document.querySelectorAll(".hero_images_wrapper img");

    gsap.to(hero_images[0], { x: "-10%", y: "-40%", scale: 0.8, scrollTrigger: { trigger: "main", start: "top 0", scrub: 1 } });
    gsap.from(hero_images[1], { scale: 0.8, scrollTrigger: { trigger: "main", start: "top 0", end: "top -20%", scrub: 1 } });
    gsap.to(hero_images[3], { x: "10%", y: "-40%", scale: 0.8, scrollTrigger: { trigger: "main", start: "top 0", scrub: 1 } });
}
mm.add("(min-width: 1000px)", () => hero_images_animation());
