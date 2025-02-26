function addBackgroundColorByID(elementId) {
  const element=document.getElementById(elementId)
  element.classList.add("bg-green-500");

}



function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const elementValue = parseInt(elementText)
  return elementValue;

}




function setElementText(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
   
}







