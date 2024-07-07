var tl = gsap.timeline(); // GSAP Timeline
var mm = gsap.matchMedia(); // GSAP Match-Media

function hero_images_animation() {
    const hero_images = document.querySelectorAll(".hero_images_wrapper img");

    gsap.to(hero_images[0], { x: "-10%", y: "-40%", scale: 0.8, scrollTrigger: { trigger: "main", start: "top 0", scrub: 1 } });
    gsap.from(hero_images[1], { scale: 0.8, scrollTrigger: { trigger: "main", start: "top 0", scrub: 1 } });
    gsap.to(hero_images[3], { x: "10%", y: "-40%", scale: 0.8, scrollTrigger: { trigger: "main", start: "top 0", scrub: 1 } });
}
mm.add("(min-width: 1000px)", () => hero_images_animation());

function loaded_animation() {
    gsap.from(".hero_container", { opacity: 0, y: "8%", duration: 0.5 });
    gsap.from(".hero_images_wrapper img", { opacity: 0, scale: 0.9, y: "20%", duration: 0.5 });
}
loaded_animation();

function update_section_logo_moves() {
    gsap.from(".update_visual svg", {
        left: 0,
        duration: 1,
        delay: 0.5,
        rotate: -90,
        opacity: 0,
        ease: "expo.out",
        scrollTrigger: { trigger: ".update_visual svg" , start: "top 90%"},
    });
}
update_section_logo_moves();
