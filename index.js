function jumplink_appear_animation() {
    fixed_jumplink_container = document.querySelector(".fixed_jumplink_container");

    if (document.querySelector("main").getBoundingClientRect().bottom < 0) {
        gsap.to("nav", { y: "-105%", duration: 0.3 });
        fixed_jumplink_container.classList.add("jumplink_appear");
    } else {
        gsap.to("nav", { y: 0, duration: 0.3 });
        fixed_jumplink_container.classList.remove("jumplink_appear");
    }
}
window.addEventListener("scroll", () => jumplink_appear_animation());
