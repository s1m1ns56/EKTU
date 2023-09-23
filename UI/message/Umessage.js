function setMenuState(){
  let menuIsOpen = false;
  const menuButton = document.getElementById("message-menu");
  menuButton.addEventListener('click', ()=>{
      menuIsOpen = !menuIsOpen;
      // действия зависят от значения переменной menuIsOpen
      if(menuIsOpen){
        menuButton.classList.add("open");
      }else{
        menuButton.classList.remove("open");
      }
  })
}

setMenuState();
export default setMenuState;