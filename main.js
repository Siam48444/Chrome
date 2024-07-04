old_Y = window.scrollY;
function nav_scroll_direction_animation() {
    function scrolling_down() {
        gsap.to("nav", { y: "-105%", duration: 2, ease: "expo.out" });
    }
    function scrolling_up() {
        gsap.to("nav", { y: 0, duration: 2, ease: "expo.out" });
    }

    old_Y < window.scrollY ? scrolling_down() : scrolling_up();
    old_Y = window.scrollY;
}
window.addEventListener("scroll", () => {
    nav_scroll_direction_animation();
});
