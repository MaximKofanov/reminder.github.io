var lengthList = reminderList.getElementsByTagName("li").length;
function removeParent(){
  for(var i = 0; i < lengthList; i++){
    document.getElementsByClassName("forgetItem")[i].onclick = function(){
     this.parentNode.remove();
    };         
  }
}

buttonRemember.addEventListener('click',function(){
  if(reminder.value === ''){
    return;
  }
  var newList = reminder.getAttribute('value');
  reminder.setAttribute('value', newList+'');
  var newLi = document.createElement('li');
  newLi.innerHTML = reminder.value+'<div class="forgetItem">x</div>'
  reminderList.appendChild(newLi);
  lengthList = reminderList.getElementsByTagName("li").length;
  removeParent();
  reminder.value = '';
});  
