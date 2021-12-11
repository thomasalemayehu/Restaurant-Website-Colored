// Get Mobile Menu Button

function activate_mobile_menu() {
  // Menu Activate Button
  var activateMobileMenuButton = document.querySelector(
    ".mobile-navigation-button"
  );

  // Mobile Menu Overlay
  var mobileMenuOverlay = document.querySelector(".mobile-menu-container");

  // Close button

  var mobileMenuCloseOverlay = document.querySelector(
    ".mobile-menu-exit-button"
  );

  // Add Menu Activate Event listener
  activateMobileMenuButton.addEventListener("click", () => {
    mobileMenuOverlay.style.display = "block";
  });

  // Add Close Event listener
  mobileMenuCloseOverlay.addEventListener("click", () => {
    mobileMenuOverlay.style.display = "none";
  });

  // Close Menu after navigation
  var mobileMenuLinks = document.querySelectorAll(
    ".mobile-menu-navigation-link"
  );

  var mobileMenuLinksArr = Array.prototype.slice.call(mobileMenuLinks);

  // Add Events to all links
  mobileMenuLinksArr.forEach((menuLink) => {
    menuLink.addEventListener("click", () => {
      mobileMenuOverlay.style.display = "none";
    });
  });
}

function navigation_transition_handler() {
  function change_menu_on_scroll() {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      document
        .getElementById("navigation-bar")
        .classList.add("scrolled-navigation");
    } else {
      document
        .getElementById("navigation-bar")
        .classList.remove("scrolled-navigation");
    }
  }

  function change_menu_on_scroll_mobile() {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      document
        .getElementById("mobile-navigation-bar")
        .classList.add("scrolled-navigation-mobile");
    } else {
      document
        .getElementById("mobile-navigation-bar")
        .classList.remove("scrolled-navigation-mobile");
    }
  }

  window.onscroll = function () {
    change_menu_on_scroll();
    change_menu_on_scroll_mobile();
  };
}

navigation_transition_handler();

activate_mobile_menu();
