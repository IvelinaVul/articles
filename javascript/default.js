function showInstalationInstructions(technology, operatingSystem) {
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
  console.log(button);
  button.className = button.className.replace(" active", "");
}

function activateButton(buttonQuery) {
  document.querySelector(buttonQuery).className += " active";
}

function toggleMenu(id) {
  var menu = document.getElementById(id);
  var mainContainer= document.getElementById('main-container');
  if (menu.className.search("closed") == -1) {
    menu.className = menu.className+=" closed";
    mainContainer.style["padding-left"]="60px";
    mainContainer.style.width="90%";

  } else {
    menu.className = menu.className.replace(" closed", "");
    mainContainer.style["padding-left"]="280px";
    mainContainer.style.width="70%";
  }
}
