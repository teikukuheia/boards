// document.designMode = "on";
console.log(document.designMode);



let headerBurgerIcon = document.getElementById("header-burger-icon");

let mobileHeaderMenu = document.getElementById("mobile-header-menu");

headerBurgerIcon.addEventListener("click", function(){
    if (mobileHeaderMenu.classList.contains('menu-visible')){
        mobileHeaderMenu.classList.remove("menu-visible");
    } else {
        mobileHeaderMenu.classList.add("menu-visible");
    }
});