function showInstalationInstructions(technology, operatingSystem) {
  var active = document.querySelector(`.installation.${technology}.active`);
  active.className = active.className.replace(" active", "");
  active.className += " hidden";
  deactivateButton(`.installation.${technology} button.active`);

  var current = document.querySelector(`.installation.${technology}.${operatingSystem}`);
  current.className = current.className.replace(" hidden", " active");
  activateButton(`.installation.${technology} button.${operatingSystem}`)
}
function deactivateButton(buttonQuery){
  var button=document.querySelector(buttonQuery);
  console.log(button);
  button.className=button.className.replace(" active","");
}
function activateButton(buttonQuery){
  document.querySelector(buttonQuery).className+=" active";
}
