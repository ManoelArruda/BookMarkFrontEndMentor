document.getElementById('tabPattern').click;
function openTab(event, idTab){
  var contents = document.getElementById('tabContent');

  for(var i = 0; i < contents.length; i++){
    contents[i].style.display = 'none';
  }
  var tabButton = document.getElementsByClassName('tabButton');
  for(var i = 0; i < tabButton.length; i++){
    tabButton[i].className = tabButton[i].className.replace('active','');
  }
  document.getElementById(idTab).style.display = 'block';
  event.currentTarget.className += ' active';
}