const //
  body = document.querySelector("body"),
  ham = document.querySelector(".ham"),
  closeNav = document.querySelector(".close-nav"),
  nav = document.querySelector(".nav-links"),
  mySwitch = document.querySelector("#switch"),
  yearTag = document.querySelector(".y"),
  monthTag = document.querySelector(".m"),
  mPrice = document.querySelectorAll(".mPrice"),
  mText = document.querySelectorAll(".mText"),
  inputEmail = document.querySelector(".ip-email"),
  btnSubscribe = document.querySelector(".btn-sub");

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

mPrice.forEach((el, i) => {
  el.innerHTML = "$" + (!i ? 449 : i == 1 ? 799 : 1299) + "/month";
});
mText.forEach((el) => (el.innerHTML = "Billed Monthly"));

// month-year-Switch
mySwitch.addEventListener("change", (e) => {
  let isChecked = mySwitch.checked;

  [monthTag, yearTag].forEach((el) => el.classList.toggle("b"));

  if (!isChecked) {
    mPrice.forEach((el, i) => {
      el.innerHTML = "$" + (!i ? 449 : i == 1 ? 799 : 1299) + "/month";
    });

    mText.forEach((el) => (el.innerHTML = "Billed Monthly"));
    //
  } else {
    let st, p, py; // Strike-Through , Price, Price-Yearly
    mPrice.forEach((el, i) => {
      st = !i ? 449 : i == 1 ? 799 : 1299;
      p = !i ? 399 : i == 1 ? 719 : 1159;
      el.innerHTML = `<span>$${st}</span> $${p}/month`;
    });

    mText.forEach((el, i) => {
      py = !i ? 4788 : i == 1 ? 8628 : 13908;
      el.innerHTML = `Billed at $${py}/year`;
    });
  }
});

btnSubscribe.addEventListener("click", () => {
  let data = inputEmail.value ? inputEmail.value : "";
  subscribeNewsletter(data);
});
