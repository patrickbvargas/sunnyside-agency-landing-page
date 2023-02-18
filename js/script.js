function initMenuMobile() {
  const hamburger = document.querySelector(".header-hamburger img");
  const headerMenu = document.querySelector(".header-menu");
  const htmlDocument = document.documentElement;
  const userEvents = ["click", "touchsend"];
  const className = "active";

  if (hamburger && headerMenu) {
    function toogleMenu() {
      headerMenu.classList.toggle(className);
      hamburger.classList.toggle(className);
    }

    function closeMenu(event) {
      if (
        !headerMenu.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        headerMenu.classList.remove(className);
        hamburger.classList.remove(className);
      }
    }

    userEvents.forEach((event) => {
      hamburger.addEventListener(event, toogleMenu);
      htmlDocument.addEventListener(event, closeMenu);
    });
  }
}

initMenuMobile();
