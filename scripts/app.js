let menuOpenButton = document.getElementById("menu-open-btn")
let menuCloseButton = document.getElementById("menu-close-btn")
let mobileNav = document.getElementById("side-nav")
let nav = document.getElementById("navigation")

menuOpenButton.addEventListener("click", () => {
    nav.style.overflow = "visible";
    mobileNav.style.width = "90%"
    menuOpenButton.style.display = "none"
    menuCloseButton.style.display = "block"
})

menuCloseButton.addEventListener("click", () => {
    mobileNav.style.width = "0"
    menuOpenButton.style.display = "block"
    menuCloseButton.style.display = "none"
    setTimeout(() => {
        nav.style.overflow = "hidden";
    }, 500)
})