function toggleMenu() {
  const menuIcon = document.getElementById("menuIcon");
  let list = document.querySelector("ul");
  if (menuIcon.name === "menu") {
    menuIcon.name = "close";
    list.classList.add("top-[70px]");
    list.classList.add("opacity-100");
  } else {
    menuIcon.name = "menu";
    list.classList.remove("top-[70px]");
    list.classList.remove("opacity-100");
  }
}
