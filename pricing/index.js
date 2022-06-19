const select = (str) => document.querySelector(str);

const //
  body = select("body"),
  ham = select(".ham"),
  closeNav = select(".close-nav"),
  nav = select(".nav-links"),
  basicPlanContent = select(".basic-plan-content"),
  standardPlanContent = select(".standard-plan-content"),
  growthPlanContent = select(".growth-plan-content"),
  mySwitch = document.querySelector("#switch"),
  yearTag = document.querySelector(".y"),
  monthTag = document.querySelector(".m"),
  mPrice = document.querySelectorAll(".mPrice"),
  mText = document.querySelectorAll(".mText"),
  inputEmail = document.querySelector(".ip-email"),
  btnSubscribe = document.querySelector(".btn-sub");

const basicPlan = [
    "Single Social channel.",
    "15 Posts a Month.",
    "Upto 30 comment replies and promotions.",
    "Reply to messages recieved. (unlimited)",
    "Ad campaign managment of upto $500.",
    "Performance report every two months.",
  ],
  standardPlan = [
    "3 Social channel.",
    "30 Posts a Month.",
    "Upto 80 comments repliesand promotions",
    "Reply to messages recieved.(unlimited)",
    "Ad campaign management and setup of upto $1000.",
  ],
  growthPlan = [
    "3 Social channel.",
    "30 Posts a Month.",
    "Upto 80 comments repliesand promotions",
    "Reply to messages recieved.(unlimited)",
    "Ad campaign management and setup of upto $1000.",
  ];

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

basicPlanContent.innerHTML = basicPlan
  .map(
    (serv) =>
      `<div><ion-icon name="checkmark-sharp"></ion-icon> <p>${serv}</p></div>`
  )
  .join("");
standardPlanContent.innerHTML = standardPlan
  .map(
    (serv) =>
      `<div><ion-icon name="checkmark-sharp"></ion-icon> <p>${serv}</p></div>`
  )
  .join("");
growthPlanContent.innerHTML = growthPlan
  .map(
    (serv) =>
      `<div><ion-icon name="checkmark-sharp"></ion-icon><p> ${serv}</p></div>`
  )
  .join("");

mPrice.forEach((el, i) => {
  el.innerHTML = "$" + (!i ? 399 : i == 1 ? 719 : 1159) + "/m";
});
mText.forEach((el) => (el.innerHTML = "( Paid Annually )"));

// month-year-Switch
mySwitch.addEventListener("change", (e) => {
  let isChecked = mySwitch.checked;

  [monthTag, yearTag].forEach((el) => el.classList.toggle("b"));

  if (isChecked) {
    mPrice.forEach((el, i) => {
      el.innerHTML = "$" + (!i ? 449 : i == 1 ? 799 : 1299) + "/m";
    });

    mText.forEach((el) => (el.innerHTML = "( Paid Monthly )"));
    //
  } else {
    let st, p, py; // Strike-Through , Price, Price-Yearly
    mPrice.forEach((el, i) => {
      st = !i ? 449 : i == 1 ? 799 : 1299;
      p = !i ? 399 : i == 1 ? 719 : 1159;
      el.innerHTML = ` $${p}/m`;
    });

    mText.forEach((el) => (el.innerHTML = "( Paid Annually )"));
  }
});

btnSubscribe.addEventListener("click", () => {
  let data = inputEmail.value ? inputEmail.value : "";
  subscribeNewsletter(data);
});
