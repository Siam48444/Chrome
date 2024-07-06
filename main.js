var tl = gsap.timeline(); // GSAP Timeline
var mm = gsap.matchMedia(); // GSAP Match-Media

function loaded_animation() {
    gsap.from("nav", { y: "-100%", duration: 0.5 });
    gsap.from(".hero_images_wrapper img", { opacity: 0, scale: 0.9, y: "20%", duration: 0.5 });
}
loaded_animation();
