function jumplink_appear_animation() {
    const main = document.querySelector("main");
    const fixed_jumplink_container = document.querySelector(".fixed_jumplink_container");

    function jumplink_appear() {
        gsap.to("nav", { y: "-105%", duration: 0.3 });
        fixed_jumplink_container.classList.add("jumplink_appear");
    }
    function jumplink_disappear() {
        gsap.to("nav", { y: 0, duration: 0.3 });
        fixed_jumplink_container.classList.remove("jumplink_appear");
    }

    main.getBoundingClientRect().bottom < 0 ? jumplink_appear() : jumplink_disappear();
}

window.addEventListener("scroll", () => jumplink_appear_animation());
