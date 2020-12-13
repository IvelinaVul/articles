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
function copyToClipboard(){
  var text= event.target;//.textContent;
 console.log(event);
  text.select();
  document.execCommand("copy");
  alert("Копиран текст");

// /* Select the text field */
// copyText.select();
// copyText.setSelectionRange(0, 99999); /*For mobile devices*/
//
// /* Copy the text inside the text field */
// document.execCommand("copy");
//
// /* Alert the copied text */
// alert("Copied the text: " + copyText.value);
}
