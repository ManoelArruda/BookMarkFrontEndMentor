document.getElementById("defaultOpen").click();

function openTab(evt, tabId) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabContent" and hide them
  tabcontent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.className += " active";
}  

// Sessão navegadores
document.getElementById("firefox").style.marginTop = "80px";
document.getElementById("opera").style.marginTop = "110px";
// Fim sessão navegadores

//formulario
function enviar(){
  const email = document.getElementById("email");
  if(email.value == ""){
    alert("Por favor, digite um email válido.");
  }else{
    alert("Contato realizado com sucesso.");
  }
}

//questoes
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activee");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
document.getElementById("accordion").style.borderBottom = "1px solid hsl(229, 8%, 60%)";