const btnList = document.querySelector(".boards-list");


btnList.addEventListener("click", function (event) {
    if (event.target.closest('.board-item')) {
        console.log("Клик");
    }
});