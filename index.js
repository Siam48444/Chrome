window.addEventListener("scroll", () => {
    if (document.querySelector("main").getBoundingClientRect().bottom < 0) {
        gsap.to("nav", { y: "-105%" });
        document.querySelector(".fixed_jumplink_container").classList.add("jumplink_appear");
    } else {
        gsap.to("nav", { y: 0 });
        document.querySelector(".fixed_jumplink_container").classList.remove("jumplink_appear");
    }
});
