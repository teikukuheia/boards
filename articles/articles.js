let keyboardArticle = document.querySelector("[data-article=how-to-choose-a-keyboard]");
let keyboardCleanArticle = document.querySelector("[data-article=how-to-clean-a-keyboard]");

keyboardArticle.addEventListener("click", function(){
    window.location.href = "./choose_keyboard_article/";
});

keyboardCleanArticle.addEventListener("click", function(){
    window.location.href = "./how-to-clean-a-keyboard/";
});