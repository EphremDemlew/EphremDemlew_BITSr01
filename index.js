function sendMsg(e) {
  e.preventDefault();

  const form = document.querySelector(".contact_form"),
    name = document.querySelector(".name"),
    email = document.querySelector(".email"),
    msg = document.querySelector(".msg");

  email
    .send({
      secureToken: "",
      To: "ephyaabB@gmail.com",
      Frome: email.value,
      Subject: "Contact Form",
      Body: msg.value,
    })
    .then((message) => alert(message));
}

const arrow = document.querySelector(".arrow");

arrow.addEventListener("click", (e) => {
  document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
  if (document.documentElement.scrollTop <= 50) {
    arrow.style.display = "none";
  } else {
    arrow.style.display = "block";
  }
});

const themeBtn = document.querySelector(".moon");

function getCurrentTheme() {
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  localStorage.getItem("ephy.theme")
    ? (theme = localStorage.getItem("ephy.theme"))
    : null;
  return theme;
}

function loadTheme(theme) {
  const root = document.querySelector(":root");
  root.setAttribute("color-scheme", `${theme}`);
}

themeBtn.addEventListener("click", () => {
  let theme = getCurrentTheme();
  if (theme === "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }
  localStorage.setItem("ephy.theme", `${theme}`);
  loadTheme(theme);
});

window.addEventListener("DOMContentLoaded", () => {
  loadTheme(getCurrentTheme());
});
