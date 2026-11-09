const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.querySelector("span").textContent = isOpen ? "−" : "＋";
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    const symbol = menuButton?.querySelector("span");
    if (symbol) symbol.textContent = "＋";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Keep the cassette controls keyboard-accessible through native <details>/<summary>.
document.querySelectorAll(".tape").forEach((tape) => {
  tape.addEventListener("toggle", () => {
    const symbol = tape.querySelector(".tape-toggle");
    if (symbol) symbol.textContent = tape.open ? "＋" : "＋";
  });
});
