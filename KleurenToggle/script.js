const toggleMenu = function () {
    document.getElementById("menu").classList.toggle("showMenu");

};


const dropDownMenu = function () {
    const showMenu = document.getElementById("showMenu");

    showMenu.addEventListener("mouseover", function () {
        toggleMenu();


    })
    // showMenu.addEventListener("mouseout", function () {
    //     toggleMenu();


    // })
};

dropDownMenu();

const changeColorBackground = function () {
    const changeBackground = document.getElementById("menu");

    changeBackground.addEventListener("click", function (e) {
        document.body.className = e.toElement.className;
        toggleMenu();
    });


}; changeColorBackground()

const keyPress = function () {
    const key = document.body.addEventListener("keypress", function (k) {

        document.body.keyPress = k.key
        if (k.key === "1") {
            document.body.className = "White";
        } else if (k.key === "2") {
            document.body.className = "Red";
        } else if (k.key === "3") {
            document.body.className = "Orange";
        } else if (k.key === "4") {
            document.body.className = "Green";
        } else if (k.key === "5") {
            document.body.className = "Blue";
        } else {
            document.body.className = "";
        };
    }); changeColorBackground()
}; keyPress()