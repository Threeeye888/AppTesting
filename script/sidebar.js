document.getElementById("openbtn1").addEventListener("click", open_close);

var menuState = 0 // close
function open_close() {
  if(menuState === 0){
     menuState = 1;
     document.getElementById("mySidebar").style.width = "20rem";
     document.getElementById("main").style.marginLeft = "20rem";
    
  }
  else {
     menuState = 0;
     document.getElementById("mySidebar").style.width = "0";
     document.getElementById("main").style.marginLeft = "0";
   
  }
  console.log(menuState);
}

function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}




//DropDown//
function dropDown2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
}