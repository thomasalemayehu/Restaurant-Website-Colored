// Get Mobile Menu Button

function activate_mobile_menu() {
  // Get Overlay Menu
  var mobileMenuOverlay = document.querySelector("#mobile-menu-overlay");
  // Change Display
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

  window.onscroll = function () {
    change_menu_on_scroll();
  };
}

navigation_transition_handler();
