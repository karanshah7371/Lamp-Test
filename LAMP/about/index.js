const //
  body = document.querySelector("body"),
  ham = document.querySelector(".ham"),
  closeNav = document.querySelector(".close-nav"),
  nav = document.querySelector(".nav-links");

var onNav;

const hideNavbar = () => {
  body.style.height = "unset";
  nav.classList.remove("show-navbar");
};

ham.addEventListener("mousedown", function () {
  onNav = 1;
  nav.classList.contains("show-navbar") || (body.style.height = "100vh");
  nav.classList.add("show-navbar");
});

closeNav.addEventListener("click", hideNavbar);
closeNav.addEventListener("touchend", hideNavbar);

// tap-outside of NAVBAR
body.addEventListener("touchstart", () => {
  body.addEventListener("touchstart", () => (onNav = 1));
  nav.addEventListener("touchstart", () => (onNav = 0));
  onNav && hideNavbar();
});
