var tl = gsap.timeline(); // GSAP Timeline

function jumplink_appear_animation() {
    const main = document.querySelector("main");
    const nav = document.querySelector("nav");
    const fixed_jumplink_container = document.querySelector(".fixed_jumplink_container");

    function jumplink_appear() {
        gsap.to(nav, { y: "-105%", duration: 0.3 });
        gsap.to(fixed_jumplink_container, { opacity: 1, scale: 1, pointerEvents: "all", duration: 0.5 });
    }
    function jumplink_disappear() {
        gsap.to(nav, { y: 0, duration: 0.3 });
        gsap.to(fixed_jumplink_container, { opacity: 0, scale: 0.9, pointerEvents: "none", duration: 0.5 });
    }

    main.getBoundingClientRect().bottom < 0 ? jumplink_appear() : jumplink_disappear();
}
window.addEventListener("scroll", () => jumplink_appear_animation());

function hero_images_animation() {
    const hero_images = document.querySelectorAll(".hero_images_wrapper img");

    gsap.to(".hero_images_wrapper", { x: "-50%", scrollTrigger: { trigger: "main", start: "top 0", scrub: 1 } });
    gsap.from(hero_images[0], { x: "30%", y: "-30%", scrollTrigger: { trigger: "main", start: "top 0", scrub: 1 } });
}
hero_images_animation();
