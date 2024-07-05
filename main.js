var tl = gsap.timeline(); // GSAP Timeline
var mm = gsap.matchMedia(); // GSAP Match-Media

function loaded_animation() {
    gsap.from("nav", { y: "-100%", duration: 0.5 });
}
loaded_animation();
