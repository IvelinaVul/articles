function toggleInstalationInstructions(technology, operatingSystem) {
  var active = document.querySelector(`.installation.${technology}.active`);
  active.className = active.className.replace(" active", "");
  active.className += " hidden";
  deactivateButton(`.installation.${technology} button.active`);

  var current = document.querySelector(`.installation.${technology}.${operatingSystem}`);
  current.className = current.className.replace(" hidden", " active");
  activateButton(`.installation.${technology} button.${operatingSystem}`)
}

function deactivateButton(buttonQuery) {
  var button = document.querySelector(buttonQuery);
  button.className = button.className.replace(" active", "");
}

function activateButton(buttonQuery) {
  document.querySelector(buttonQuery).className += " active";
}

function toggleMenu(id) {
  var menu = document.getElementById(id);
  var mainContainer = getMainContainer();
  if (isClosedMenu(menu)) {
    openMenu(menu);
    mainContainer.className = mainContainer.className.replace(" sidenav-closed", " sidenav-opened");
  } else {
    closeMenu(menu);
    mainContainer.className = mainContainer.className.replace(" sidenav-opened", " sidenav-closed");
  }

  function isClosedMenu(menu) {
    return menu.className.search("closed") != -1;
  }

  function closeMenu(menu) {
    menu.className = menu.className.replace(" opened", " closed");
  }

  function openMenu(menu) {
    menu.className = menu.className.replace(" closed", " opened");
  }

  function getMainContainer() {
    return document.getElementById('main-container');
  }

}
