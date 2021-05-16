function valueChecker(){
   document.querySelector('#textBox').onkeyup = () => {
      if (document.querySelector('#textBox').value.length > 0) {
      document.querySelector('#xlear').style.display = 'block';
      } else {
         document.querySelector('#xlear').style.display = 'none';
      }
   }
}
function clearInput(){
   document.querySelector('#textBox').value = '';
   document.querySelector('#xlear').style.display = 'none';
   document.querySelector('#textBox').focus();
}

document.getElementById("textBox").addEventListener("keyup", valueChecker);
document.getElementById("xlear").addEventListener("click", clearInput);